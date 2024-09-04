import React from "react";
import zapier from "../assets/zapier.gif";
import slack from "../assets/slack.gif";
import learnybox from "../assets/learnybox.gif";
import kavcom from "../assets/kavcom.gif";

import checkrent from "../assets/checkrent.gif";

import sellsy from "../assets/sellsy.gif";
import pylote from "../assets/pylote.gif";

import maddyness from "../assets/maddyness.gif";

import arrow from "../assets/arrowItem.svg";

const videoData = [
  {
    id: 1,
    title: "Zapier",
    description: "Vidéo de présentation en motion design",
    strongText: "Pour une startup SaaS",
    image: zapier,
  },
  {
    id: 2,
    title: "Slack",
    description: "Vidéo de présentation en motion design",
    strongText: "Pour une startup SaaS",
    image: slack,
  },
  {
    id: 3,
    title: "LearnyBox",
    description: "Vidéo de présentation en motion design",
    strongText: "pour une corporate Tech",
    image: learnybox,
  },
  {
    id: 4,
    title: "Kavcom",
    description: "Vidéo de présentation en motion design",
    strongText: "pour une corporate Tech",
    image: kavcom,
  },
  {
    id: 5,
    title: "CheckRent",
    description: "Vidéo de présentation en motion design",
    strongText: "Pour une startup Tech",
    image: checkrent,
  },
  {
    id: 6,
    title: "Sellsy",
    description: "Vidéo de présentation en motion design",
    strongText: "Pour une startup Tech",
    image: sellsy,
  },
  {
    id: 7,
    title: "Pylote",
    description: "Vidéo de présentation en motion design",
    strongText: "pour un SaaS",
    image: pylote,
  },
  {
    id: 8,
    title: "Maddyness",
    description: "Vidéo de présentation en motion design",
    strongText: "Pour une startup SaaS",
    image: maddyness,
  },
];

const LastVideos = () => {
  return (
    <section
      id="videos"
      className="max-w-[90%] md:max-w-[90%] 2xl:max-w-[1350px] w-full mx-auto py-6 mb-4"
    >
      <div className="flex flex-col">
        <h2 className="text-[40px] leading-[normal] font-bold text-center mb-8 md:text-4xl">
          Nos dernières vidéos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {videoData.map(({ id, title, description, strongText, image }) => (
            <div key={id} className="mt-6 pl-4 pr-4 cursor-pointer relative">
              <img
                loading="lazy"
                className="rounded-[20px] [box-shadow:0_0_20px_-15px_#0000006b] mb-[24px]"
                src={image}
                alt={`${title} gif`}
              />
              <img
                loading="lazy"
                className="absolute top-[14px] bg-[#fff] rounded-[100px] w-[45px] h-[45px] p-[10px] right-[26px]"
                src={arrow}
                alt="Arrow"
              />
              <p className="text-[24px] text-[#1e1e2f]">{title}</p>
              <span className="text-[#1e1e2f] text-left font-[Figtree,_sans-serif] text-[14.5px]">
                {description} <br />
                <strong>{strongText}</strong>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LastVideos;
