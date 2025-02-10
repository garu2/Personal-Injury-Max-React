// src/components/steps/Step7Attorney.jsx
import React, { useState } from "react";

const Step7Attorney = ({
  formData,
  updateFormData,
  nextStep,
  prevStep,
  disqualify,
}) => {
  const [error, setError] = useState("");

  const options = [
    "No, I don’t have an attorney",
    "I have an attorney but want a new one",
    "Yes, I already have an attorney",
    "My case is already settled",
    "I accepted an offer from Insurance",
  ];

  const handleRadioSelect = (option) => {
    updateFormData({ attorney: option });
    setError("");

    const disqualifying = [
      "Yes, I already have an attorney",
      "My case is already settled",
      "I accepted an offer from Insurance",
    ];
    if (disqualifying.includes(option)) {
      disqualify();
    } else {
      setTimeout(() => {
        nextStep();
      }, 300);
    }
  };

  const handleNext = () => {
    if (!formData.attorney) {
      setError("Question, 'Do you have an attorney for this accident?' is required.");
      return;
    }
    setError("");

    const disqualifying = [
      "Yes, I already have an attorney",
      "My case is already settled",
      "I accepted an offer from Insurance",
    ];
    if (disqualifying.includes(formData.attorney)) {
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
        Do you have an attorney for this accident? *
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
              name="attorney"
              value={option}
              checked={formData.attorney === option}
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

export default Step7Attorney;
