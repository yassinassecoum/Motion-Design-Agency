import React from "react";
import check from "../assets/check.svg";

const pricingData = [
  {
    title: "Vidéo 45 secondes",
    price: "1480€ HT",
    features: [
      "45 secondes de vidéo motion design",
      "Voix off / Sound design",
      "Écriture du script",
      "Storyboard / Illustrations",
      "Allers-retours illimités",
      "3 formats déclinés",
      "Sous-titres",
      "Vidéo français et anglais",
    ],
  },
  {
    title: "Vidéo 60 secondes",
    price: "1980€ HT",
    features: [
      "45 secondes de vidéo motion design",
      "Voix off / Sound design",
      "Écriture du script",
      "Storyboard / Illustrations",
      "Allers-retours illimités",
      "3 formats déclinés",
      "Sous-titres",
      "Vidéo français et anglais",
    ],
    popular: true,
  },
  {
    title: "Vidéo 90 secondes",
    price: "2980€ HT",
    features: [
      "45 secondes de vidéo motion design",
      "Voix off / Sound design",
      "Écriture du script",
      "Storyboard / Illustrations",
      "Allers-retours illimités",
      "3 formats déclinés",
      "Sous-titres",
      "Vidéo français et anglais",
    ],
  },
];

const PricingSection = () => {
  return (
    <div
      id="pricing"
      className="max-w-[90%] md:max-w-[90%] 2xl:max-w-[1350px] w-full  mx-auto py-6"
    >
      <div className="flex flex-col align-items-center">
        <h2 className="text-3xl font-bold text-center mt-10 mb-10 md:text-4xl">
          Des prix transparents <br /> et tout inclus
        </h2>
        <div className="flex flex-col lg:gap-x-[46px] lg:grid-cols-[1fr_1fr_1fr] lg:auto-cols-[1fr] lg:w-full lg:grid">
          {pricingData.map(({ title, price, features, popular }, index) => (
            <div key={index} className="pricingItem !mb-20 lg:mb-10 ">
              <div className="pricingTop">
                <span className="text-[30px] leading-[36px] mb-[20px] font-bold">
                  {title}
                </span>
                <span className="subTitlePricing">{price}</span>
              </div>
              <div className="pricingBottom">
                {features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="pricingFeature">
                    <img
                      loading="lazy"
                      className="checkLogo"
                      src={check}
                      alt=""
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <a
                className="hover:border-[#fb6930] hover:bg-[#fb6930] hover:text-[#fff] text-[#101010] text-center cursor-pointer border-[1px] border-[solid] border-[#000] rounded-[40px] w-4/5 px-[32px] py-[16px] font-medium"
                href="#rdv"
              >
                Commander ma vidéo
              </a>
              {popular && (
                <span className="absolute -top-[20px] bg-[#fb6930] text-[#fff] rounded-[8px] max-h-[40px] px-[16px] py-[8px] font-semibold">
                  POPULAIRE
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
