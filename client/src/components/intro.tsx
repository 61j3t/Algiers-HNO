"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import Image from "next/image";

export default function LampDemo() {
  return (
    <section className="flex">
      <h1 className="text-5xl font-bold bg-gradient-to-br from-cyan-300 via-cyan-500 to-cyan-900 bg-clip-text text-transparent">
        Healthcare Network Optimisation
      </h1>
      <div className="Map"></div>
    </section>
  );
}
