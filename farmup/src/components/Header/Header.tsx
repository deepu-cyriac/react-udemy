import { NavLink, Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <h2>FarmUp</h2>
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
