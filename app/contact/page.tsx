import Navbar from "@/app/components/Navbar/Navbar";
import React from "react";
import "./page.css";
import SocialIcons from "@/app/components/SocialIcons/SocialIcons";
import { EMAIL_LINK } from "@/app/constants";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="contact-inner-container">
        <div className="flat-box mx-5">
          <div className="text-center">
            <h1 className="text-2xl">Say Hi!</h1>
          </div>
          <p className="mt-6 mb-8 link-accent">
            If you&apos;d like to get in touch with me, feel free to send me an
            email at <a href={EMAIL_LINK}>vincentpotrykus@gmail.com</a>. You can
            also find me on Github and LinkedIn using the icons below.
          </p>
          <SocialIcons />
        </div>
      </div>
    </>
  );
}
