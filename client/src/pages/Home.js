import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Jumbotron from 'react-bootstrap/Jumbotron';
const Home = () => {
  return (
    <div className="container">
<Jumbotron>
      <CategoryMenu />
      </Jumbotron>
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
