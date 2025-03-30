"use client";

import { DashboardFooter } from "@/components/layouts/Footer";
import { DashboardHeader } from "@/components/layouts/Header";
import { RouteGuard } from "@/components/auth/RouteGuard";
import { LenderSidebar } from "@/components/layouts/lender/Sidebar";
import ParticlesBackground from "@/components/lender/active-loans/ParticlesBackground";
import type React from "react";
import { useState, useEffect } from "react";

export default function LenderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [, setLanguage] = useState<"es" | "en" | "fr" | "de">("en");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return (
    <div
      className={`relative flex min-h-screen ${theme === "dark" ? "dark" : ""}`}
    >
      <div className="absolute inset-0 -z-10">
        <ParticlesBackground />
      </div>

      <div className={`flex min-h-screen ${theme === "dark" ? "dark" : ""}`}>
        <LenderSidebar />
        <div className="w-full flex flex-col bg-gradient-to-b from-[#0B1120] via-[#0B1120] to-[#121E31]">
          <DashboardHeader
            theme={theme}
            setTheme={setTheme}
            setLanguage={setLanguage}
          />
          {children}
          <DashboardFooter />
        </div>
      </div>
    </div>
  );
}
