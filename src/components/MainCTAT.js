import React from "react";
import arrow from "../assets/arrow.svg";
import Marquee from "react-fast-marquee";
import inter from "../assets/inter.png";
import maddy from "../assets/maddyness.png";
import mercedes from "../assets/mercedes.png";
import sellsy from "../assets/sellsy.svg";
import submagic from "../assets/submagic.png";
import reborn from "../assets/reborn.svg";
import zario from "../assets/zario.svg";
import pylote from "../assets/pylote.svg";
import juno from "../assets/juno.png";
import niglo from "../assets/nigloland.png";

import ReactPlayer from "react-player";

const MainCTAT = () => {
  return (
    <div className="max-w-[90%] md:max-w-[90%] 2xl:max-w-[1350px] w-full mx-auto py-6 mb-8">
      <div className="flex flex-col gap-10 sm:gap-20">
        <div className="flex flex-col-reverse lg:flex-row lg:align-baseline">
          <div className="flex flex-col md:align-baseline items-center lg:items-start">
            <h1 className="text-black text-4xl leading-[44.4px] sm:text-6xl sm:leading-[70.4px] font-bold text-center lg:text-left">
              Nous réalisons des vidéos de présentation.
            </h1>
            <p className="max-w-[800px] text-lg leading-8 text-[#404040] mb-10 mt-10 text-center lg:text-left">
              Chez 1600, on vous accompagne de A à Z sur votre projet vidéo et
              on arrête que lorsque la vidéo vous plaît à 100%. On a déjà
              travaillé avec plus de 300 clients, alors quand est-ce qu’on
              commence avec vous ?
            </p>
            <div className="flex gap-8 mb-5 sm:flex-row flex-col lg:mb-0">
              <a
                className="bg-[#fb6930] text-white sm:text-left text-center rounded-[40px] py-4 px-8 font-medium transition-colors duration-400"
                href="#pricing"
              >
                Voir nos tarifs
              </a>
              <a
                className="bg-black text-white sm:text-left text-center  rounded-[40px] py-4 px-8 font-medium transition-colors duration-400"
                href="#rdv"
              >
                Prendre un rendez-vous
              </a>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full mb-8">
            <div className="w-full lg:w-fit flex justify-start lg:flex-col lg:mb-72 items-center">
              <p className="text-[14px] leading-[20px] mt-2 lg:text-[18px]">
                <span className="text-[#fb6830] font-bold">Découvrez</span>
                <br />
                <span className="font-bold">
                  {" "}
                  notre agence <br /> en vidéo
                </span>
              </p>
              <img
                loading="lazy"
                src={arrow}
                className="[rotate:296deg] ml-4 lg:ml-0 lg:[rotate:0deg] max-w-full"
                alt="Arrow"
              />
            </div>
            <div className="videoPlayer">
              <ReactPlayer
                className="reactPlayer"
                controls={true}
                url="https://player.vimeo.com/video/841494691"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-center font-bold">
            + de 300 entreprises nous font déja confiance
          </p>
          <Marquee pauseOnHover={true} className="marqueeLogos">
            <img loading="lazy" src={inter} alt="Intermarché Logo" />
            <img loading="lazy" src={maddy} alt="Maddy Logo" />
            <img loading="lazy" src={mercedes} alt="Mercedes Logo" />
            <img loading="lazy" src={sellsy} alt="Sellsy Logo" />
            <img loading="lazy" src={submagic} alt="Submagic" />
            <img loading="lazy" src={reborn} alt="Reborn Logo" />
            <img loading="lazy" src={zario} alt="zario Logo" />
            <img loading="lazy" src={pylote} alt="pylote Logo" />
            <img loading="lazy" src={juno} alt="juno Logo" />
            <img loading="lazy" src={niglo} alt="niglo" />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default MainCTAT;
