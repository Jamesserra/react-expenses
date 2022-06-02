import { useState } from "react";
import ExpenseItems from "./ExpenseItem";
import './Expense.css';
import Card from './Card'
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {

  const [yearFilter, setYearFilter] = useState('2020')

  const yearChangeHandle = (year) => {
    setYearFilter(year)
  }

  return (
    <div>
      <ExpensesFilter selected={yearFilter} onYearSelect={yearChangeHandle}/>
      <Card className="expenses">
      {props.items.map((item) => {
        return (
          <ExpenseItems
            title={item.title}
            amount={item.amount}
            date={item.date}
            year={yearFilter}
          ></ExpenseItems>
          );
        })}
        </Card>
    </div>
  );
}

export default Expenses;
