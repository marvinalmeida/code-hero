import { Link } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = () => {
  return (
    <ul className="breadcrumb">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>Página de detalhe</li>
    </ul>
  );
};


export default Breadcrumb;