import Link from "next/link";
import Image from "next/image";
import React from "react";
import "./SocialIcons.css";
import { EMAIL_LINK, GITHUB_LINK, LINKEDIN_LINK } from "@/app/constants";

export default function SocialIcons() {
  return (
    <div className="icon-container">
      <Link href={GITHUB_LINK}>
        <Image
          className="link"
          src="/github-icon-white.svg"
          alt="GitHub"
          width={35}
          height={35}
          priority
        />
      </Link>
      <Link href={LINKEDIN_LINK}>
        <Image
          className="link"
          src="/linkedin-icon-white.svg"
          alt="LinkedIn"
          width={36}
          height={36}
          priority
        />
      </Link>
      <Link href={EMAIL_LINK}>
        <Image
          className="link"
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
