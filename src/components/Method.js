import React from "react";

import newImg from "../assets/newimg.svg";
import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";

const Method = () => {
  return (
    <div id="method" className="bg-black text-white">
      <div className="max-w-[90%] md:max-w-[90%] 2xl:max-w-[1350px] w-full  mx-auto py-6 mb-4 bg-black">
        <div className="flex flex-col align-center">
          <span className="mt-16 tracking-[2px] flex font-bold relative justify-center w-[142px] ml-auto mr-auto text-white uppercase border-[1px] border-[solid] border-[#fff] rounded-[48px] p-[16px] text-[14px] leading-[15.4px]mt-8">
            Méthode
            <img
              loading="lazy"
              className="absolute -top-[19px] -right-[24px]"
              src={newImg}
              alt=""
            />
          </span>
          <h2 className="mt-6 text-white text-[40px] leading-[normal] font-bold text-center md:text-4xl">
            Notre méthode de fonctionnement
          </h2>
          <p className="max-w-[800px] ml-auto mr-auto text-lg leading-8 text-[#c4c4c4] mb-10 mt-6 text-center lg:text-left">
            Après des centaines de projets réalisés, nous sommes devenus des
            experts pour réaliser des vidéos qui convertissent. Nous avons
            sélectionné le top 1% pour nos clients : voix off, structure de
            script, type d'animation tout est optimisé pour vous faire la
            meilleure vidéo de ventes.
          </p>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="rounded-[16px] w-full p-[16px] flex flex-col mb-3 lg:m-3 md:w-1/2 ">
              <img
                loading="lazy"
                className="bg-[#191919] rounded-[10px] max-w-full h-auto"
                src={step1}
                alt=""
              />
            </div>
            <div className="rounded-[16px] w-full p-[16px] flex flex-col mb-3 lg:m-3 md:w-1/2 ">
              <img
                loading="lazy"
                className="bg-[#191919] rounded-[10px] max-w-full h-auto"
                src={step2}
                alt=""
              />
            </div>
            <div className="rounded-[16px] w-full p-[16px] flex flex-col mb-3 lg:m-3 md:w-1/2 ">
              <img
                loading="lazy"
                className="bg-[#191919] rounded-[10px] max-w-full h-auto"
                src={step3}
                alt=""
              />
            </div>
            <div className="rounded-[16px] w-full p-[16px] flex flex-col mb-3 lg:m-3 md:w-1/2 ">
              <img
                loading="lazy"
                className="bg-[#191919] rounded-[10px] max-w-full h-auto"
                src={step4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Method;
