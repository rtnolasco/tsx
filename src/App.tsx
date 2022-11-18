import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./component/Home";
import { About } from "./component/About";
import { Navbar } from "./component/Navbar";
import { OrderSummary } from "./component/OrderSummary";
import "./App.css";

// import people from "./Query/people";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/order-summary" element={<OrderSummary />}></Route>
      </Routes>
    </>
  );
}

export default App;
