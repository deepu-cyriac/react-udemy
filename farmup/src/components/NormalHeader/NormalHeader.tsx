import { NavLink, Link } from "react-router-dom";

import "./NormalHeader.css";

const NormalHeader: React.FC = () => {
  return (
    <div className="n-header text-center py-3 mt-auto" data-bs-theme="dark">
      <nav data-bs-theme="dark">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
          style={{ textDecoration: "none", color: "white" }}
        >
          <h2>Destino Gaming</h2>
        </NavLink>
        <Link to={`/posts`} style={{ textDecoration: "none", color: "white" }}>
          <h3>Posts</h3>
        </Link>
      </nav>
    </div>
  );
};

export default NormalHeader;
