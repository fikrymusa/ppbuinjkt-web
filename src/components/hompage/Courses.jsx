import React from "react";

const Courses = () => {
  const courses = [
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
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col px-8 lg:px-0">
          <div className="mb-16">
            <h3 className="text-center font-bold text-ungu2">
              We Provide an accelent serive
            </h3>
            <h2 className="text-center text-5xl font-bold gr_gray">
              Our Services
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-between shadow-md rounded-xl py-8 px-8 bg-slate-100 hover:bg-indigo-500 hover:text-white cursor-pointer duration-500">
              <span>icon</span>
              <h4 className="text-xl font-bold">TIPA</h4>
              <h5 className="text-center ">
                Embrace nature for a more peaceful lifestyle.
              </h5>
            </div>
            <div className="flex flex-col items-center justify-between  shadow-md rounded-xl py-8 px-8 bg-slate-100 hover:bg-indigo-500 hover:text-white cursor-pointer duration-500">
              <span>icon</span>
              <h4 className="text-xl font-bold">TIPA</h4>
              <h5 className="text-center ">
                Embrace nature for a more peaceful lifestyle.
              </h5>
            </div>
            <div className="flex flex-col items-center justify-between  shadow-md rounded-xl py-8 px-8 bg-slate-100 hover:bg-indigo-500 hover:text-white cursor-pointer duration-500">
              <span>icon</span>
              <h4 className="text-xl font-bold mt-4 mb-4">TIPA</h4>
              <h5 className="text-center ">
                Embrace nature for a more peaceful lifestyle.
              </h5>
            </div>
            <div className="flex flex-col items-center justify-between  shadow-md rounded-xl py-8 px-8 bg-slate-100 hover:bg-indigo-500 hover:text-white cursor-pointer duration-500">
              <span>icon</span>
              <h4 className="text-xl font-bold">TIPA</h4>
              <h5 className="text-center ">
                Embrace nature for a more peaceful lifestyle.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
