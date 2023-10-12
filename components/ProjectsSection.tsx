import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "MuseAI",
    description:
      "MuseAI is a versatile Software as a Service (SaaS) application that brings together a curated set of powerful AI tools to unleash your creativity. Whether you're a developer, designer, or artist, MuseAI provides cutting-edge capabilities to generate code, images, 3-second short videos, and music clips. Say goodbye to creative blocks and welcome a new era of inspiration with MuseAI.",
    image: "/images/MuseAI.png",
    icon: "/icons/museAi.ico",
    github: "https://github.com/JamShou/MuseAI",
    link: "https://muse-ai.vercel.app/",
  },
  {
    name: "Cloneify",
    description:
      "Cloneify is a web application that recreates the beloved features of the PC version of Spotify using Next.js, a powerful framework for building server-rendered React applications. With Cloneify, users can enjoy a familiar and immersive music streaming experience, similar to Spotify, right in their web browsers.",
    image: "/images/cloneify.png",
    icon: "/icons/Spot_icon.svg",
    github: "https://github.com/JamShou/Cloneify",
    link: "https://clone-ify.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-gray-400 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <div className="flex items-center mb-6">
                      {/* Image */}
                      <div className="mr-4">
                        <Image
                          src={project.icon}
                          alt=""
                          width={32}
                          height={32}
                          className="shadow-xl"
                        />
                      </div>

                      {/* Project Name */}
                      <h1 className="text-4xl font-bold">{project.name}</h1>
                    </div>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
