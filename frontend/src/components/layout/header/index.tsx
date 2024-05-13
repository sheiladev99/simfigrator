import { Icons } from "@/components/shared/icons";
import { classNames } from "@/utils/helpers/classNames";
import React from "react";

interface IHeaderprops {
  children?: React.ReactNode;
  padding?: "sm" | "lg";
  className?: string;
}

type HeaderPropsType = Readonly<IHeaderprops>;

function Header({ children, padding = "lg", className }: HeaderPropsType) {
  return (
    <header
      className={classNames(
        "bg-transparent py-8 flex items-center justify-between",
        padding === "lg" ? "px-[110px]" : "px-[40px]",
        className
      )}
    >
      <Icons.Logo />
      {children}
    </header>
  );
}

export default Header;
