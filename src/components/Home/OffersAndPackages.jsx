import React from "react";
import { FaTag } from "react-icons/fa";

const OffersAndPackages = () => {
    const offers = [
        {
            id: 1,
            title: "Pamper Yourself Package",
            description: "Includes a facial, manicure, pedicure, and head massage.",
            price: "$99",
            badge: "Limited Time Offer",
        },
        {
            id: 2,
            title: "Bridal Glow Package",
            description: "Pre-wedding facial, makeup, and hair styling.",
            price: "$199",
            badge: "Limited Time Offer",
        },
        {
            id: 3,
            title: "Weekend Relaxation Package",
            description: "Relaxing spa, foot massage, and skin detox.",
            price: "$129",
            badge: "Seasonal Discount",
        },
    ];

    return (
        <section className="mt-28 mx-10">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-12">
                    Our <span className="text-[#F63E7B]">Offers & Packages</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {offers.map((offer) => (
                        <div
                            key={offer.id}
                            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300"
                        >
                            <p className="bg-[#F63E7B] text-white text-sm px-3 py-1 rounded-full w-1/2 mx-auto mb-4">
                                {offer.badge}
                            </p>
                            <div className="items-center mb-4">
                                <h3 className="text-lg font-semibold text-gray-800">{offer.title}</h3>
                            </div>
                            <p className="text-gray-600 mb-4">{offer.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-xl font-bold text-[#F63E7B]">{offer.price}</span>
                                <button className="flex items-center gap-2 bg-[#F63E7B] text-white px-4 py-2 rounded-md hover:bg-[#d6336f]">
                                    <FaTag />
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OffersAndPackages;
