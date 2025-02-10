// src/components/steps/Step5MedicalTreatment.jsx
import React, { useState } from "react";

const Step5MedicalTreatment = ({
  formData,
  updateFormData,
  nextStep,
  prevStep,
}) => {
  const [error, setError] = useState("");

  const handleRadioSelect = (val) => {
    updateFormData({ medicalTreatment: val });
    setError("");
    setTimeout(() => {
      nextStep();
    }, 300);
  };

  const handleNext = () => {
    if (!formData.medicalTreatment) {
      setError(
        "Question, 'Did you get medical treatment for your injuries?' is required."
      );
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
        Did you get medical treatment for your injuries? *
      </h2>
      <div className="flex flex-col space-y-2 px-6">
      <label
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => handleRadioSelect("Yes")}
      >
        <input
          type="radio"
          name="medicalTreatment"
          value="Yes"
          checked={formData.medicalTreatment === "Yes"}
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
          name="medicalTreatment"
          value="No"
          checked={formData.medicalTreatment === "No"}
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

export default Step5MedicalTreatment;
