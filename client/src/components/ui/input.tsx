import React from "react";
import {Input} from "@nextui-org/react";

export default function App() {
  return (
    <div className="flex w-2/3 flex-wrap md:flex-nowrap">
      <Input type="email" label="Email" />
    </div>
  );
}