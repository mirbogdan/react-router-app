import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Products from "./Products/Products";
import Admin from "./Admin/Admin";
import Nav from "./Common/Nav";
import ProtectedRoute from "./Common/ProtectedRoute";
import ProductsIndex from "./Products/ProductsIndex";
import Product from "./Products/Product";

const App = () => {
  //switch to false and you can not enter admin page, redirects to  "/"
  const [authenticated] = useState(true);
  return (
    <div className="appStyles">
      <Router>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<Products />}>
              <Route path="/" element={<ProductsIndex />} />
              <Route path=":id" element={<Product />} />
            </Route>
            <ProtectedRoute
              path="/admin*"
              element={<Admin />}
              authenticated={authenticated}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};
export default App;
