import React from "react";

const BeautyTips = () => {
  const tips = [
    {
      id: 1,
      title: "5 Tips for Glowing Skin",
      description:
        "Discover simple and effective ways to keep your skin radiant and healthy every day.",
      image: "https://i.ibb.co.com/zFHC2nM/engin-akyurt-g-m8-EDc4-X6-Q-unsplash-1.png", // Replace with actual image URL
      link: "#",
    },
    {
      id: 2,
      title: "Top Hair Care Routines",
      description:
        "Learn about essential hair care routines to maintain strong and shiny hair.",
      image: "https://i.ibb.co.com/FzWK40G/hair.jpg", // Replace with actual image URL
      link: "#",
    },
    {
      id: 3,
      title: "Quick Makeup Hacks",
      description:
        "Master quick and easy makeup hacks for a flawless look in minutes.",
      image: "https://i.ibb.co.com/b7kYDRF/makup.jpg", // Replace with actual image URL
      link: "#",
    },
    {
      id: 4,
      title: "Natural Remedies for Skin Care",
      description:
        "Explore natural ingredients that can transform your skincare routine.",
      image: "https://i.ibb.co.com/zFHC2nM/engin-akyurt-g-m8-EDc4-X6-Q-unsplash-1.png", // Replace with actual image URL
      link: "#",
    },
  ];

  return (
    <div className=" py-16 px-6 mt-28 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Beauty <span className="text-[#F63E7B]">Tips</span>
        </h2>
        <p className="text-gray-600">
          Stay updated with our latest tips and tricks for glowing skin, healthy
          hair, and effortless beauty.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
          >
            <img
              src={tip.image}
              alt={tip.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {tip.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{tip.description}</p>
              <a
                href={tip.link}
                className="text-[#F63E7B] font-medium hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeautyTips;
