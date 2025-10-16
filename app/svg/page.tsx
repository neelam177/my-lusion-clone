"use client";

import React from "react";

const path =
  "M0 186.219C138.5 186.219 305.5 194.719 305.5 49.7188C305.5 -113.652 -75 186.219 484.5 186.219H587.5";

const PathFollower: React.FC = () => {
  return (
    <div className="relative w-full max-w-3xl h-52 border border-gray-300 mx-auto overflow-hidden">
      <svg
        viewBox="0 0 600 200"
        className="absolute inset-0 w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={path} stroke="black" fill="none" />
      </svg>

      <div className="absolute w-5 h-5 bg-red-500 rounded-full top-0 left-0 animate-bounce" />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <PathFollower />
    </main>
  );
};

export default App;
