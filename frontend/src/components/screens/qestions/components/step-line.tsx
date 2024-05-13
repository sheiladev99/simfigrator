import React from "react";

function StepLine({
  title,
  steps = 2,
  currentStep = 1,
  isActive,
  isDone,
}: {
  title?: string;
  steps?: number;
  currentStep?: number;
  isActive?: boolean;
  isDone?: boolean;
}) {
  const width = isDone
    ? "100%"
    : isActive
    ? `${((currentStep - 1) / steps) * 100}%`
    : 0;
  return (
    <div className="flex flex-col gap-3">
      <div className="relative h-2 bg-app-gray-bg rounded-full">
        <div
          className="absolute top-0 left-0 h-2 bg-app-blue rounded-full transition-all"
          style={{ width }}
        ></div>
      </div>
      {isActive && (
        <span className="text-[14px] leading-[20px] font-medium font-rubik text-app-blue capitalize text-center">
          {title}
        </span>
      )}
    </div>
  );
}

export default StepLine;
