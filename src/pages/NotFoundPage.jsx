import { Link } from "react-router-dom";
import BanIcon from "../components/BanIcon";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <BanIcon />
      <h1 className="not-found">404 - Not Found</h1>
      <Link to="/">&larr; Back to home</Link>
    </div>
  );
};

export default NotFoundPage;
