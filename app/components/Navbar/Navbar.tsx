import "./Navbar.css";
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
        <a
          href="contact"
          className="text-lg no-underline text-grey-darkest hover:text-blue-dark header-font link"
        >
          Contact
        </a>
        <a
          href="http://www.vnctptr.me"
          target="_blank"
          className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-4 header-font link"
        >
          Dev Journal
        </a>
      </div>
    </nav>
  );
}
