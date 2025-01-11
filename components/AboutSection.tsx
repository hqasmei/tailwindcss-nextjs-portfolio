import React from "react";
import Image from "next/image";

const skills = [
  { skill: "CompTIA A+ Certified" },
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
  { skill: "Docker" },
  { skill: "Amazon Web Service" },
  { skill: "Azure" },
  { skill: "SQL" },
  { skill: "RESTful APIs" },
  { skill: "Data Structures" },
  { skill: "Algorithms" },
  { skill: "Machine Learning" },
  { skill: "Object-Oriented Programming" },
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
          {/* About Me Text */}
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hello! My name is Alec and I am a{" "}
              <span className="font-bold">{"enthusiastic"}</span>,
              <span className="font-bold">{" ambitious"} </span>, and
              <span className="font-bold">{" driven"}</span> computer science
              graduate in northwest Indiana located near Chicago.
            </p>
            <br />
            <p>
              Attending both Ivy Tech and Purdue University Northwest, I have
              accumulated a wide range of skills to help me tackle various
              projects. My senior project recently won 1st prize in Purdue
              University Northwest's senior design contest. From managing a
              local server to deploying multiple websites, I have the skills to
              turn ideas into reality. Some projects that I have worked on
              include :
            </p>
            <ul className="list-disc pl-5">
              <li>AI image generation web app - award winner</li>
              <li>Chromebook database web app</li>
              <li>Campus navigation web app</li>
              <li>Home server running multiple Docker containers</li>
              <li>
                Rubik&#39;s Cube scramble generator and solve timer Java
                application
              </li>
            </ul>
            <br />
            <p>
              I spend a large amount of my free time on tech. Tinkering is one
              of my favorite hobbies! Recently, I have been enjoying deploying
              docker containers on my local server that are genuinely useful. I
              have an instance of Jellyfin that streams my local media to any
              device in my house. I also replaced costly third party gaming
              services with my own. By switching to self hosting my minecraft
              server, I have saved hundreds of dollars a year, and have created
              an easy and private space for my brother and I to game together.
            </p>
            <br />
            <p>
              Overall, I am{" "}
              <span className="font-bold text-purple-500">
                highly motivated
              </span>{" "}
              , super outgoing, and always up for a new challenge
            </p>
            <br />
            <section id="contact">
              <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                Contact me!
              </h1>
              <p>Email : malenfantalec@gmail.com</p>
            </section>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <section id="skills">
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
            </section>
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
