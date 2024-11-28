import React, { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import h1 from "./assets/H1.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {Link} from "react-router-dom";

const Header = () => {
  const slides = [
    {
      id: 1,
      image: "http://localhost:8080/api/file/H1.png",
      title: "Making time a good time by making food the good food.",
      text: "There are many things are needed to start the Fast Food Business. You need not only just Food Stalls with Persons but also specialized equipment.",
    },
    {
      id: 2,
      image: "http://localhost:8080/api/file/egg_masala.png",
      title: "Delicious meals for every occasion.",
      text: "Discover a variety of dishes that are perfect for you and your family. Enjoy every bite with joy.",
    },
    {
      id: 3,
      image: "http://localhost:8080/api/file/salads.png",
      title: "Fresh, tasty, and healthy food.",
      text: "From farm to table, we provide you with the freshest and most delicious meals.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevious = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const goToNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 7000); // 3 second interval to automatically change slides

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center mr-5">
              <img src={logo} alt="Logo" className="h-10" />
            </div>
            <div className="hidden md:flex space-x-10 text-gray-600">
              <a href="#" className="hover:text-orange-500 transition">
                Home
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                About us
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                Menu
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                Features
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                Contact us
              </a>
              <Link to={"/order"} className={"text-decoration-none"}>Cart</Link>
              <Link to={"/login"} className={"text-decoration-none"}>go to login</Link>
            </div>
          </div>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
            Booking Now
          </button>
        </div>
      </nav>

      {/* Karusel */}
      <div className="relative container mx-auto flex items-center pb-20">
        {/* Previous Icon */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 bg-white border border-gray-300 rounded-full p-2 shadow-md hover:shadow-lg hover:bg-gray-100 transition z-10"
        >
          <FaChevronLeft
            size={30}
            className="text-gray-700 hover:text-orange-500 transition"
          />
        </button>

        {/* Karusel Slaydlar */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full flex flex-col lg:flex-row items-center"
            >
              {/* Text Content */}
              <div className="lg:w-1/2 space-y-6 px-4">
                <h1 className="title">{slide.title}</h1>
                <p className="text-gray-600">{slide.text}</p>
                <div className="flex space-x-6">
                  <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
                    Order Now
                  </button>
                  <button className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-100 transition">
                    Food Details
                  </button>
                </div>
              </div>
              {/* Image */}
              <div className="lg:w-1/2 mt-10 lg:mt-0">
                <img src={slide.image} alt="Slide" className="w-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Next Icon */}
        <button
          onClick={goToNext}
          className="absolute right-4 bg-white border border-gray-300 rounded-full p-2 shadow-md hover:shadow-lg hover:bg-gray-100 transition z-10"
        >
          <FaChevronRight
            size={30}
            className="text-gray-700 hover:text-orange-500 transition"
          />
        </button>
      </div>
    </>
  );
};

export default Header;
