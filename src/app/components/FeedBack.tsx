
import React from "react";

const reviews = [
  {
    name: "Alex K.",
    rating: 5,
    review:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
  },
  {
    name: "Ethan R.",
    rating: 5,
    review:
      "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
  },
  {
    name: "Sarah M.",
    rating: 5,
    review:
      "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
  },
];

const FeedBack = () => {
  return (
    <div className="relative bg-white p-6 rounded-[20px] border border-black/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF1A] flex flex-col items-start border border-black/10 rounded-[20px] p-6 sm:p-8 h-full transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex items-center mb-2">
              <span className="text-yellow-500 text-lg mr-1">
                {"★".repeat(review.rating)}
              </span>
              <span className="text-gray-400">({review.rating}/5)</span>
            </div>
            <h3 className="font-bold">{review.name}</h3>
            <blockquote className="mt-2 text-gray-700 italic border-l-4 border-yellow-500 pl-4">
              "{review.review}"
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedBack;
