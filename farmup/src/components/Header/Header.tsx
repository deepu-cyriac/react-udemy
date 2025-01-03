import { NavLink, Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          FarmUp
        </NavLink>
        <br />
        <Link to="/info/1">product 1</Link>
      </nav>
    </div>
  );
};

export default Header;
