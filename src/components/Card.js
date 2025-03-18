import React from "react";

const Card = ({ imgSrc, title, price, description, hasDelivery = false }) => {
  return (
    <div className="rounded-t-3xl rounded-b-lg bg-white shadow-md overflow-hidden">
      {imgSrc && <img src={imgSrc} width="640" height="360" loading="lazy" />}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-medium text-gray-900">{title}</h3>
          <span className="text-coral-pink-500 font-medium">${price}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        {hasDelivery && (
          <div className="flex items-center text-sm text-gray-700">
            <span>Order a delivery</span>
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
