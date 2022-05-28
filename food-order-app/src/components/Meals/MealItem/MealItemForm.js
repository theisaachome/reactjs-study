import {useRef,useState} from "react";
import Input from '../../UI/Input'
import styles from './MealItemForm.module.css'

const MealItemForm = (props) => {
    const [amountValid, setAmountValid] = useState(true);
    const amountInputRef = useRef();
    const submitHandler = (e)=>{
        e.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredNumberAmount = +enteredAmount;
        if(enteredAmount.trim().length===0||
        enteredNumberAmount < 0 || enteredNumberAmount>5){
            setAmountValid(false);
            return;
        }
        props.onAddToCart(+enteredAmount);

    }
    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: 'amount_' + props.id,
                    type: "number",
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }} />
            <button>+ add</button>
            {!amountValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    )
}

export default MealItemForm