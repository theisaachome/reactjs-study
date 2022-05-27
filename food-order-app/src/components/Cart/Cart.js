import Modal from '../UI/Modal';
import styles from './Cart.module.css';

const Cart = (props) => {
    const cartItems =<ul className={styles['cart-items']}>{
        [{id:"e1",name:"Sushi",amount:2,price:29.99}].map((item)=><li key={item.id}>{item.name}</li>)
        }</ul>
  return (
    <Modal>
        {cartItems}
        <div className={styles.total}>
            <span>Total Amount</span>
            <span>35.2</span>
        </div>
        <div className={styles.actions}>
            <button className={styles["button--alt"]} onClick={props.onClose}>Close</button>
            <button className={styles["button"]}>Order</button>
        </div>
    </Modal>
  )
}

export default Cart