import React from "react";
import home from "../assets/Group 94.png";
import moto from "../assets/Group.png";
import happy from "../assets/Group 93.png";

function Content() {
  return (
    <div className="w-full max-w-screen-lg mx-auto text-center py-10">
      <h3
        className="font-bold text-base text-gray-700"
        style={{ fontFamily: "Philosopher" }}
      >
        FEATURES
      </h3>
      <h1
        className="text-2xl font-bold text-gray-800 mt-2"
        style={{ fontFamily: "Philosopher" }}
      >
        Food With A New Passion
      </h1>
      <div className="flex  justify-center gap-6 mt-10">
        {/* First Feature */}
        <div>
          <div className="home w-20 h-20 bg-gray-100 rounded-full mx-auto flex justify-center content-center items-center">
            <img src={home} alt="" className="w-9 h-9" />
          </div>
          <h2
            className="mt-6 text-xl font-bold"
            style={{ fontFamily: "Philosopher", color: "rgb(21, 12, 1)" }}
          >
            Quality Food
          </h2>
          <p
            className="mt-2 text-sm text-gray-600"
            style={{ fontFamily: "Philosopher" }}
          >
            It can be a very secure path to earn good money and make you very
            successful creative entrepreneur.
          </p>
        </div>
        {/* Second Feature */}
        <div>
          <div className="moto w-20 h-20 bg-gray-100 rounded-full mx-auto flex justify-center content-center items-center">
            <img src={moto} alt="" className="w-9 h-9" />
          </div>{" "}
          <h2
            className="mt-6 text-xl font-bold"
            style={{ fontFamily: "Philosopher", color: "rgb(21, 12, 1)" }}
          >
            Food Delivery
          </h2>
          <p
            className="mt-2 text-sm text-gray-600"
            style={{ fontFamily: "Philosopher" }}
          >
            It can be a very secure path to earn good money and make you very
            successful creative entrepreneur.
          </p>
        </div>
        {/* Third Feature */}
        <div>
          <div className="happy w-20 h-20 bg-gray-100 rounded-full mx-auto flex justify-center content-center items-center">
            <img src={happy} alt="" className="w-9 h-9" />
          </div>{" "}
          <h2
            className="mt-6 text-xl font-bold"
            style={{ fontFamily: "Philosopher", color: "rgb(21, 12, 1)" }}
          >
            Super Taste
          </h2>
          <p
            className="mt-2 text-sm text-gray-600"
            style={{ fontFamily: "Philosopher" }}
          >
            It can be a very secure path to earn good money and make you very
            successful creative entrepreneur.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
