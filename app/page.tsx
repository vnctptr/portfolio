import React from "react";
import Card from "@/app/components/Card/Card";
import Navbar from "@/app/components/Navbar/Navbar";
import "@fontsource/titillium-web/700.css";
import SocialIcons from "@/app/components/SocialIcons/SocialIcons";
import Image from "next/image";

export default function Home() {
  let habitImageSrc = "/habit-iphone.png";
  let devJournalImageSrc = "/journal-mac.png";
  return (
    <>
      <Navbar></Navbar>
      <main className="flex flex-col items-center juswtify-between max-w">
        <div className="grid lg:max-w-3xl lg:w-full lg:mb-0 lg:grid-cols-2">
          <div className="col-span-2 mx-8 mt-9">
            <h1 className="font-bold mb-14 text-left text-5xl header-font">
              Vincent Potrykus
            </h1>
            <p className="text-left mb-8 link-accent">
              Hi! Welcome to my portfolio page. My name is Vincent and I&apos;m
              a software developer based in beautiful Victoria, BC If you&apos;d
              like to get in touch with me, feel free to send me an email at{" "}
              <a href="mailto:vincentpotrykus@gmail.com">
                vincentpotrykus@gmail.com
              </a>
              . You can also find me on Github and LinkedIn using the icons
              below. PS Don’t forget to check out my{" "}
              <a href="https://www.vnctptr.me">Dev Journal</a>!
            </p>
            <div className="flex gap-4">
              <SocialIcons />
              <div className="download-button px-5 py-1.5 rounded-3xl m-2">
                <a
                  href="/resume.pdf"
                  download="vincent-potrykus-resume.pdf"
                  className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 header-font download-button link"
                >
                  Resume
                  <Image
                    className="pl-2"
                    src="/download.svg"
                    alt="GitHub"
                    width={30}
                    height={30}
                    priority
                  />
                </a>
              </div>
            </div>
            <h1 className="font-bold mb-3 mt-20 text-left">ABOUT</h1>
            <p className="text-left mb-8">
              Welcome to my digital realm, where lines of code dance and ideas
              come to life! I am a passionate and innovative software developer
              dedicated to crafting elegant solutions that seamlessly merge form
              and function.{" "}
              <span style={{ color: "white" }}>
                <b>With a keen eye for detail and a love for problem-solving</b>
              </span>
              , I thrive on turning complex challenges into streamlined,
              user-friendly experiences. Whether it&apos;s{" "}
              <span style={{ color: "white" }}>
                <b>building robust web applications</b>
              </span>
              , optimizing databases, or delving into the intricacies of
              algorithm design, I approach each project with a blend of
              creativity and precision. Join me on this exciting expedition
              through the digital landscape, where every line of code is a
              brushstroke in the canvas of innovation.
            </p>
            <h1 className="font-bold mt-20 text-left">PROJECTS</h1>
          </div>
        </div>
        <div className="mb-32 grid lg:max-w-3xl lg:w-full lg:mb-0 lg:grid-cols-2 text-left">
          <Card imageSrc={habitImageSrc} />
          <Card imageSrc={devJournalImageSrc} />
          <Card imageSrc={habitImageSrc} />
          <Card imageSrc={habitImageSrc} />
        </div>
      </main>
    </>
  );
}
