import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <span className="font-heading flex flex-nowrap text-xl font-light tracking-[0.2em] text-white lg:text-3xl">
        S U L I K O
      </span>
    </Link>
  );
}
