import React from "react";
import Images from '../images/index';

const AboutUs = () => {
  return (
    <div id="about" className="flex flex-col md:flex-row w-full h-auto md:h-screen bg-gray-100">

      <div className="w-full md:w-1/2 p-4 md:p-8 bg-gray-100 flex items-center justify-center">
        <img
          src={Images.img6}
          alt="About Us"
          className="w-full h-auto object-cover rounded-tr-full rounded-bl-ful"
        />
      </div>

      <div className="w-full md:w-1/2 p-4 md:p-8 bg-gray-100 flex items-center justify-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-amber-800 mb-4">
            Simply Delivered!
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            AGOL Worldwide is an international logistics company and a tenacious industry player. An Indian-based company, AGOL Worldwide is the brainchild of a group of young talented logisticians and entrepreneurs with years of experience in the industry creating a new generation of logistics.
            <br />
            <br />
            <ul className="list-disc pl-4">
              <li>24/7 Business Support</li>
              <li>Secure Transportation</li>
              <li>Easy And Quick Problem Analysis</li>
              <li>World Wide Most Effective Business</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
