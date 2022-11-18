import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const navLinkStyles = ({ isActive }: any) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  return (
    <nav className="primaryNav">
      <NavLink style={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to="about">
        About
      </NavLink>
      <NavLink style={navLinkStyles} to="productspage">
        Products
      </NavLink>
      <NavLink style={navLinkStyles} to="user">
        User
      </NavLink>
    </nav>
  );
};
