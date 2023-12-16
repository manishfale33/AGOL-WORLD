import React from 'react';
import Images from '../images/index';

const ServiceCard = ({ image, title, description }) => (
  <div className="w-full md:w-1/3 px-4 mb-8 transition-transform transform hover:scale-105">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover object-center transition-opacity duration-300 hover:opacity-75"
        src={image}
        alt={title}
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-700 leading-relaxed mb-4">{description}</p>
        <button className="mt-6 px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700 transition-all duration-300">
          Read More
        </button>
      </div>
    </div>
  </div>
);

const Services = () => {
  const servicesData = [
    {
      image: Images.ser1,
      title: 'Importer Of Record',
      description: 'AGOL Worldwide are the Importer of Record services in many countries throughout the world.',
    },
    {
      image: Images.ser2,
      title: 'On Board Courier',
      description: 'It is evident how much there is this requirement of making sure to build a dependant structure for all the businesses that require international trade.',
    },
    {
      image: Images.ser3,
      title: 'Dedicated Ground',
      description: 'We offer the fastest expedited freight shipments available. Get your shipment to its final destination with a dedicated vehicle, where we can reach even the most remote areas.',
    },
    {
      image: Images.ser4,
      title: 'Next Flight Out',
      description: 'Your cargo is ready, picked up and out on the next cargo flight out. Like most services you can use them along our IOR Service to ensure a swift and speedy customs clearance at destination.',
    },
    {
      image: Images.ser5,
      title: 'Air Charters',
      description: 'We analyze your timescale, budget and cargo size in order to offer the most suitable cargo aircraft for your requirements. All permits and required documentation will be expedited to make the impossible possible in time.',
    },
  ];

  return (
    <div id="service" className="w-full min-h-screen p-2 flex items-center bg-gradient-to-b from-white to-gray-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Our <span className="text-amber-800">Services</span></h2>
        <p className="text-lg text-gray-700 mb-8 text-justify">
          <h1 className='font-bold'>We Are Trusted For Our Services</h1>
          <h2>Services built around passion! AGOL offers only top-tier services to its niche clients. Many service levels to choose from but always customer service as a priority in mind.</h2>
        </p>

        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
