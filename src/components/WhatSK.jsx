import React from "react";
import { CheckCircle } from "lucide-react";

const WhatSK = () => {
  return (
    <section className="bg-black w-full text-white py-10 px-6 text-center my-14 scroll-mt-20" id="what-you-should-know">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
          What You Should Know
        </h2>

        <ul className="text-lg sm:text-xl space-y-4 text-left mx-auto max-w-[500px]">
          <li className="flex items-center gap-3">
            <span className="flex-shrink-0">
              <CheckCircle className="text-[#F4A261] w-6 h-6" />
            </span>
            <span className="flex-1">
              Law Firms get 3.5X more compensation on average
            </span>
          </li>
          <li className="flex items-center gap-3">
            <span className="flex-shrink-0">
              <CheckCircle className="text-[#F4A261] w-6 h-6" />
            </span>
            <span className="flex-1">Thousands of Happy Clients</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="flex-shrink-0">
              <CheckCircle className="text-[#F4A261] w-6 h-6" />
            </span>
            <span className="flex-1">100% No Fees Until You Win</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhatSK;
