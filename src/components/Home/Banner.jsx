import React from 'react'

export const Banner = () => {
  return (
    <section className="dark:bg-[#fff8f5] dark:text-gray-800">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">FOR EVERY 
				<span className="dark:text-violet-600"> WOMEN BEAUTY SALON</span>
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Welcome to Jerin's Parlour – your trusted haven for beauty and elegance. Discover expert care in hairstyling, skincare, 
				<br  className="hidden md:inline lg:hidden" />and makeup, tailored to bring out your natural glow. Step into Jerin's and step out with confidence!"
			</p>
			<div className=" sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 hover:bg-violet-500 text-lg font-semibold rounded dark:bg-[#F73E7B] dark:text-gray-50">Get an Appointment</a>
				
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://i.ibb.co.com/PwGS2rF/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beau.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
  )
}
