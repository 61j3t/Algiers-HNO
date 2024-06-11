"use client";
import Select from "@/components/ui/select";
import Button from "@/components/ui/button";
import { Input } from "@nextui-org/input";
import { useState } from "react";

interface MenuProps {
  onPathUpdate: (newPath: [number, number][]) => void;
}

const Menu: React.FC<MenuProps> = ({ onPathUpdate }) => {
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
  const [location, setLocation] = useState("Sidi Abdellah");
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("A* Search");
  const [selectedDepartment, setSelectedDepartment] = useState("Emergency Medicine");

  const handleGoButtonClick = () => {
    // Log state variables before sending data
    console.log("Sending data to server:", {
      location,
      selectedAlgorithm,
      selectedDepartment,
    });

    const data = {
      location,
      algorithm: selectedAlgorithm,
      department: selectedDepartment,
    };

    // Send POST request to server
    fetch("http://localhost:5000/solve", {
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
    <form className="Menu w-1/3 h-[94vh] bg-slate-100 shadow-2xl shadow-slate-900" >
      <h1 className="h-[20vh] flex justify-center items-center text-7xl font-bold text-center text-cyan-700">
        Menu
      </h1>
      <div className="Data h-1/2 flex flex-col items-center justify-center gap-16 mx-12">
        <Input
          type="text"
          label="Where are you?"
          placeholder="Your current location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Select
          items={algorithms}
          default_item="A* Search"
          placeholder="Select an Algorithm"
          value={selectedAlgorithm}
          onChange={(value) => setSelectedAlgorithm(value)}
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
          className="shadow-inner px-12 py-2 font-bold bg-cyan-500 rounded-large hover:scale-105 hover:shadow-small hover:bg-gradient-to-br from-teal-700 via-cyan-700 to-cyan-900 ease-in-out duration-250"
          type="button"
          onClick={handleGoButtonClick}
        >
          GO!
        </button>
      </div>
    </form>
  );
};

export default Menu; // Default export the Menu component
