import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <section>
        <h1>The Products Page</h1>
        <ul>
          <li><Link to={`/product-detail/${100}`}>Motivation Book</Link></li>
          <li><Link  to={`/product-detail/${200}`}>The guy from Hlegu</Link></li>
          <li><Link  to={`/product-detail/${300}`}>Spider Book</Link></li>
        </ul>
      </section>
    </>
  );
};

export default Products;
