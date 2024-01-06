// Card.js

import React from "react";
import "./Card.css";
import Image from "next/image";

export default function Card({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="card-outer-container">
      <div className="card-inner-container">
        <div className="card-top-bar">
          <div className="small-circle" />
          <div className="small-circle" />
          <div className="small-circle" />
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
