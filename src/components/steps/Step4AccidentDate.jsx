// src/components/steps/Step4AccidentDate.jsx
import React, { useState } from "react";

const Step4AccidentDate = ({
  formData,
  updateFormData,
  nextStep,
  prevStep,
  disqualify,
}) => {
  const [error, setError] = useState("");

  const options = [
    "In the last 14 days",
    "1-3 months ago",
    "3-6 months ago",
    "6-12 months ago",
    "Over 1 year ago",
    "Over 2 years ago",
  ];

  const handleRadioSelect = (option) => {
    updateFormData({ accidentDate: option });
    setError("");
    if (option === "Over 2 years ago") {
      disqualify();
    } else {
      setTimeout(() => {
        nextStep();
      }, 300);
    }
  };

  const handleNext = () => {
    if (!formData.accidentDate) {
      setError("Question, 'When did the accident happen?' is required.");
      return;
    }
    setError("");

    if (formData.accidentDate === "Over 2 years ago") {
      disqualify();
    } else {
      setTimeout(() => {
        nextStep();
      }, 300);
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      {error && (
        <div className="bg-red-50 text-red-700 p-3 border-l-4 border-red-500">
          {error}
        </div>
      )}

      <h2 className="text-xl font-semibold text-gray-800 px-6">
        When did the accident happen? *
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
              name="accidentDate"
              value={option}
              checked={formData.accidentDate === option}
              onChange={() => {}}
              className="accent-red-600 cursor-pointer"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>

      <div className="mt-6 bg-red-500 text-white rounded-b-lg flex justify-between">
        <button onClick={prevStep} className="font-semibold hover:bg-red-600 cursor-pointer px-4 py-3 rounded-bl-lg">
          &larr; PREV
        </button>
        <button onClick={handleNext} className="font-semibold hover:bg-red-700 cursor-pointer px-4 py-3 bg-red-600 rounded-br-lg">
          NEXT &rarr;
        </button>
      </div>
    </div>
  );
};

export default Step4AccidentDate;
