import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const onChangeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    return new Date(expense.date).getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <div>
        <Card className="expenses">
          <ExpenseFilter
            selectedYear={filteredYear}
            onChangeFilter={onChangeFilterHandler}
          />
          <ExpenseChart expenses={filteredExpense} />
          <ExpensesList items={filteredExpense} />
        </Card>
      </div>
    </li>
  );
};

export default Expenses;
