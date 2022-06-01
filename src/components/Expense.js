import ExpenseItems from "./ExpenseItem";
import './Expense.css';
import Card from './Card'

function Expenses(props) {
  return (
    <div>
      {props.items.map((item) => {
        return (
        <Card className="expenses">
          <ExpenseItems
            title={item.title}
            amount={item.amount}
            date={item.date}
          ></ExpenseItems>
          </Card>
        );
      })}
    </div>
  );
}

export default Expenses;
