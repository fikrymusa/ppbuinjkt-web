import React from "react";

const Tutor = () => {
  return (
    <>
      <section className="w-full max-w-7xl mx-auto py-16 lg:py-32">
        <div>
          <div className="flex flex-col">
            <div className="mb-16">
              <h3 className="text-center font-bold text-ungu2 mb-8">
                We Provide an accelent serive
              </h3>
              <h2 className="text-center text-5xl font-bold gr_gray">
                Meet Our Tutors
              </h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8 px-8 lg:px-0">
          <div className="flex flex-col w-full">
            <img
              src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-01-2.webp"
              className="rounded-md"
            />
            <div>
              <h3 className="text-xl font-bold mt-4 text-gray-700">
                Michel Kucluk Aja, Ph.D
              </h3>
              <p className="text-gray-500">Expert dibiadainga apa?</p>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <img
              src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-01-2.webp"
              className="rounded-md"
            />
            <div>
              <h3 className="text-xl font-bold mt-4 text-gray-700">
                Michel Kucluk Aja
              </h3>
              <p className="text-gray-500">Expert dibiadainga apa?</p>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <img
              src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-01-2.webp"
              className="rounded-md"
            />
            <div>
              <h3 className="text-xl font-bold mt-4 text-gray-700">
                Michel Kucluk Aja
              </h3>
              <p className="text-gray-500">Expert dibiadainga apa?</p>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <img
              src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-01-2.webp"
              className="rounded-md"
            />
            <div>
              <h3 className="text-xl font-bold mt-4 text-gray-700">
                Michel Kucluk Aja
              </h3>
              <p className="text-gray-500">Expert dibiadainga apa?</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tutor;
