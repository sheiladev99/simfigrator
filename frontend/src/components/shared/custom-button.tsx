import { classNames } from "@/utils/helpers/classNames";

interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color?: "blue" | "violet" | "white";
  variant?: "primary" | "secondary";
}

type CustomButtonProps = Readonly<IButtonProps>;

function CustomButton({
  variant = "primary",
  color = "blue",
  className,
  disabled,
  children,
  ...rest
}: CustomButtonProps) {
  const btnClasses = classNames(
    "bg-transparent font-rubik text-base leading-[24px] font-medium text-white rounded-full border-2 border-solid border-white",
    variant === "primary" && "py-[15px] px-[61px] ",
    variant === "primary" &&
      color === "blue" &&
      "shadow-[inset_0px_0px_4px_0px_#6F8EFF,0px_0px_6px_0px_#6F8EFF]",
    variant === "primary" &&
      color === "violet" &&
      "shadow-[0px_0px_4.68px_0px_#B500E2,inset_0px_0px_3.12px_0px_#B500E2]",
    variant === "secondary" &&
      "flex items-center justify-center text-center p-2.5",
    variant === "secondary" && color === "blue" && "border-app-blue",
    disabled && "border-app-gray shadow-none text-app-gray",
    className
  );

  return (
    <button className={btnClasses} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}

export default CustomButton;
