import React,{useState} from 'react';
import "./ExpenseForm.css";

const ExpenseForm = ({onSaveExpenseData}) => {
    
    const [userInputs, setUserInputs] = useState({title:'',amount:'',date:''});

    const {title,amount,date} = userInputs;
    const changeHandler = (e)=>{
        setUserInputs((prevState)=>{
            return {
                ...prevState,
                [e.target.name]:e.target.value,
            }
        })
    }
    const submitHandler = (event)=>{
        event.preventDefault();
        const expenseData = {
            title,
            amount,
            date:new Date(date)
        }
        onSaveExpenseData(expenseData);
        setUserInputs({
            title:"",
            amount:"",
            date:""
        })
    }
  return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label >Title</label>
                <input 
                    type="text" 
                    name='title'
                    value={title}
                    onChange={changeHandler} />
            </div>
            <div className="new-expense__control">
                <label >Amount</label>
                <input 
                    type="number" min="0.01" step="0.01" 
                    name="amount"
                    value={amount}
                    onChange={changeHandler} />
            </div>
            <div className="new-expense__control">
                <label >Date</label>
                <input 
                    type="date" min="2019-01-01" max="2022-12-31" 
                    name='date'
                    value={date}
                    onChange={changeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm