import React from "react";
import { kananIcon } from "../../../lib/myIcons";

const JoinUs = () => {
  return (
    <section className="bg-biru1">
      <div className="w-full max-w-7xl mx-auto py-16 lg:py-32 px-8 lg:px-0">
        <div className="flex flex-col items-center justify-between">
          <div className="mb-12">
            <h2 className="text-center text-6xl font-bold text-white">
              Join Our Course Today ?
            </h2>
          </div>
          <button className="button1 hover:bg-indigo-600">
            Visit Our Corses
            <span className="text-2xl font-bold">{kananIcon}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
