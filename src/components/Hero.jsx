import React, { useEffect, useState } from "react";

const Hero = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    const fetchState = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        setState(data.region);
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };

    fetchState();
  }, []);

  return (
    <section className="text-center py-12 px-4 max-w-[800px] mt-20">
      <h2 className="text-lg font-medium text-gray-700">
        Claim Accident Compensation Now
      </h2>

      <h1 id="dynamic-header" className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-black my-4">
        {state ? `HOW MUCH WILL YOU GET IN ${state.toUpperCase()}?` : "HOW MUCH WILL YOU GET?"}
      </h1>

      <p className="text-lg italic font-semibold text-gray-600">
        No Win, No Fee – Guaranteed!
      </p>

      <p className="text-gray-500 mt-2">
        Time is limited to file your claim after an accident.
      </p>
    </section>
  );
};

export default Hero;
