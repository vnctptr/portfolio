import Image from "next/image";
import React from "react";
import Card from "@/app/components/Card/Card";
import Navbar from "@/app/components/Navbar/Navbar";
import "@fontsource/titillium-web/700.css";

export default function Home() {
  let habitImageSrc = "/habit-iphone.png";
  let devJournalImageSrc = "/journal-mac.png";
  return (
    <>
      <Navbar></Navbar>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
          <Card imageSrc={habitImageSrc} />
          <Card imageSrc={devJournalImageSrc} />
          <Card imageSrc={habitImageSrc} />
          <Card imageSrc={habitImageSrc} />
        </div>
      </main>
    </>
  );
}
