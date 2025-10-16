"use client";
import Image from "next/image";
import Banner from "./components/banner";
import Beyond_vision from "./components/Beyond_vision";
// import Skiper19 from "./components/Skiper19";
import Featured_work from "./components/Featured_work";
import Connecting_ideas from "./components/connecting_ideas";
// import TextMotion from "./framer/page";
export default function Home() {
  return (
    <main className="pt-20 overflow-hidden">
      {/* Add some padding-top to account for the fixed header */}
      <Banner />
      <Beyond_vision/>
      <Featured_work/>
      {/* <Skiper19/> */}
      <Connecting_ideas/>
      {/* <TextMotion/> */}
      {/* Add some content to see the page structure */}
     
    </main>
  );
}
