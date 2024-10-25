import React from 'react';
import Image from 'next/image';


const HeroSection = () => {
  return (
    <section className="flex justify-start items-center flex-col-reverse lg:flex-row gap-20 my-20 lg:my-36 mx-auto w-full lg:w-11/12">
      <div className="flex flex-col justify-center md:w-1/2 lg:ml-10">
        <h1 className="font-heno font-extrabold text-4xl md:text-5xl text-customBlue">
          Hi, I am John, <br />
          Creative Technologist
        </h1>
        <br />
        <br />

        <p className="font-heebo font-normal text-xl">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. 
          Exercitation veniam consequat sunt nostrud amet.
        </p>
        <br />
        <button className="bg-customPink p-2 w-52 h-12 text-white font-heebo font-[500] text-lg rounded-sm hover:bg-customBlue transition-colors duration-300 ease-linear shadow-lg shadow-gray-600/100">
          Download Resume
        </button>
      </div>

      <div className="relative flex justify-center items-center">
        <div className="p-4 rounded-full">
          <Image
            src="/images/hero-image.png" 
            alt="Hero section image"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
