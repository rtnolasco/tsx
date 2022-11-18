import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./component/Home";

// import { About } from "./component/About";
import { Navbar } from "./component/Navbar";
import { OrderSummary } from "./component/OrderSummary";
import { NoMatch } from "./component/NoMatch";
import "./App.css";
import { ProductsPage } from "./component/ProductsPage";
import { FeaturedProducts } from "./component/FeaturedProducts";
import { NewProducts } from "./component/NewProducts";
import { User } from "./component/User";
import { UserDetails } from "./component/UserDetails";
import { Admin } from "./component/Admin";
const LazyAbout = React.lazy(() => import("./component/About"));

// import people from "./Query/people";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading">
              <LazyAbout />{" "}
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="productspage" element={<ProductsPage />}>
          <Route path="fetured-products" element={<FeaturedProducts />} />
          <Route path="new-products" element={<NewProducts />} />
        </Route>
        <Route path="user" element={<User />}>
          <Route path=":userid" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="/*" element={<NoMatch />}></Route>
      </Routes>
    </>
  );
}

export default App;
