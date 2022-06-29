import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <section>
        <h1>The Products Page</h1>
        <ul>
          <li>
            <Link to={`/products/${100}`}>Motivation Book</Link>
          </li>
          <li>
            <Link to={`/products/${200}`}>The guy from Hlegu</Link>
          </li>
          <li>
            <Link to={`/products/${300}`}>Spider Book</Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Products;
