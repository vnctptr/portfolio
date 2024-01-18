// Card.js

import React from "react";
import "./Card.css";
import Image from "next/image";

export default function Card({
  imageSrc,
  title,
}: {
  imageSrc: string;
  title: string;
}) {
  return (
    <div className="m-8">
      <div className="card-container">
        <div className="card-top-bar">
          <div className="flex items-center">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="small-circle" />
            ))}
            <p className="pl-2 header-font">{title}</p>
          </div>
        </div>
        <div className="card-content">
          <Image
            src={imageSrc}
            alt="Habit Tracker"
            width={500}
            height={300}
            priority
          />
        </div>
      </div>
    </div>
  );
}
