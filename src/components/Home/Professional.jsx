import React from 'react';

const Professional = () => {
    return (
        <div className="mt-28 flex flex-col rounded-md shadow-lg lg:flex-row bg-[#fff8f5] overflow-hidden">
            <div className="flex items-center justify-center p-6 lg:p-12">
                <img
                    src="https://i.ibb.co.com/zFHC2nM/engin-akyurt-g-m8-EDc4-X6-Q-unsplash-1.png"
                    alt="Professional Work"
                    className="h-80 w-full"
                />
            </div>
            <div className="flex flex-col justify-center flex-1 p-8 lg:p-12">
                <h3 className="text-4xl font-bold mb-4">
                    Let us handle your <br />
                    needs <span className="text-[#F63E7B]">Professionally</span>.
                </h3>
                <p className="text-lg text-gray-700 mb-8">
                    Our team is dedicated to delivering top-notch services tailored to your unique requirements. With a focus on quality and excellence, we create impactful solutions for web and mobile platforms. Trust us to bring your ideas to life with precision and expertise.
                </p>
                <div className="flex items-center gap-8">
                    <div className="text-center">
                        <h4 className="text-4xl font-bold text-[#F63E7B]">1,500+</h4>
                        <p className="text-sm text-gray-600">Happy Customers</p>
                    </div>
                    <div className="text-center">
                        <h4 className="text-4xl font-bold text-[#F63E7B]">250+</h4>
                        <p className="text-sm text-gray-600">Total Services</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Professional;
