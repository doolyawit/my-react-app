import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li className="roundButton">
          <Link to={`/`}>Home</Link>
        </li>
        <li className="roundButton">
          <Link to={`about`}>About</Link>
        </li>
      </ul>
    </nav>
  );
}
