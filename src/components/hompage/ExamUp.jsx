import React from "react";
import { jamIcon, kalenderIcon, kananIcon } from "../../../lib/myIcons";
import Link from "next/link";

const ExamUp = () => {
  return (
    <>
      <section className="relative w-full bg-[url('https://eduvibe.devsvibe.com/landing/assets/images/bg/landing-page-banner.jpg')] bg-cover bg-no-repeat bg-fixed ">
        <div className="w-full max-w-7xl mx-auto py-16">
          <div className="flex flex-col">
            <div className="mb-16">
              <h3 className="text-center font-bold text-ungu2 mb-8">
                We Provide an accelent serive
              </h3>
              <h2 className="text-center text-5xl font-bold gr_gray">
                Upcoming EXAM / TEST
              </h2>
            </div>
          </div>

          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              <div className="flex flex-col lg:grid lg:grid-cols-8 bg-white py-8 px-8 gap-4 relative">
                <img
                  src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/masonry-06-2-590x430.webp"
                  className="rounded-md w-full"
                />
                <div className="col-span-6 py-4">
                  <h3 className="text-2xl font-bold text-gray-700">
                    Upcoming Educational Events
                  </h3>
                  <div className="flex flex-row items-center gap-10 mt-4">
                    <div className="flex flex-row gap-4 items-center">
                      <span className="text-gray-400">{kalenderIcon}</span>
                      <p className="text-gray-600">1 Januari 2023</p>
                    </div>
                    <div className="flex flex-row gap-4 items-center">
                      <span className="text-gray-400">{jamIcon}</span>
                      <p className="text-gray-600">09.00 WIB</p>
                    </div>
                  </div>
                </div>
                <div className="lg:absolute right-0 lg:h-full flex items-center mr-4">
                  <button className="button1 hover:bg-indigo-600 text-white">
                    Book A seat<span>{kananIcon}</span>
                  </button>
                </div>
              </div>
              <div className="flex flex-col lg:grid lg:grid-cols-8 bg-white py-8 px-8 gap-4 relative">
                <img
                  src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/masonry-06-2-590x430.webp"
                  className="rounded-md w-full"
                />
                <div className="col-span-6 py-4">
                  <h3 className="text-2xl font-bold text-gray-700">
                    Upcoming Educational Events
                  </h3>
                  <div className="flex flex-row items-center gap-10 mt-4">
                    <div className="flex flex-row gap-4 items-center">
                      <span className="text-gray-400">{kalenderIcon}</span>
                      <p className="text-gray-600">1 Januari 2023</p>
                    </div>
                    <div className="flex flex-row gap-4 items-center">
                      <span className="text-gray-400">{jamIcon}</span>
                      <p className="text-gray-600">09.00 WIB</p>
                    </div>
                  </div>
                </div>
                <div className="lg:absolute right-0 lg:h-full flex items-center mr-4">
                  <button className="button1 hover:bg-indigo-600 text-white">
                    Book A seat<span>{kananIcon}</span>
                  </button>
                </div>
              </div>
              <div className="flex flex-col lg:grid lg:grid-cols-8 bg-white py-8 px-8 gap-4 relative">
                <img
                  src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/masonry-06-2-590x430.webp"
                  className="rounded-md w-full"
                />
                <div className="col-span-6 py-4">
                  <h3 className="text-2xl font-bold text-gray-700">
                    Upcoming Educational Events
                  </h3>
                  <div className="flex flex-row items-center gap-10 mt-4">
                    <div className="flex flex-row gap-4 items-center">
                      <span className="text-gray-400">{kalenderIcon}</span>
                      <p className="text-gray-600">1 Januari 2023</p>
                    </div>
                    <div className="flex flex-row gap-4 items-center">
                      <span className="text-gray-400">{jamIcon}</span>
                      <p className="text-gray-600">09.00 WIB</p>
                    </div>
                  </div>
                </div>
                <div className="lg:absolute right-0 lg:h-full flex items-center mr-4">
                  <button className="button1 hover:bg-indigo-600 text-white">
                    Book A seat<span>{kananIcon}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExamUp;
