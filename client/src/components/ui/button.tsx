'use client'
import React, { useState } from "react";
import {Button} from "@nextui-org/react";
import { FaArrowCircleRight } from "react-icons/fa";



export default function App() {
  return (
    <div className="text-foreground flex flex-wrap gap-4 items-center">
      <Button color="primary" variant="shadow">
        GO<FaArrowCircleRight className="hidden hover:inline"/>
      </Button>  
    </div>
  );
}
