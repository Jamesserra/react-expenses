import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from './Card'

function ExpenseItems(props) {

  let title = props.title

  const clickHandler = () => {
    title = 'sss'
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItems;
