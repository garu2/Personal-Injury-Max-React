// src/components/steps/Step3Fault.jsx
import React, { useState } from "react";

const Step3Fault = ({
  formData,
  updateFormData,
  nextStep,
  prevStep,
  disqualify,
}) => {
  const [error, setError] = useState("");

  const handleRadioSelect = (option) => {
    updateFormData({ fault: option });
    setError("");

    if (option === "Yes") {
      disqualify();
    } else {
      setTimeout(() => {
        nextStep();
      }, 300);
    }
  };

  const handleNext = () => {
    if (!formData.fault) {
      setError("Question, 'Was the accident your fault?' is required.");
      return;
    }
    setError("");

    if (formData.fault === "Yes") {
      disqualify();
    } else {
      nextStep();
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
        Was the accident your fault? *
      </h2>
      <div className="flex flex-col space-y-2 px-6">
        <label
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => handleRadioSelect("No")}
        >
          <input
            type="radio"
            name="fault"
            value="No"
            checked={formData.fault === "No"}
            onChange={() => {}}
            className="accent-red-600 cursor-pointer"
          />
          <span>No</span>
        </label>
        <label
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => handleRadioSelect("Yes")}
        >
          <input
            type="radio"
            name="fault"
            value="Yes"
            checked={formData.fault === "Yes"}
            onChange={() => {}}
            className="accent-red-600 cursor-pointer"
          />
          <span>Yes</span>
        </label>
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

export default Step3Fault;
