import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Images from '../images/index';

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="relative w-full md:w-3/4 px-4 mb-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
        <div
          className="w-full h-3/4 md:h-64 relative"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

const ZoomableCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const servicesData = [
    {
      image: Images.healthcare,
      title: 'Healthcare ( Direct to Patient )',
      
    },
    {
      image: Images.aog,
      title: 'AOG ( Aircraft on Ground )',
      
    },
    {
      image: Images.hitech,
      title: 'Hi-tech & Semiconductors',
     
    },
    {
      image: Images.media,
      title: 'Media & Broadcasting',
    },  
    {
      image: Images.ship,
      title: 'Ship Spare Parts Logistics',
      
    },
    {
      image: Images.fashion,
      title: 'Lifestyle',
      
    }, {
      image: Images.freight,
      title: 'Freight Forwarders',
      
    }, {
      image: Images.auto,
      title: 'Automotive',
      
    }, {
      image: Images.aviations,
      title: 'Aviation',
      
    }, {
      image: Images.marine,
      title: 'Marine',
      
    }, {
      image: Images.mining,
      title: 'Mining',
      
    }, {
      image: Images.oil,
      title: 'Oil and Gas',
      
    },
    {
      image: Images.telecom,
      title: 'Telecoms',
      
    },
  ];

  return (
    <Slider {...settings}>
      {servicesData.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </Slider>
  );
};

const Industries = () => {
  return (
    <div id="industries" className="w-full min-h-screen p-2 flex items-center bg-gradient-to-b from-white to-gray-400">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6"> <span className="text-amber-800">INDUSTRIES</span></h2>
        <p className="text-lg text-gray-700 mb-6 text-justify">
          <h1 className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>We Are Targeting Maximum Industries</h1>
        </p>

        <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-20">
          <ZoomableCarousel />
        </div>
      </div>
    </div>
  );
}

export default Industries;
