"use client";
import { useState } from "react";
import Card from "@/components/shared/card";
import { classNames } from "@/utils/helpers/classNames";

const DATA = [
  {
    title: "beginner",
    description: "we can add description here!",
  },
  {
    title: "intermediate",
    description: "we can add description here!",
  },
  {
    title: "advanced",
    description: "we can add description here!",
  },
  {
    title: "expert",
    description: "we can add description here!",
  },
];

function CardGroup({
  variant = "question",
  type = "checkbox",
  data = DATA,
}: {
  variant?: "question" | "filter";
  type?: "checkbox" | "radio" | "drag";
  data?: { title: string; description?: string }[];
}) {
  const [selectedAnswers, setSelectedAnswers] = useState<
    (string | number | undefined)[]
  >([]);

  const handleClick = (value?: number | string) => {
    if (type === "radio") setSelectedAnswers([value]);
    else {
      setSelectedAnswers((prevState) =>
        prevState.includes(value)
          ? prevState.filter((item) => item !== value)
          : [...prevState, value]
      );
    }
  };

  return (
    <>
      <ul
        className={classNames(
          "grid",
          variant === "question" ? " grid-cols-2 gap-4" : " grid-cols-1 gap-1"
        )}
      >
        {data.map(({ title, description }) => (
          <li key={title}>
            <Card
              variant={variant}
              title={title}
              description={description}
              value={title}
              isActive={selectedAnswers?.includes(title)}
              onClick={handleClick}
              type={type}
              order={
                type === "drag" &&
                selectedAnswers?.includes(title) &&
                selectedAnswers.indexOf(title) + 1
              }
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default CardGroup;
