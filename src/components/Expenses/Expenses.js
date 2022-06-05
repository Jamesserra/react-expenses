import { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expense.css";
import Card from "./Card";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState("2020");

  const yearChangeHandle = (year) => {
    setYearFilter(year);
  };

  const filterYearArray = props.items.filter((year) => {
    return year.date.getFullYear().toString() === yearFilter;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={yearFilter} onYearSelect={yearChangeHandle} />
        <ExpensesChart expenses={filterYearArray}/>
        <ExpensesList items={filterYearArray} />
      </Card>
    </div>
  );
};

export default Expenses;
