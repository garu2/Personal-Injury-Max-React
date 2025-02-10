// src/components/steps/Step10Final.jsx
import React, { useState, useEffect } from "react";

const Step10Final = ({ formData, updateFormData, prevStep }) => {
  const [errors, setErrors] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hiddenInput = document.querySelector("[name='xxTrustedFormCertUrl']");
      if (hiddenInput) {
        updateFormData({ trustedFormUrl: hiddenInput.value });
        console.log("TrustedForm URL captured:", hiddenInput.value);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [updateFormData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      updateFormData({ [name]: checked });
    } else {
      updateFormData({ [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = [];

    if (!formData.fullName) {
      newErrors.push('Question, "What\'s your full name?" is required.');
    }
    if (!formData.email) {
      newErrors.push('Question, "Email?" is required.');
    }
    if (!formData.phone) {
      newErrors.push('Question, "Your cell phone number?" is required.');
    }
    if (!formData.consent) {
      newErrors.push("Please accept the terms and conditions.");
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Final data:", formData);
    setErrors([]);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-4 text-center space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Thank You!</h2>
        <p>Your information was submitted successfully.</p>

        {formData.trustedFormUrl ? (
          <div className="mt-4">
            <p className="font-medium">TrustedForm Certificate URL:</p>
            <a
              href={formData.trustedFormUrl}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline break-all"
            >
              {formData.trustedFormUrl}
            </a>
          </div>
        ) : (
          <p>No TrustedForm Certificate URL found.</p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      {errors.length > 0 && (
        <div className="bg-red-50 text-red-700 p-3 border-l-4 border-red-500">
          <ul className="list-disc list-inside">
            {errors.map((err, idx) => (
              <li key={idx}>{err}</li>
            ))}
          </ul>
        </div>
      )}

      <h2 className="text-2xl font-semibold text-gray-800">Final Step</h2>

      <div className="flex flex-col space-y-2 px-6">
        <label className="flex flex-col mt-2">
          <span className="font-medium">What's your full name? *</span>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col mt-2">
          <span className="font-medium">Email? *</span>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col mt-2">
          <span className="font-medium">Your cell phone number? *</span>
          <input
            type="text"
            name="phone"
            placeholder="Cell Phone"
            value={formData.phone}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex items-start space-x-2 mt-2">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="accent-red-600 mt-1"
          />
          <span className="text-sm text-gray-800">
            I Consent to Receive SMS Notifications, Alerts &amp; Occasional
            Marketing Communication from Personal Injury Max...
          </span>
        </label>

        <p className="text-sm text-gray-500 mt-2">
          <a href="#" className="text-blue-500 underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="text-blue-500 underline">
            Terms of Service
          </a>
        </p>
      </div>

      <div className="mt-6 bg-red-500 text-white rounded-b-lg flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="font-semibold hover:bg-red-600 cursor-pointer px-4 py-3 rounded-bl-lg"
        >
          &larr; PREV
        </button>
        <button
          type="submit"
          className="font-semibold hover:bg-red-700 cursor-pointer px-4 py-3 bg-red-600 rounded-br-lg"
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
};

export default Step10Final;
