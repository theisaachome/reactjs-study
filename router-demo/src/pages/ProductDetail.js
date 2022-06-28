import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {

  const params = useParams();
  console.log(params.productId);
  return (
    <section>
      <h1>Product Details With ID {params.productId} </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis earum illo molestiae accusantium porro inventore, unde vel totam, recusandae aut neque rem nesciunt veritatis distinctio reprehenderit similique magni! Dolorum.</p>
    </section>
  );
};

export default ProductDetail;
