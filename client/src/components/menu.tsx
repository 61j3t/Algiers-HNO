"use client";
import Select from "@/components/ui/select";
import Button from "@/components/ui/button";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import { API_ENDPOINTS } from "@/constants/config";

interface MenuProps {
    onPathUpdate: (newPath: [number, number][]) => void;
    clickedLocation?: {
        coordinates: { lat: number; lng: number },
        locationName: string
    } | null;
}

const Menu: React.FC<MenuProps> = ({ onPathUpdate, clickedLocation }) => {
    const algorithms = [
        "Breadth First Search",
        "Depth First Search",
        "A* Search",
        "Hill Climbing Search",
    ];
    const departments = [
        "Anatomical Pathology",
        "Anesthesia and Critical Care",
        "Biochemistry",
        "Burn Surgery",
        "Cardiac Surgery",
        "Cardiology",
        "Cardiovascular and Thoracic Surgery",
        "Dermatology",
        "Diabetology",
        "Emergency Medical Surgery",
        "Emergency Medicine",
        "Endocrinology",
        "Epidemiology",
        "Forensic Medicine",
        "Functional Rehabilitation",
        "Gastroenterology",
        "General Surgery",
        "Hematology",
        "Hepatology",
        "Histology",
        "Immunology",
        "Infectious Diseases",
        "Internal Medicine",
        "Maternity",
        "Microbiology",
        "Neonatology",
        "Nephrology",
        "Neurology",
        "Neurophysiology",
        "Neuroradiology",
        "Neurosurgery",
        "Nuclear Medicine",
        "Obstetrics and Gynecology",
        "Occupational Medicine",
        "Ophthalmology",
        "Oral Pathology and Surgery",
        "Orthopedics",
        "Otorhinolaryngology",
        "Parasitology",
        "Parasitology & Mycology",
        "Pathological Anatomy",
        "Pediatric Surgery",
        "Pediatrics",
        "Periodontology",
        "Pharmacology",
        "Phthisiology",
        "Physical Medicine and Rehabilitation",
        "Physiology",
        "Plastic Reconstructive Surgery",
        "Pneumo-Allergist",
        "Pneumology",
        "Pneumophthisiology",
        "Psychiatry",
        "Pulmonology",
        "Radiology",
        "Reanimation",
        "Rheumatology",
        "Sports Medicine",
        "Surgical Clinic",
        "Surgical Intensive Care (Critical Care)",
        "Thoracic Surgery",
        "Toxicology",
        "Traumatology",
        "Vascular Surgery",
    ];
    const [selectedAlgorithm, setSelectedAlgorithm] = useState("A* Search");
    const [selectedType, setSelectedType] = useState("public");
    const [selectedDepartment, setSelectedDepartment] =
        useState("Emergency Medicine");

    const handleGoButtonClick = () => {
        // Check if a location has been clicked on the map
        if (!clickedLocation) {
            alert("Please click on the map to select your location first!");
            return;
        }

        // Log state variables before sending data
        console.log("Sending data to server:", {
            coordinates: clickedLocation.coordinates,
            locationName: clickedLocation.locationName,
            selectedAlgorithm,
            selectedType,
            selectedDepartment,
        });

        const data = {
            latitude: clickedLocation.coordinates.lat,
            longitude: clickedLocation.coordinates.lng,
            algorithm: selectedAlgorithm,
            type: selectedType,
            department: selectedDepartment,
        };

        // Send POST request to server
        fetch(API_ENDPOINTS.SOLVE, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data["path"]);
                onPathUpdate(data["path"]);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <form className="Menu w-1/3 h-full bg-slate-100 shadow-slate-900">
            <h1 className="h-[20vh] flex justify-center items-center text-7xl font-bold text-center text-cyan-700">
                Menu
            </h1>
            <div className="Data h-1/2 flex flex-col items-center justify-center gap-8 mx-12">
                {/* Display clicked location info */}
                <div className="w-full p-4 bg-white rounded-lg border border-gray-200">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Selected Location:</h3>
                    {clickedLocation ? (
                        <div>
                            <p className="text-sm text-gray-800 font-medium mb-1">
                                {clickedLocation.locationName}
                            </p>
                            <p className="text-xs text-gray-500">
                                {clickedLocation.coordinates.lat.toFixed(6)}, {clickedLocation.coordinates.lng.toFixed(6)}
                            </p>
                        </div>
                    ) : (
                        <p className="text-sm text-gray-400 italic">Click on the map to select your location</p>
                    )}
                </div>

                <Select
                    items={algorithms}
                    default_item="A* Search"
                    placeholder="Select an Algorithm"
                    value={selectedAlgorithm}
                    onChange={(value) => setSelectedAlgorithm(value)}
                />
                <Select
                    items={["public", "private"]}
                    default_item="public"
                    placeholder="Select a type"
                    value={selectedType}
                    onChange={(value) => setSelectedType(value)}
                />
                <Select
                    default_item="Emergency Medicine"
                    items={departments}
                    placeholder="Select a Department"
                    value={selectedDepartment}
                    onChange={(value) => setSelectedDepartment(value)}
                />
            </div>
            <div className="flex justify-center mt-12">
                <button
                    className={`shadow-inner px-12 py-2 font-bold rounded-large ease-in-out duration-250 ${clickedLocation
                        ? "bg-cyan-500 hover:scale-105 hover:shadow-small hover:bg-gradient-to-br from-teal-700 via-cyan-700 to-cyan-900"
                        : "bg-gray-400 cursor-not-allowed"
                        }`}
                    type="button"
                    onClick={handleGoButtonClick}
                    disabled={!clickedLocation}
                >
                    GO!
                </button>
            </div>
        </form>
    );
};

export default Menu; // Default export the Menu component
