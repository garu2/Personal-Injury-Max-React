// src/components/Disqualified.jsx
import React from "react";

const Disqualified = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4 text-red-600">
        Thank you for taking this survey.
      </h1>
      <p className="text-lg">
        It appears you do not qualify based on one or more of your answers.
      </p>
    </div>
  );
};

export default Disqualified;
