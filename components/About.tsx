"use client";

import { IoIosMusicalNotes } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { BsSpeaker } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import VideoSection from "./VideoSection";

const aboutData = [
  {
    name: "Generos",
    icon: <IoIosMusicalNotes />,
    text: ["Dembow", "Trap", "Reggueton", "Merengue"],
  },
  {
    name: "Letras y Voces",
    icon: <FaMicrophone />,
    text: ["Dembow", "Trap", "Reggueton"],
  },
  {
    name: "Sonido",
    icon: <BsSpeaker />,
    text: ["Dembow", "Trap", "Reggueton"],
  },
];

const About = () => {
  return (
    <section className="py-10 text-black" id="about">
      <h4 className="h4 text-center font-oswald text-4xl">Acerca de mi</h4>
      <div className="mt-10 flex flex-col items-center justify-center">
        <p className="text-2xl">Productor musical, creador de letras </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 ">
        {aboutData.map((item, index) => {
          return (
            <div
              key={index}
              className="mt-10 flex flex-col items-center justify-center gap-4 "
            >
              <div className="text-6xl text-blue-600">{item.icon}</div>
              <div>
                <h5 className="font-roboto text-2xl">{item.name}</h5>
              </div>
              <div className="flex flex-col items-start justify-start">
                {/* mapeo del array de textos del aboutData */}
                {item.text?.map((genero, index) => {
                  return (
                    <div key={index}>
                      <ol>
                        <li className="">{genero}</li>
                      </ol>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      {/* VideosSection */}
      <div className="py-8 ">
        <VideoSection />
      </div>
    </section>
  );
};
export default About;
