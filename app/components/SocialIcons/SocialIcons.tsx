import Link from "next/link";
import Image from "next/image";
import React from "react";
import "./SocialIcons.css";

export default function SocialIcons() {
  let githubLink = "https://github.com/vnctptr";
  let linkedInLink = "https://www.linkedin.com/in/vincent-potrykus-593a53214/";
  let emailLink = "mailto:vincentpotrykus@gmail.com";
  return (
    <div className="icon-container mb-8">
      <Link href={githubLink}>
        <Image
          className="icon"
          src="/github-icon-white.svg"
          alt="GitHub"
          width={35}
          height={35}
          priority
        />
      </Link>
      <Link href={linkedInLink}>
        <Image
          className="icon"
          src="/linkedin-icon-white.svg"
          alt="LinkedIn"
          width={36}
          height={36}
          priority
        />
      </Link>
      <Link href={emailLink}>
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
  );
}
