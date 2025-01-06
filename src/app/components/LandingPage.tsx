"use client";

import { Vortex } from "../../components/ui/vortex";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export default function LandingPage() {
  const words = [
    {
      text: "Hurry",
      className: "text-purple-600",
    },
    {
      text: "Up!",
      className: "text-purple-600",
    },
    {
      text: "visit",
    },
    {
      text: "us",
    },
    {
      text: "and",
    },
    {
      text: "apply",
    },
    {
      text: "for",
    },
    {
      text: "new",
    },
    {
      text: "goverment",
    },
    {
      text: "services",
    },
  ];

  return (
    <>
      <div id="home" className="mt-20">
        <div className="w-[calc(100%-4rem)] mx-auto rounded-3xl h-[35rem] overflow-hidden flex-1 mt-10 md:mt-0">
          <Vortex
            backgroundColor="black"
            className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
          >
            <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
              Ek Noor Services
            </h2>
            <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
              Streamlining digital services for your convenience.
            </p>
          </Vortex>
        </div>

        <div className="flex flex-col gap-y-10 mt-10">
          <div className="flex justify-center items-center">
            <TypewriterEffect words={words} />
          </div>

          <div className="relative overflow-hidden bg-gradient-to-r from-purple-800 to-purple-500 text-white mx-5 rounded-lg shadow-lg">
            <div className="flex space-x-10 marquee whitespace-nowrap">
              <span className="text-lg font-semibold with-bullet">
                Driving License Sewa
              </span>
              <span className="text-lg font-semibold with-bullet">
                Vehicle RC Sewa
              </span>
              <span className="text-lg font-semibold with-bullet">
                Passport Sewa
              </span>
              <span className="text-lg font-semibold with-bullet">
                Health Insurance
              </span>
              <span className="text-lg font-semibold with-bullet">
                Vehicle Insurance
              </span>
              <span className="text-lg font-semibold with-bullet">
                Pet Registration
              </span>
              <span className="text-lg font-semibold with-bullet">
                Railway Tickets
              </span>
              <span className="text-lg font-semibold with-bullet">
                Pan Card
              </span>
              <span className="text-lg font-semibold with-bullet">
                Ayushman Card
              </span>
              <span className="text-lg font-semibold with-bullet">
                Voter Card
              </span>
              <span className="text-lg font-semibold with-bullet">
                Abha Card
              </span>
              <span className="text-lg font-semibold with-bullet">FastTag</span>
              <span className="text-lg font-semibold with-bullet">PMSYM</span>
              <span className="text-lg font-semibold with-bullet">
                PVC Adhaar
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
