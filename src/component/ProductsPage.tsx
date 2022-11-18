import { Link, Outlet } from "react-router-dom";

export const ProductsPage = () => {
  return (
    <>
      <div>
        <input type="search" placeholder="search" />
      </div>
      <nav>
        <Link to="fetured-products">Featured Products</Link>
        <Link to="new-products">New</Link>
      </nav>
      <Outlet />
    </>
  );
};
