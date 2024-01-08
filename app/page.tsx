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

      <main className="flex flex-col items-center justify-between">
        <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
          <div className="col-span-2 mx-8">
            Hi! I'm a software developer based in Victoria, BC. I'm currently
            working at a startup. I'm passionate about building software that
            improves people's lives. I'm always looking for new opportunities to
            learn and grow.
          </div>
        </div>

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
