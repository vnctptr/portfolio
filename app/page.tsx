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

      <main className="flex flex-col items-center justify-between max-w">
        <div className="grid text-center lg:max-w-4xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
          <div className="col-span-2 mx-8 mt-9">
            <h1 className="font-bold mb-3">ABOUT</h1>
            <p className="text-left">
              Welcome to my digital realm, where lines of code dance and ideas
              come to life! I am a passionate and innovative software developer
              dedicated to crafting elegant solutions that seamlessly merge form
              and function.{" "}
              <span style={{ color: "white" }}>
                <b>With a keen eye for detail and a love for problem-solving</b>
              </span>
              , I thrive on turning complex challenges into streamlined,
              user-friendly experiences. Whether it's{" "}
              <span style={{ color: "white" }}>
                <b>building robust web applications</b>
              </span>
              , optimizing databases, or delving into the intricacies of
              algorithm design, I approach each project with a blend of
              creativity and precision. Join me on this exciting expedition
              through the digital landscape, where every line of code is a
              brushstroke in the canvas of innovation.
            </p>
            <h1 className="font-bold mt-5">PROJECTS</h1>
          </div>
        </div>
        <div className="mb-32 grid text-center lg:max-w-4xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
          <Card imageSrc={habitImageSrc} />
          <Card imageSrc={devJournalImageSrc} />
          <Card imageSrc={habitImageSrc} />
          <Card imageSrc={habitImageSrc} />
        </div>
      </main>
    </>
  );
}
