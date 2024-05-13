import { classNames } from "@/utils/helpers/classNames";

type PolymorphicProps<E extends React.ElementType> = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<E> & {
    as?: E;
  }
>;

function Box<T extends React.ElementType>({
  as,
  className,
  ...props
}: PolymorphicProps<T>) {
  const Component = as ?? "div";
  return (
    <Component
      className={classNames(
        "bg-app-gray-bg rounded-[16px] overflow-hidden block w-full",
        className
      )}
      {...props}
    />
  );
}

export default Box;
