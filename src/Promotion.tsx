import { Link } from "react-router-dom";
export default function Promotion({ isPromotion }: { isPromotion: boolean }) {
  if (isPromotion) {
    return (
      <>
        <h1>Hey This is Promotion Page</h1>
        <Link to={`/`}>Back To Home</Link>
      </>
    );
  }
  return (
    <>
      <h1>Sorry Now we don't have any Promotion</h1>

      <Link to={`/`}>Back To Home</Link>
    </>
  );
}
