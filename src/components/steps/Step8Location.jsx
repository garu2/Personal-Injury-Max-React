// src/components/steps/Step8Location.jsx
import React, { useState } from "react";

const Step8Location = ({ formData, updateFormData, nextStep, prevStep }) => {
  const [error, setError] = useState("");

  const handleRadioSelect = (val) => {
    updateFormData({ locationNYC: val });
    setError("");
    setTimeout(() => {
      nextStep();
    }, 300);
  };

  const handleNext = () => {
    if (!formData.locationNYC) {
      setError("Question, 'Did your accident happen in NY?' is required.");
      return;
    }
    setError("");
    setTimeout(() => {
      nextStep();
    }, 300);
  };

  return (
    <div className="flex flex-col space-y-4">
      {error && (
        <div className="bg-red-50 text-red-700 p-3 border-l-4 border-red-500">
          {error}
        </div>
      )}
      <h2 className="text-xl font-semibold text-gray-800 px-6">
        Did your accident happen in the New York City area or state of New York? *
      </h2>
      <div className="flex flex-col space-y-2 px-6">
      <label
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => handleRadioSelect("Yes")}
      >
        <input
          type="radio"
          name="locationNYC"
          value="Yes"
          checked={formData.locationNYC === "Yes"}
          onChange={() => {}}
          className="accent-red-600 cursor-pointer"
        />
        <span>Yes</span>
      </label>
      <label
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => handleRadioSelect("No")}
      >
        <input
          type="radio"
          name="locationNYC"
          value="No"
          checked={formData.locationNYC === "No"}
          onChange={() => {}}
          className="accent-red-600 cursor-pointer"
        />
        <span>No</span>
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

export default Step8Location;
