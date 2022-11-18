import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./component/Home";
import { About } from "./component/About";
import { Navbar } from "./component/Navbar";
import { OrderSummary } from "./component/OrderSummary";
import { NoMatch } from "./component/NoMatch";
import "./App.css";
import { ProductsPage } from "./component/ProductsPage";
import { FeaturedProducts } from "./component/FeaturedProducts";
import { NewProducts } from "./component/NewProducts";

// import people from "./Query/people";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="productspage" element={<ProductsPage />}>
          <Route path="fetured-products" element={<FeaturedProducts />} />
          <Route path="new-products" element={<NewProducts />} />
        </Route>

        <Route path="/*" element={<NoMatch />}></Route>
      </Routes>
    </>
  );
}

export default App;
