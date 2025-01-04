import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="bg-dark text-white text-center py-3">
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
          style={{ textDecoration: "none", color: "white" }}
        >
          <h2>FarmUp</h2>
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
