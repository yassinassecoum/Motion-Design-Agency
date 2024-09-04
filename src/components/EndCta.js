import React from "react";
import devisLogo from "../assets/devislogo.png";
import { InlineWidget } from "react-calendly";

const EndCta = () => {
  return (
    <div id="rdv" className="bg-[#f4f4f4] ">
      <div className="max-w-[90%] md:max-w-[90%] 2xl:max-w-[1350px] w-full  mx-auto py-6">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col mb-10 items-center lg:md-0 lg:items-start lg:w-1/2">
            <h2 className="text-[40px] leading-[normal] font-bold text-center md:text-4xl mt-10">
              Et si on discutait de votre projet vidéo ?
            </h2>
            <p className="max-w-[800px] text-lg leading-8 text-[#404040] mb-10 mt-10 text-center lg:text-left">
              Pour commander votre vidéo, rien de plus simple ; vous prenez
              rendez-vous dans notre calendrier, on détermine ensemble la durée
              de la vidéo que vous voulez ainsi que la deadline. Et on peut
              directement commencer votre projet !
            </p>
            <div className="wrapDevis">
              <div className="wrapCheck">
                <img
                  loading="lazy"
                  src={devisLogo}
                  alt="Icon"
                  className="devisLogo"
                />
                <h4>Prenez rendez-vous</h4>
              </div>
              <div className="wrapCheck">
                <img
                  loading="lazy"
                  alt="Icon"
                  src={devisLogo}
                  className="devisLogo"
                />
                <h4>On discute de votre projet</h4>
              </div>
              <div className="wrapCheck">
                <img
                  loading="lazy"
                  alt="Icon"
                  src={devisLogo}
                  className="devisLogo"
                />
                <h4>Et on peut commencer a travailler!</h4>
              </div>
            </div>
            <div className="divider mt-10 mb-10"></div>
            <p className="text-center lg:text-left">
              <strong>300+ entreprises</strong> sont déja passées par notre
              agence pour leur vidéo de présentation.{" "}
              <br className="block lg:hidden" /> Pourquoi pas vous ?
            </p>
          </div>
          <div className="flex flex-col mb-10 lg:w-2/5 2xl:w-1/3">
            <InlineWidget url="https://calendly.com/powked/choissisez-un-jour?hide_event_type_details=1&hide_gdpr_banner=1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndCta;
