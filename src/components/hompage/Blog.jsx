import React from "react";
import { kananIcon } from "../../../lib/myIcons";

const Blog = () => {
  return (
    <section className="bg-black text-white">
      <div className="w-full max-w-7xl mx-auto py-16 px-8 lg:px-0">
        <div>
          <div className="mb-12">
            <h3 className="text-center font-bold text-ungu2 mb-8">
              Our latest Information
            </h3>
            <h2 className="text-center text-6xl font-bold gr_gray">
              Read Our Latest Blogs
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
            {/* Card  */}
            <div className="w-full flex flex-col gap-4  border-solid border-[1px] border-gray-500 shadow-gray-100 rounded-xl px-8 py-8">
              <span className="text-lg font-bold">Caterogi</span>
              <img src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/01/course-06-2-590x430.webp" />
              <h1 className="text-lg font-bold leading-relaxed">
                The Complete Web Developer Guideline 2023
              </h1>
              <p className="text-md leading-relaxed">
                Headlin Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book.
              </p>
              <button className="button1 hover:bg-indigo-600">
                Read More
                <span>{kananIcon}</span>
              </button>
            </div>
            {/* Card  */}
            <div className="w-full flex flex-col gap-4  border-solid border-[1px] border-gray-500 shadow-gray-100 rounded-xl px-8 py-8">
              <span className="text-lg font-bold">Caterogi</span>
              <img src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/01/course-06-2-590x430.webp" />
              <h1 className="text-lg font-bold leading-relaxed">
                The Complete Web Developer Guideline 2023
              </h1>
              <p className="text-md leading-relaxed">
                Headlin Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book.
              </p>
              <button className="button1 hover:bg-indigo-600 ">
                Read More
                <span>{kananIcon}</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 mt-8 gap-8">
            {/* Card  */}
            <div className="w-full flex flex-row gap-8  border-solid border-[1px] border-gray-500 shadow-gray-100 rounded-xl px-8 py-8">
              <img
                src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/01/course-06-2-590x430.webp"
                className="h-32 rounded-md"
              />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-400">
                  Caterogi
                </span>
                <h1 className="text-lg font-bold leading-relaxed mb-4">
                  The Complete Web Developer Guideline 2023
                </h1>
                <p className="text-md leading-relaxed text-gray-400">
                  Headlin Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <button className="button1 hover:bg-indigo-600 mt-4">
                  Read More
                  <span>{kananIcon}</span>
                </button>
              </div>
            </div>
            {/* Card  */}
            <div className="w-full flex flex-row gap-8  border-solid border-[1px] border-gray-500 shadow-gray-100 rounded-xl px-8 py-8">
              <img
                src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/01/course-06-2-590x430.webp"
                className="h-32"
              />
              <div className="flex flex-col">
                <span className="text-sm font-bold">Caterogi</span>
                <h1 className="text-lg font-bold leading-relaxed">
                  The Complete Web Developer Guideline 2023
                </h1>
                <p className="text-md leading-relaxed">
                  Headlin Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <button className="button1 hover:bg-indigo-600 mt-4">
                  Read More
                  <span>{kananIcon}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
