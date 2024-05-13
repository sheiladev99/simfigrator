"use client";
import { Checkbox, CheckboxProps } from "@mantine/core";
import { Icons } from "./icons";

function CustomCheckbox({ radius, icon, classNames, ...props }: CheckboxProps) {
  const checkboxIcon: CheckboxProps["icon"] = ({ indeterminate, ...rest }) => (
    <Icons.Check {...rest} />
  );

  return (
    <Checkbox
      radius={radius ?? 4}
      icon={icon ?? checkboxIcon}
      classNames={
        classNames ?? {
          input:
            "!bg-[#FFFFFF1A] checked:!bg-app-blue !border-none !cursor-pointer",
        }
      }
      {...props}
    />
  );
}

export default CustomCheckbox;
