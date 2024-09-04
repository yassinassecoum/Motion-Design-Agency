import React from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Philippe Cheng",
      title: "CEO Pratico",
      imageUrl: "/path-to-philippe-image.jpg",
      videoUrl: "/path-to-philippe-video.mp4",
      comment: "",
    },
    {
      name: "Rose-Marie CHAMIEH",
      title: "CMO Maddyness",
      imageUrl: "/path-to-rose-marie-image.jpg",
      comment:
        "Célian et ses équipes ont fait un travail remarquable en un temps record ! Nous avons travaillé main dans la main pendant 3 semaines pour présenter 2 vidéos lors de notre événement. Un vrai game changer !",
    },
    {
      name: "Frédérique Doré",
      title: "Responsable Communication Régionale",
      imageUrl: "/path-to-frederique-image.jpg",
      comment:
        "Bravo pour le travail accompli par Célian Frey et son équipe. Leur professionalisme, leur créativité et leur réactivité ont répondu pleinement à nos attentes. Un grand merci à toute l'équipe pour l'engagement et la disponibilité ! A bientôt.",
    },
    {
      name: "Théo Dorp",
      title: "Co-fondateur de pylote & crème de la crème",
      imageUrl: "/path-to-theo-image.jpg",
      comment: "Belle collab' et belle vidéo",
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">
        Encore hésitant ? Voici nos avis clients :
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
