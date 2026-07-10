import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <span className="font-heading flex text-xl font-light tracking-[0.2em] whitespace-nowrap text-white md:text-2xl lg:text-3xl">
        S U L I K O
      </span>
    </Link>
  );
}
