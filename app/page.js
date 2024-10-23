"use client";

import { useState } from "react";
import TextArea from "./_components/TextArea";

export default function Home() {
  const [plainText, setPlainText] = useState("");
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="relative overflow-hidden h-screen">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 py-10 sm-py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
              Globo
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-800">
                Vox
              </span>
            </h1>
            <p className="my-3 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-gray-900">
              GloboVox is your AI-powered language bridge, connecting the world
              through seamless translation.
            </p>

            <div className="mt-7 sm:mt-12 mx-auto max-w-3xl relative">
              {/* <div className="flex gap-4 flex-col md:flex-row"> */}
              <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                <div className="relative z-10 flex flex-col space-x-3 border rounded-lg shadow-lg bg-neutral-900 border-neutral-700 shadow-gray-900/20">
                  <TextArea
                    id="plain-language"
                    value={plainText}
                    onChange={(e) => setPlainText(e.target.value)}
                    placeholder="I have a watermelon that all eyes on it..."
                  />
                  <div className="flex flex-row justify-between w-full">
                    <span className="cursor-pointer flex flex-row space-x-2"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
