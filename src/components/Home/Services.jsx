import React from 'react'

const Services = () => {
    const services = [
        {
            id: 1,
            logo: "https://i.ibb.co.com/x3dy6G3/Group-1373.png", // Replace with your logo URL
            title: "Anti Age Face Treatment",
            price: "$150",
            description: "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
        },
        {
            id: 2,
            logo: "https://i.ibb.co.com/9G19HSK/Group-1372.png", // Replace with your logo URL
            title: "Hair Color & Styleing",
            price: "$70",
            description: "Amazing flyers, social media posts and brand representations that would make your brand stand out..",
        },
        {
            id: 3,
            logo: "https://i.ibb.co.com/dj2xsq2/Group-1374.png", // Replace with your logo URL
            title: "Skin Care Treatment",
            price: "$240",
            description: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
        },
    ];
    return (
        <div className=" mt-20 mx-10">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Awesome <span className='text-[#F63E7B]'>Services</span></h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
                    >
                        <img
                            src={service.logo}
                            alt={service.title}
                            className="w-12 h-12 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
                            {service.title}
                        </h3>
                        <p
                            className="text-center text-lg font-bold mb-3"
                            style={{ color: "#F63E7B" }}
                        >
                            {service.price}
                        </p>
                        <p className="text-gray-600 text-center">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services