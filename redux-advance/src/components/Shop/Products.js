import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_DATA=[
  {
    id:1,
    price:6,
    title:"My First Book",
    description:"This is my first book I ever wrote"
  },
  {
    id:2,
    price:5,
    title:"My Second Book",
    description:"This is my first book I ever wrote"
  },
  {
    id:3,
    price:8,
    title:"Getting Started with React",
    description:"One place to get all about the react."
  },
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
       { DUMMY_DATA.map((product)=> <ProductItem key={product.id} {...product}/>)}
      </ul>
    </section>
  );
};

export default Products;
