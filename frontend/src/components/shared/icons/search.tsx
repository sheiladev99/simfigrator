const Search = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={11.55} cy={11.55} r={8.55} stroke="#fff" />
    <path stroke="#fff" strokeLinecap="round" d="M19.2 19.2 21 21" />
  </svg>
);
export default Search;
