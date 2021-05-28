import React,{ useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [click,setClick] =useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseDate = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseDate);
    setClick(false);
  };

  const startEditingHandler = () => {
    setClick(true);
  };

  const endEditingHandler = (event) => {
      setClick(false);
  }

  return (
    <div className="new-expense">
      {click ? (
        <ExpenseForm onClick={endEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />
      ) : (
        <button onClick={startEditingHandler} type="submit">
          Add new expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
