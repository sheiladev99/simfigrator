"use client";
import { useState } from "react";
import StepLine from "./step-line";
import CustomButton from "@/components/shared/custom-button";

const GROUPS = [
  {
    title: "general information",
    questions: [1, 2, 3],
  },
  {
    title: "general informatio",
    questions: [1, 2],
  },
  {
    title: "general informati",
    questions: [1],
  },
  {
    title: "general informat",
    questions: [1, 2, 3, 4, 5],
  },
  {
    title: "general informa",
    questions: [1, 2, 3],
  },
];

function Steps({ activeStep = 2 }: { activeStep?: number }) {
  const [currentStep, setCurrentStep] = useState(1);

  const stepsPerGroups = GROUPS.map((group) => group.questions.length);
  let activeGroupIndex = 0;
  let prevGroupsTotalSteps = 0;

  for (let index = 0; index <= stepsPerGroups.length; index++) {
    if (currentStep <= stepsPerGroups[index] + prevGroupsTotalSteps) {
      activeGroupIndex = index;
      break;
    }
    prevGroupsTotalSteps += stepsPerGroups[index];
  }

  return (
    <>
      <ul className="flex gap-[18px]">
        {GROUPS.map(({ title, questions }, index) => (
          <li
            key={title}
            className="transition-all duration-500"
            style={{
              flexBasis:
                index === activeGroupIndex
                  ? `${(2 / (GROUPS.length + 1)) * 100}%`
                  : `${(1 / (GROUPS.length + 1)) * 100}%`,
            }}
          >
            <StepLine
              title={title}
              steps={stepsPerGroups[index]}
              isActive={index === activeGroupIndex}
              isDone={index < activeGroupIndex}
              currentStep={currentStep - prevGroupsTotalSteps}
            />
          </li>
        ))}
      </ul>
      <div className="mt-10 flex gap-6">
        {currentStep > 1 && (
          <CustomButton
            onClick={() => setCurrentStep((prevState) => --prevState)}
          >
            prev
          </CustomButton>
        )}
        <CustomButton
          onClick={() => setCurrentStep((prevState) => ++prevState)}
        >
          next
        </CustomButton>
      </div>
    </>
  );
}

export default Steps;
