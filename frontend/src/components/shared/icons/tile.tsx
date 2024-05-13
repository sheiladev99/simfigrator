import { ISvgProps } from "@/models/svg";

const Tile = ({ isActive = true, ...props }: ISvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke={isActive ? "#fff" : "gray"}
    {...props}
  >
    <rect width={7} height={7} x={3.5} y={3.5} rx={0.5} />
    <rect width={7} height={7} x={3.5} y={13.5} rx={0.5} />
    <rect width={7} height={7} x={13.5} y={3.5} rx={0.5} />
    <rect width={7} height={7} x={13.5} y={13.5} rx={0.5} />
  </svg>
);
export default Tile;
