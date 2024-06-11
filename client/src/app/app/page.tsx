'use client'
import Image from "next/image";
import Map from '@/components/map'
import Menu from '@/components/menu'
import './page.css'
import React from "react";
import { useState } from "react";


export default function Home() {
  const [path, setPath] = useState<[number, number][]>([]);
  const handlePathUpdate = (newPath:[number, number][]) => {
    setPath(newPath);
  };
  return (
    <main className="flex flex-row h-[93vh]">
        <Menu onPathUpdate={handlePathUpdate}/>
        <Map path={path}/>
    </main>
  );
}
