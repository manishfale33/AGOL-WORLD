import React, { useState, useEffect } from 'react';
import Carousel from 'nuka-carousel';
import Images from '../images/index';

const Litebet = () => {
  const carouselItems = [Images.img2, Images.img3, Images.img4, Images.img5];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [carouselItems.length]);

  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/feedback/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Feedback submitted successfully');
        // Optionally, reset the form fields after successful submission
        setFormData({
          full_name: '',
          email: '',
          message: '',
        });
      } else {
        console.error('Failed to submit feedback');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div id="home" className="relative">
      <div className="bg-cover bg-center bg-no-repeat w-full h-auto md:h-screen relative">
        <Carousel
          className="carousel"
          slideIndex={currentSlide}
          renderCenterLeftControls={({ previousSlide }) => (
            <button className="carousel-control relative" onClick={previousSlide}>
              <span className="arrow-icon">
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-blue-500 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-50"></span>
                &#10094;
              </span>
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button className="carousel-control relative" onClick={nextSlide}>
              <span className="arrow-icon">
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-blue-500 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-50"></span>
                &#10095;
              </span>
            </button>
          )}
          slideWidth="100%"
          wrapAround={true}
          swiping={true}
          renderBottomCenterControls={null}
        >
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-screen relative"
            >
              <img
                src={item}
                alt={`Carousel ${index + 1}`}
                className="w-full h-full object-cover backdrop-filter backdrop-blur-lg"
              />
            </div>
          ))}
        </Carousel>

        {/* Form on top of the carousel */}
        <div className="transition-opacity duration-300 opacity-0 hover:opacity-100 absolute inset-0 px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12 transition-transform duration-300 transform hover:scale-105">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                The quick, brown fox <br className="hidden md:block" />
                jumps over a lazy dog
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                quae.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12 transition-transform duration-300 transform hover:scale-105">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Give Feedback
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="full_name"
                      className="inline-block mb-1 font-medium"
                    >
                      Full name
                    </label>
                    <input
                      placeholder="John Doe"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="full_name"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      E-mail
                    </label>
                    <input
                      placeholder="john.doe@example.org"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="message"
                      className="inline-block mb-1 font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      placeholder="Write something"
                      required
                      rows="4"
                      className="flex-grow w-full px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-gray transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                      SUBMIT
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    We respect your privacy. This Data In Closed With As.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Litebet;
