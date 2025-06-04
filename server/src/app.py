# Update imports to include necessary modules
from flask import Flask, request, jsonify
from flask_cors import CORS
from utils import get_current_location_coordinates
from problem import Problem
from solver import Solver
from constants import BACKEND_PORT, ALLOWED_ORIGINS
import os
import osmnx as ox
from problem import nodes

app = Flask(__name__)
CORS(app, origins=ALLOWED_ORIGINS)  # Allow CORS for specific origins


@app.route("/solve", methods=["POST"])
def solve():
    script_dir = os.path.dirname(__file__)

    data_file_path = os.path.join(
        script_dir, "..", "data", "Map.graphml"
    )  # Adjust file path
    graph = ox.load_graphml(filepath=data_file_path)

    # Receive and print the data sent from the client
    data = request.json
    print("Received data from client:", data)

    # Handle both old format (location) and new format (latitude/longitude)
    if "latitude" in data and "longitude" in data:
        # New format: coordinates sent directly
        Y = data.get("latitude")
        X = data.get("longitude")
    elif "location" in data:
        # Old format: location name to be geocoded (for backward compatibility)
        location = data.get("location")
        Y, X = ox.geocoder.geocode(location)
    else:
        return (
            jsonify(
                {
                    "error": "Either 'location' or 'latitude'/'longitude' must be provided"
                }
            ),
            400,
        )

    algorithm = data.get("algorithm")
    type = data.get("type")
    department = data.get("department")

    initial_state = ox.distance.nearest_nodes(graph, X, Y, return_dist=False)
    goal_state = {"type": type, "department": department}
    problem = Problem(initial_state, goal_state)
    solver = Solver(problem)

    if algorithm == "Hill Climbing Search":
        solution_path = solver.hill_climbing_search()
    else:
        solution_path = solver.general_search(strategy=algorithm)

    print("==================================================================")
    print(solution_path)
    print("==================================================================")

    path = [
        [nodes[str(node.state)]["y"], nodes[str(node.state)]["x"]]
        for node in solution_path
    ]

    return jsonify({"path": path})


# Add route to handle OPTIONS requests for the /solve endpoint
@app.route("/solve", methods=["OPTIONS"])
def solve_options():
    response = jsonify(success=True)
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "Content-Type")
    response.headers.add("Access-Control-Allow-Methods", "POST")
    return response


if __name__ == "__main__":
    app.run(debug=True, port=BACKEND_PORT)
