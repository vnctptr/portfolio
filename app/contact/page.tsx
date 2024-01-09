import Navbar from "@/app/components/Navbar/Navbar";
import React from "react";
import Link from "next/link";
import "./page.css";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="contact-inner-container flat-box">
        <h1>Get in touch with me!</h1>
        <div className="icon-container">
          <Link href="https://github.com/vnctptr">
            <Image
              className="icon"
              src="/github-icon-white.svg"
              alt="GitHub"
              width={35}
              height={35}
              priority
            />
          </Link>
          <Link href="https://www.linkedin.com/in/vincent-potrykus-593a53214/">
            <Image
              className="icon"
              src="/linkedin-icon-white.svg"
              alt="LinkedIn"
              width={36}
              height={36}
              priority
            />
          </Link>
          <Link href="mailto:vapotrykus@gmail.com">
            <Image
              className="icon"
              src="/email.svg"
              alt="Email"
              width={40}
              height={40}
              priority
            />
          </Link>
        </div>
      </div>
    </>
  );
}
