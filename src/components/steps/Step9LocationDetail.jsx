// src/components/steps/Step9LocationDetail.jsx
import React, { useState } from "react";

const Step9LocationDetail = ({
  formData,
  updateFormData,
  nextStep,
  prevStep,
}) => {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (formData.locationNYC === "Yes") {
      if (!formData.accidentDescription) {
        setError("Question, 'Please describe your accident and injury' is required.");
        return;
      }
    } else {
      if (!formData.accidentState) {
        setError("Question, 'What State did the accident happen in?' is required.");
        return;
      }
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

      {formData.locationNYC === "Yes" ? (
        <>
          <h2 className="text-xl font-semibold text-gray-800 px-6">
            Please describe your accident and injury *
          </h2>
          <div className="flex flex-col space-y-2 px-6">
          <textarea
            rows={4}
            className="border p-2 rounded"
            placeholder="Describe your accident..."
            value={formData.accidentDescription}
            onChange={(e) =>
              updateFormData({ accidentDescription: e.target.value })
            }
          />
          </div>
        </>
      ) : (
        <>
          <h2 className="text-xl font-semibold text-gray-800 px-6">
            What State did the accident happen in? *
          </h2>
          <div className="flex flex-col space-y-2 px-6">
          <input
            type="text"
            className="border p-2 rounded"
            placeholder="State name..."
            value={formData.accidentState}
            onChange={(e) => updateFormData({ accidentState: e.target.value })}
          />
          </div>
        </>
      )}

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

export default Step9LocationDetail;
