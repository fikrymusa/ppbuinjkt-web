import React from "react";
import { chatIcon, jamIcon, micIcon } from "../../../lib/myIcons";

const ServicesPpb = () => {
  const ServicesPpb = [
    {
      name: "TIPA",
      path: "/exam/tipa",
    },
    {
      name: "TIPA2",
      path: "/exam/tipa",
    },
    {
      name: "TIPA3",
      path: "/exam/tipa",
    },
  ];
  return (
    <section className="w-full relative py-16 lg:py-32">
      <div className="w-full max-w-7xl mx-auto px-8 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-around gap-8">
          <div className="lg:flex lg:flex-col lg:w-1/3">
            <div className="mb-16">
              <h3 className="font-bold text-ungu2 mb-8 text-center lg:text-left">
                We Provide an accelent serive
              </h3>
              <h2 className="text-5xl font-bold gr_gray text-center lg:text-left">
                Our Services Features
              </h2>
            </div>
            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-1 gap-4">
                <span className="text-7xl font-bold text-biru2">
                  {chatIcon}
                </span>
                <span className="text-3xl font-bold text-gray-600">
                  Translate
                </span>
                <p className="text-gray-400 text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <span className="text-7xl font-bold text-biru2">{micIcon}</span>
                <span className="text-3xl font-bold text-gray-600">
                  Courses
                </span>
                <p className="text-gray-400 text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <span className="text-7xl font-bold text-biru2">
                  {chatIcon}
                </span>
                <span className="text-3xl font-bold text-gray-600">
                  Test / Exam
                </span>
                <p className="text-gray-400 text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <img src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/choose-us-image-01-2.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPpb;
