import "./Navbar.css";
import Image from "next/image";
import React from "react";
export default function Navbar() {
  return (
    <nav className="flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-6 px-6 sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <a
          href="/"
          className="page-title text-2xl no-underline text-grey-darkest hover:text-blue-dark"
        ></a>
      </div>
      <div>
        <div className="download-button px-5 py-1.5 rounded-3xl m-2">
          <a
            href="/resume.pdf"
            download="vincent-potrykus-resume.pdf"
            className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 header-font download-button"
          >
            Resume
            <Image
              className="icon pl-2"
              src="/download.svg"
              alt="GitHub"
              width={30}
              height={30}
              priority
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
