// src/components/MultiStepForm.jsx
import React, { useState } from "react";
import Step1AccidentType from "./steps/Step1AccidentType";
import Step2InjuryType from "./steps/Step2InjuryType";
import Step3Fault from "./steps/Step3Fault";
import Step4AccidentDate from "./steps/Step4AccidentDate";
import Step5MedicalTreatment from "./steps/Step5MedicalTreatment";
import Step6PoliceReport from "./steps/Step6PoliceReport";
import Step7Attorney from "./steps/Step7Attorney";
import Step8Location from "./steps/Step8Location";
import Step9LocationDetail from "./steps/Step9LocationDetail";
import Step10Final from "./steps/Step10Final";
import Disqualified from "./Disqualified";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    accidentType: "",
    injuryType: "",
    fault: "",
    accidentDate: "",
    medicalTreatment: "",
    policeReport: "",
    attorney: "",
    locationNYC: "",
    accidentDescription: "",
    accidentState: "",
    fullName: "",
    email: "",
    phone: "",
    consent: false,
  });

  const [disqualified, setDisqualified] = useState(false);

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const updateFormData = (newValues) => {
    setFormData((prev) => ({ ...prev, ...newValues }));
  };

  const disqualify = () => {
    setDisqualified(true);
  };

  if (disqualified) {
    return <Disqualified />;
  }

  return (
    <div className="mx-auto w-full max-w-[600px] bg-white shadow-md rounded-lg mr-3 ml-3 scroll-mt-24 mt-5" id="form">
      <div className="">
        {currentStep === 1 && (
          <Step1AccidentType
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
          />
        )}
        {currentStep === 2 && (
          <Step2InjuryType
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {currentStep === 3 && (
          <Step3Fault
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
            disqualify={disqualify}
          />
        )}
        {currentStep === 4 && (
          <Step4AccidentDate
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
            disqualify={disqualify}
          />
        )}
        {currentStep === 5 && (
          <Step5MedicalTreatment
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {currentStep === 6 && (
          <Step6PoliceReport
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {currentStep === 7 && (
          <Step7Attorney
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
            disqualify={disqualify}
          />
        )}
        {currentStep === 8 && (
          <Step8Location
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {currentStep === 9 && (
          <Step9LocationDetail
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {currentStep === 10 && (
          <Step10Final
            formData={formData}
            updateFormData={updateFormData}
            prevStep={prevStep}
          />
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
