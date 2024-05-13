const Drag = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={9} cy={6} r={1.5} fill="#fff" />
    <circle cx={9} cy={12} r={1.5} fill="#fff" />
    <circle cx={9} cy={18} r={1.5} fill="#fff" />
    <circle cx={15} cy={6} r={1.5} fill="#fff" />
    <circle cx={15} cy={12} r={1.5} fill="#fff" />
    <circle cx={15} cy={18} r={1.5} fill="#fff" />
  </svg>
);
export default Drag;
