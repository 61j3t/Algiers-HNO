"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Link,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="z-10 relative flex justify-start bg-cyan-700 h-[6vh] shadow-medium shadow-slate-950"
    >
      <NavbarBrand>
        <AcmeLogo />
        <a href="/" className="font-bold">
          Algiers Healthcare Network Optimisation
        </a>
      </NavbarBrand>
    </Navbar>
  );
}
