import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React,{ useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({expenses}) => {
  const [filteredYear,setFilteredYear]= useState("2020");

  const filterByYearHandler=(selectedYear)=>{
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = expenses.filter((exp)=>exp.date.getFullYear().toString() === filteredYear);
  
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilterByYear={filterByYearHandler}/>
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items ={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
