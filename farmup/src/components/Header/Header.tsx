import { NavLink, Link } from "react-router-dom";

import "./Header.css";

const Header: React.FC = () => {
  return (
    <div className="header-main text-center py-3">
      <nav>
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

export default Header;
