import React from "react";

const MethodeSection = () => {
  const steps = [
    {
      number: 1,
      title: "Script",
      description:
        "Nous écrivons ensemble le script de votre vidéo sur un document partagé.",
      isNew: true,
    },
    {
      number: 2,
      title: "Voix off",
      description:
        "Nous vous proposons une sélection de voix off masculine et féminine.",
    },
    {
      number: 3,
      title: "Storyboard",
      description:
        "Avant de commencer le motion design, nous proposons un storyboard.",
    },
    {
      number: 4,
      title: "Motion design",
      description:
        "Nous réalisons la vidéo et vous proposons une première version.",
    },
    {
      number: 5,
      title: "Déclinaison",
      description:
        "Nous déclinons votre vidéo en plusieurs formats et plusieurs langues.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">
        Notre méthode de fonctionnement
      </h2>
      <div className="relative">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start mb-8">
            <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
              {step.number}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {step.title}
                {step.isNew && (
                  <span className="ml-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                    NOUVEAU
                  </span>
                )}
              </h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
        <div
          className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"
          style={{ transform: "translateX(-50%)" }}
        ></div>
      </div>
      <div className="mt-8">
        <img
          loading="lazy"
          src="/path-to-method-image.jpg"
          alt="La méthode de fonctionnement"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default MethodeSection;
