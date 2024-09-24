"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Button, Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Alec!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-purple-600">
              senior computer science student{" "}
            </span>
            at Purdue University Northwest in Hammond, Indiana. Pushing myself
            to learn and grow every day!
          </p>
          <button
            onClick={() => downloadResume()}
            className="text-neutral-100 font-semibold px-6 py-3 bg-purple-600 rounded shadow hover:bg-purple-700 mt-4"
          >
            Download Resume
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

function downloadResume() {
  const a = document.createElement("a");
  a.href =
    "https://drive.google.com/uc?export=download&id=1_0lfFvJnZ9tWV3JZ8mDyeYym1Iq1lFOp";
  a.download = "Alec-Malenfant-Resume.docx"; // File name
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export default HeroSection;
