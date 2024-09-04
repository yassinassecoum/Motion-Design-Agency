import React from "react";

const TestimonialCard = ({ name, title, imageUrl, videoUrl, comment }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <img
          loading="lazy"
          src={imageUrl}
          alt={name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
      </div>
      {videoUrl ? (
        <div className="mb-4 relative pt-[56.25%]">
          <video
            controls
            className="absolute top-0 left-0 w-full h-full rounded"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <p className="text-sm italic mb-4">{comment}</p>
      )}
    </div>
  );
};

export default TestimonialCard;
