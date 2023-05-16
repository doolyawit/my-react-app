import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <h1>This is About Page</h1>
      <Link to={`/`}>Back To Home</Link>
    </>
  );
}
