"use client";

import { classNames } from "@/utils/helpers/classNames";

interface ICustomInput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  error?: string;
  type?: "text" | "email" | "password" | "number";
  fullwidth?: boolean;
}

type CustomInputPropsType = Readonly<Omit<ICustomInput, "className">>;

function CustomInput({
  label,
  type = "text",
  error,
  fullwidth = false,
  ...rest
}: CustomInputPropsType) {
  return (
    <div
      className={classNames(
        "flex-col gap-1",
        fullwidth ? "flex" : "inline-flex"
      )}
    >
      <label
        className={classNames(
          "flex-col gap-1",
          fullwidth ? "flex" : "inline-flex"
        )}
      >
        {label && (
          <span className="inline-block text-[12px] leading-[14px] font-rubik font-normal text-app-gray-light">
            {label}
          </span>
        )}
        <input
          type={type}
          className={classNames(
            "!p-4 !rounded-[12px] !border border-white !bg-app-gray-bg !text-base !text-white font-rubik font-normal !outline-none focus:outline-none focus-visible:outline-none hover:outline-none focus:border-app-blue",
            error && "!border-app-red-error"
          )}
          {...rest}
        />
      </label>
      {error && (
        <span className="inline-block text-[12px] leading-[14px] font-rubik font-normal text-app-red-error px-4">
          {error}
        </span>
      )}
    </div>
  );
}

export default CustomInput;
