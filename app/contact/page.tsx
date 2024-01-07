import Navbar from "@/app/components/Navbar/Navbar";
import Card from "@/app/components/Card/Card";
import React from "react";
import "./page.css";

export default function Page() {
  let habitImageSrc = "/habit-iphone.png";
  let devJournalImageSrc = "/journal-mac.png";
  return (
    <>
      <Navbar></Navbar>
      <div className="contact-inner-container">
        <h1>Get in touch with me!</h1>
      </div>
    </>
  );
}
