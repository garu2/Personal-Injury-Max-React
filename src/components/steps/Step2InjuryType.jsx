// src/components/steps/Step2InjuryType.jsx
import React, { useState } from "react";

const Step2InjuryType = ({ formData, updateFormData, nextStep, prevStep }) => {
  const [error, setError] = useState("");

  const options = [
    "Fatality or Wrongful Death",
    "Major Injury: Broken Bones, Fractures, Organ Damage, Concussion",
    "Moderate Injury: Neck or Back Pain, Sprains, Whiplash",
    "No Physical Injury",
  ];

  const handleRadioSelect = (option) => {
    updateFormData({ injuryType: option });
    setError("");
    setTimeout(() => {
      nextStep();
    }, 300);
  };

  const handleNext = () => {
    if (!formData.injuryType) {
      setError("Question, 'How were you hurt?' is required.");
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

      <h2 className="text-xl font-semibold text-gray-800 px-6">How were you hurt? *</h2>
      <div className="flex flex-col space-y-2 px-6">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleRadioSelect(option)}
          >
            <input
              type="radio"
              name="injuryType"
              value={option}
              checked={formData.injuryType === option}
              onChange={() => {}}
              className="accent-red-600 cursor-pointer"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>

      <div className="mt-6 bg-red-500 text-white rounded-b-lg flex justify-between">
        <button onClick={prevStep} className="font-semibold hover:bg-red-600 cursor-pointer  px-4 py-3 rounded-bl-lg">
          &larr; PREV
        </button>
        <button onClick={handleNext} className="font-semibold hover:bg-red-700 cursor-pointer px-4 py-3 bg-red-600 rounded-br-lg">
          NEXT &rarr;
        </button>
      </div>
    </div>
  );
};

export default Step2InjuryType;
