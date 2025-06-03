'use client'
import Image from "next/image";
import Map from '@/components/map'
import Menu from '@/components/menu'
import './page.css'
import React from "react";
import { useState } from "react";


export default function Home() {
  const [path, setPath] = useState<[number, number][]>([]);
  const [clickedLocation, setClickedLocation] = useState<{
    coordinates: { lat: number; lng: number },
    locationName: string
  } | null>(null);

  const handlePathUpdate = (newPath: [number, number][]) => {
    setPath(newPath);
  };

  const handleLocationClick = (locationData: { coordinates: { lat: number; lng: number }, locationName: string }) => {
    setClickedLocation(locationData);
    // Clear any existing path when a new location is selected
    setPath([]);
  };

  return (
    <main className="flex flex-row h-[93vh]">
      <Menu onPathUpdate={handlePathUpdate} clickedLocation={clickedLocation} />
      <Map path={path} onLocationClick={handleLocationClick} />
    </main>
  );
}
