"use client";

import Box from "./box";
import CustomCheckbox from "./custom-checkbox";
import CustomRadio from "./custom-radio";
import { classNames } from "@/utils/helpers/classNames";
import { Icons } from "./icons";

interface ICardProps {
  variant?: "question" | "filter";
  type?: "checkbox" | "radio" | "drag";
  title: string;
  description?: string;
  order?: number | string | boolean;
  className?: string;
  value?: string | number;
  isActive?: boolean;
  onClick?: (value?: string | number) => void;
}

type CardPropsType = Readonly<ICardProps>;

function Card({
  variant = "question",
  type = "checkbox",
  title,
  description,
  order,
  className,
  value,
  isActive,
  onClick,
}: CardPropsType) {
  return (
    <Box
      as="button"
      className={classNames(
        "flex items-center justify-between",
        variant === "question" ? "p-10 " : "p-5",
        isActive && "border-2 border-app-blue border-solid",
        className
      )}
      onClick={() => onClick?.(value)}
    >
      <div
        className={classNames(
          "flex items-center",
          variant === "question" ? "gap-6" : "gap-4"
        )}
      >
        {type === "checkbox" && (
          <CustomCheckbox value={value} checked={isActive} />
        )}
        {type === "radio" && <CustomRadio checked={isActive} />}
        {type === "drag" && (
          <span className="inline-block p-[10px] rounded-full border-2 border-solid border-white">
            <Icons.Drag />
          </span>
        )}
        <div className="flex flex-col items-start">
          <span
            className={classNames(
              "inline-block font-rubik text-white capitalize",
              variant === "question"
                ? "text-[20px] leading-[32px] font-bold"
                : "text-[16px] leading-[24px] font-normal"
            )}
          >
            {title}
          </span>
          <span className="inline-block text-[16px] leading-[24px] font-normal font-rubik text-app-gray-light">
            {description}
          </span>
        </div>
      </div>
      {type === "drag" && isActive && (
        <span className="inline-block text-[30px] leading-[40px] font-race font-normal text-app-blue">
          {order}
        </span>
      )}
    </Box>
  );
}

export default Card;
