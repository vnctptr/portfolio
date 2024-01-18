// Card.js

import React from "react";
import "./Card.css";
import Image from "next/image";

export default function Card({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="m-8">
      <div className="card-container">
        <div className="card-top-bar">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="small-circle" />
          ))}
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
