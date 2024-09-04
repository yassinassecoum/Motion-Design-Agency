import React, { useState } from "react";

import userIcon from "../assets/mercedesUser.png";

const Review = () => {
  const [seeMore, setSeeMore] = useState(false);
  const handleSeeMore = (e) => {
    e.preventDefault();
    setSeeMore(!seeMore);
  };
  return (
    <div className="max-w-[90%] md:max-w-[90%] 2xl:max-w-[1350px] w-full  mx-auto py-6">
      <div className="flex flex-col align-items-center">
        <h2 className="text-3xl font-bold text-center mt-10 mb-10 md:text-4xl">
          Encore hésitant ? Voici nos avis clients :
        </h2>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="border-[1px] border-[solid] border-[#c4c4c4] rounded-[16px] w-full p-[24px] flex flex-col mb-3 lg:m-3 lg:w-1/2 ">
            <div className="reviewTop">
              <img
                loading="lazy"
                src={userIcon}
                alt="Photo Review"
                className="photoReview"
              />
              <p className="userName">Louis Dorp</p>
              <p className="userRole">Responsable Communication</p>
            </div>
            <p className="reviewText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              accusantium neque similique architecto doloribus excepturi ipsam
              perspiciatis, soluta sequi saepe fugit assumenda dolorem cumque
              quidem doloremque odio dolores officia minus. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Labore qui ipsum facere sit
              quas nostr.
            </p>
          </div>
          <div className="border-[1px] border-[solid] border-[#c4c4c4] rounded-[16px] w-full p-[24px] flex flex-col mb-3 lg:m-3 lg:w-1/2 ">
            <div className="reviewTop">
              <img
                loading="lazy"
                src={userIcon}
                alt="Photo Review"
                className="photoReview"
              />
              <p className="userName">Louis Dorp</p>
              <p className="userRole">Responsable Communication</p>
            </div>
            <p className="reviewText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              accusantium neque similique architecto doloribus excepturi ipsam
              perspiciatis, soluta sequi saepe fugit assumenda dolorem cumque
              quidem doloremque odio dolores officia minus. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Labore qui ipsum facere sit
              quas nostr.
            </p>
          </div>
          <div className="border-[1px] border-[solid] border-[#c4c4c4] rounded-[16px] w-full p-[24px] flex flex-col mb-3 lg:m-3 lg:w-1/2 ">
            <div className="reviewTop">
              <img
                loading="lazy"
                src={userIcon}
                alt="Photo Review"
                className="photoReview"
              />
              <p className="userName">Louis Dorp</p>
              <p className="userRole">Responsable Communication</p>
            </div>
            <p className="reviewText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              accusantium neque similique architecto doloribus excepturi ipsam
              perspiciatis, soluta sequi saepe fugit assumenda dolorem cumque
              quidem doloremque odio dolores officia minus. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Labore qui ipsum facere sit
              quas nostr.
            </p>
          </div>
          <div className="border-[1px] border-[solid] border-[#c4c4c4] rounded-[16px] w-full p-[24px] flex flex-col mb-3 lg:m-3 lg:w-1/2 ">
            <div className="reviewTop">
              <img
                loading="lazy"
                src={userIcon}
                alt="Photo Review"
                className="photoReview"
              />
              <p className="userName">Louis Dorp</p>
              <p className="userRole">Responsable Communication</p>
            </div>
            <p className="reviewText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              accusantium neque similique architecto doloribus excepturi ipsam
              perspiciatis, soluta sequi saepe fugit assumenda dolorem cumque
              quidem doloremque odio dolores officia minus. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Labore qui ipsum facere sit
              quas nostr.
            </p>
          </div>

          {seeMore && <></>}
        </div>
      </div>
      <div className="wrapMore">
        <a className="seeMoreBtn" onClick={handleSeeMore}>
          {seeMore ? `Voir moins d'avis` : `Voir plus d'avis`}
        </a>
      </div>
    </div>
  );
};

export default Review;
