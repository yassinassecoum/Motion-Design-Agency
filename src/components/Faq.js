import React from "react";
import questions from "./questions";
import Question from "./Question";
import { motion } from "framer-motion";

const Faq = () => {
  return (
    <div className="max-w-[90%] md:max-w-[90%] 2xl:max-w-[1350px] w-full  mx-auto py-6">
      <div className="mainFaq">
        <h2 className="text-3xl font-bold text-center mt-10 mb-4 md:text-4xl">
          Vous avez des questions ? <br /> Nous avons les réponses :
        </h2>
        <div className="faqWrap mb-10 md:mb-0">
          {questions.map((q) => {
            return <Question key={q.id} {...q} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
