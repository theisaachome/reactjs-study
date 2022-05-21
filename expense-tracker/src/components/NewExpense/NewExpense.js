import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm';
import "./NewExpense.css";

const NewExpense = ({onAddExpense}) => {
    const [isOpen,setIsOpen]=useState(false);

    const saveExpenseDataHandler =(enteredExpenseData)=>{
        const expenseData ={
            ...enteredExpenseData,
            id:Math.random().toString(),
        }
        onAddExpense(expenseData);
        setIsOpen(false);
    }
    const toggleForm = ()=>{
       setIsOpen(!isOpen);
    }
  return (
    <div className='new-expense'>
      {!isOpen&&(<button onClick={toggleForm}>Add New Expense</button>)}
      {isOpen &&(
        <ExpenseForm 
          onToggle={toggleForm} 
          onSaveExpenseData={saveExpenseDataHandler}/>)
      }
    </div>
  )
}

export default NewExpense