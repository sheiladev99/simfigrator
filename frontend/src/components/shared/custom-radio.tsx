"use client";
import { Radio, RadioProps } from "@mantine/core";
import { Icons } from "./icons";

function CustomRadio({ classNames, icon, ...props }: RadioProps) {
  return (
    <Radio
      icon={icon ?? Icons.Check}
      classNames={
        classNames ?? {
          radio:
            "!bg-[#FFFFFF1A] checked:!bg-app-blue !border-none !cursor-pointer",
        }
      }
      {...props}
    />
  );
}

export default CustomRadio;
