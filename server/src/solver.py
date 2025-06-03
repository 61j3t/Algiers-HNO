from node import Node
from collections import deque
import heapq


class Solver:
    def __init__(self, problem):
        self.problem = problem

    def general_search(self, strategy="Breadth First Search"):
        initial_node = Node(state=self.problem.initial_state, path_cost=0)
        if self.problem.goal_test(initial_node.state):
            return self.solution(initial_node)

        if strategy == "Breadth First Search":
            frontier = deque([initial_node])  # Use a deque for BFS
        elif strategy == "A* Search":
            # Initialize the priority queue with the initial node and its cost
            frontier = []
            heapq.heappush(
                frontier,
                (
                    self.problem.heuristic(initial_node) + initial_node.path_cost,
                    initial_node,
                ),
            )
        else:
            frontier = [initial_node]  # Use a list for DFS

        explored = set()

        while frontier:
            if strategy == "Breadth First Search":
                node = frontier.popleft()  # FIFO for BFS
            elif strategy == "A* Search":
                _, node = heapq.heappop(frontier)  # Pop the node with the lowest cost
            else:
                node = frontier.pop()  # LIFO for DFS

            if node.state not in explored:
                explored.add(node.state)

                if self.problem.goal_test(node.state):
                    return self.solution(node)

                for action in self.problem.actions(node.state):
                    child = self.problem.child_node(node, action)
                    if (
                        child.state not in explored
                    ):  # and all(child != existing[1] for existing in frontier):
                        if strategy == "A* Search":
                            heapq.heappush(
                                frontier,
                                (
                                    child.path_cost
                                    + self.problem.heuristic(child.state),
                                    child,
                                ),
                            )
                        else:
                            frontier.append(child)

        return "GOAL IS UNREACHABLE!"

    def hill_climbing_search(self, max_iterations=1000):
        """Hill climbing search for pathfinding - finds path by always moving to neighbor with best heuristic"""
        current_node = Node(state=self.problem.initial_state, path_cost=0)

        # Check if we start at the goal
        if self.problem.goal_test(current_node.state):
            return self.solution(current_node)

        for iteration in range(max_iterations):
            # Get all neighbors (successors) of current state
            neighbors = self.problem.actions(current_node.state)

            if not neighbors:
                # No more moves possible - dead end
                break

            # Find the best neighbor (lowest heuristic value = closest to goal)
            best_neighbor = None
            best_heuristic = float("inf")

            for neighbor_state in neighbors:
                neighbor_heuristic = self.problem.heuristic(neighbor_state)

                # Choose neighbor with smallest heuristic (closest to goal)
                if neighbor_heuristic < best_heuristic:
                    best_heuristic = neighbor_heuristic
                    best_neighbor = neighbor_state

            if best_neighbor is None:
                # No valid neighbors found
                break

            # Create child node for the best neighbor
            best_neighbor_node = self.problem.child_node(current_node, best_neighbor)

            # Check if we reached the goal
            if self.problem.goal_test(best_neighbor):
                return self.solution(best_neighbor_node)

            # Hill climbing: only move if the neighbor is better than current
            current_heuristic = self.problem.heuristic(current_node.state)
            if best_heuristic < current_heuristic:
                # Move to better neighbor
                current_node = best_neighbor_node
            else:
                # Local optimum reached - no better neighbors
                # In classic hill climbing, we'd stop here
                # But for pathfinding, we might want to explore anyway
                print(f"Hill climbing: Local optimum reached at iteration {iteration}")
                print(
                    f"Current heuristic: {current_heuristic}, Best neighbor: {best_heuristic}"
                )

                # Option 1: Stop at local optimum (classic hill climbing)
                break

                # Option 2: Continue anyway (might find goal despite local optimum)
                # current_node = best_neighbor_node

        # If we exit the loop without finding goal, return the path to best position found
        return self.solution(current_node)

    def solution(self, node):
        path = []
        while node:
            path.insert(0, node)
            node = node.parent
        return path
