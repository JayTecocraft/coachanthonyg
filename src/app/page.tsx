"use client";
import { FreeTrialBanner } from "@/components/FreeTrial";
import LinkCard from "@/components/LinkCard";
import { useState } from "react";

export default function FitClubPreview() {
  const [activeLink, setActiveLink] = useState(0);

  const linksData = [
    {
      title: "Join The Momentum35 Challenge",
      link: "https://thrivecoach.link/KqhScVZR",
    },
    {
      title: "Roswell FitClub",
      link: "https://www.roswellfitclub.com",
    },
    {
      title: "42 Day Shred",
      link: "https://www.fitclubshred.com/",
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/fitclubanthony/#",
    },
    {
      title: "Apply for Coaching",
      link: "https://www.fluidforms.co/embed/form?id=67ca1c8e2553b4d9610d2ca8",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-red-600/30 to-transparent" />

      <main className="relative flex flex-col h-full gap-6 max-w-lg mx-auto items-center justify-center w-full px-4 py-12">
        <div className="flex items-center justify-center mb-2">
          <div className="h-16 w-16 bg-black border-2 border-red-500 rounded-full flex items-center justify-center">
            <span className="text-red-500 font-bold text-3xl">CA</span>
          </div>
        </div>

        <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-600 mb-2">
          Coach Anthonyg
        </h1>

        <p className="text-lg text-center text-gray-300 max-w-sm">
          Elevate your fitness journey with our premium resources and community.
        </p>

        <div className="w-full space-y-4 mt-6">
          {linksData.map((link, index) => (
            <LinkCard
              key={index}
              {...link}
              isActive={activeLink === index}
              onClick={() => setActiveLink(index)}
            />
          ))}
        </div>

        <div className="w-full mt-8">
          <FreeTrialBanner />
        </div>
      </main>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-red-600/30 to-transparent" />
    </div>
  );
}
