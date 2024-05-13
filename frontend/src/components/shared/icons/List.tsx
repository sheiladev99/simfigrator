import { ISvgProps } from "@/models/svg";

const List = ({ isActive = true, ...props }: ISvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke={isActive ? "#fff" : "gray"}
    {...props}
  >
    <rect width={17} height={3.667} x={3.5} y={3.5} rx={0.5} />
    <rect width={17} height={3.667} x={3.5} y={10.167} rx={0.5} />
    <rect width={17} height={3.667} x={3.5} y={16.833} rx={0.5} />
  </svg>
);
export default List;
