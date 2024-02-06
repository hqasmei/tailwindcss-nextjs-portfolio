import React from "react";
import Image from "next/image";

const skills = [
  { skill: "Java" },
  { skill: "C++" },
  { skill: "Python" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Bootstrap CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Amazon Web Service" },
  { skill: "MySQL" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-purple-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hello! My name is Alec and I am a{" "}
              <span className="font-bold">{"enthusiastic"}</span>,
              <span className="font-bold">{"ambitious"} </span>, and
              <span className="font-bold">{" driven"}</span> computer science
              student in northwest Indiana located near Chicago.
            </p>
            <br />
            <p>
              Attending both Ivy Tech and Purdue University Northwest, I have
              accumulated a wide variety of skill that help me tackle a wide
              range of projects from devloping Java apps to help keep track of
              my Rubik&#39;s Cube solves, to a React based web tool to monitor
              and log the status of chromebooks at an institution. Even after
              having this wide set of tools in my toolbag, I wake up every day
              wanting to either tackle a new technology or dig even deeper into
              one I already know.
            </p>
            <br />
            <p>
              Outside of tech, there are many things that interest me in my day
              to day life. I love singing, dancing, solving twisty puzzles like
              Rubik&#39;s cubes, sim racing, skating/longboarding, and so much
              more. I always say that I am willing to try anything twice. Even
              if there is a mountain of odds stacked against me, I will never
              back down from giving it my all.
            </p>
            <br />
            <p>
              Overall, I am{" "}
              <span className="font-bold text-purple-500">
                highly motivated
              </span>{" "}
              , super outgoing, and always up for a new challenge
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
