// src/components/steps/Step1AccidentType.jsx
import React, { useState } from "react";

const Step1AccidentType = ({ formData, updateFormData, nextStep }) => {
  const [error, setError] = useState("");

  const options = [
    "Car accident",
    "Motorcycle accident",
    "Ride share accident",
    "Commercial vehicle accident",
    "Semi-truck accident",
    "Bicycle or pedestrian accident",
    "Dog bite",
    "Injury on commercial property",
  ];

  const handleRadioSelect = (option) => {
    updateFormData({ accidentType: option });
    setError("");
    setTimeout(() => {
      nextStep();
    }, 300);
  };

  const handleNext = () => {
    if (!formData.accidentType) {
      setError("Question, 'What type of accident were you in?' is required.");
      return;
    }
    setError("");
    nextStep();
  };

  return (
    <div className="flex flex-col space-y-4">
      {error && (
        <div className="bg-red-50 text-red-700 p-3 border-l-4 border-red-500">
          {error}
        </div>
      )}

      <h2 className="text-xl font-semibold text-gray-800 px-6">
        What type of accident were you in? *
      </h2>

      <div className="flex flex-col space-y-2 px-6">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleRadioSelect(option)}
          >
            <input
              type="radio"
              name="accidentType"
              value={option}
              checked={formData.accidentType === option}
              onChange={() => {}}
              className="accent-red-600 cursor-pointer"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>

      <div className="mt-6 bg-red-500 text-white rounded-b-lg flex justify-end">
        <button
          onClick={handleNext}
          className="font-semibold ml-4 hover:bg-red-700 cursor-pointer px-4 py-3 bg-red-600 rounded-br-lg duration-200 
          "
        >
          NEXT &rarr;
        </button>
      </div>
    </div>
  );
};

export default Step1AccidentType;
