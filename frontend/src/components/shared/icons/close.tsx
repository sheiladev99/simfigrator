const Close = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m7.05 7.05 9.9 9.9M16.95 7.05l-9.9 9.9"
    />
  </svg>
);
export default Close;
