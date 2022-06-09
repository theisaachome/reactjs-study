import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  let content ;
  if(cartItems.length>0){
      content=(<ul>
      {cartItems.map((item) => (
      <CartItem key={item.id}
        item={{ 
          id:item.id,
          title: item.name, 
          quantity: item.quantity, 
          total: item.totalPrice, 
          price: item.price }}/>
          ))}
    </ul>);
  }else{
    content=<p>No  item Found in your Cart.</p>;
  }
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {content}
    </Card>
  );
};

export default Cart;
