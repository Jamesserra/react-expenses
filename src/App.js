import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const placeholderData = [
  {
    id: "e1",
    title: "TV2",
    amount: 200,
    date: new Date(2022, 3, 13),
  },
  {
    id: "e2",
    title: "Couch",
    amount: 100,
    date: new Date(2020, 4, 23),
  },
  {
    id: "e3",
    title: "Chair",
    amount: 15,
    date: new Date(2019, 5, 1),
  },
];


const App = () => {
  const[expenses, setExpenses] = useState(placeholderData);

  const addExpenseHandler = (expense) => {
    console.log(expense)
setExpenses([expense,...expenses])

    // setExpenses(prevExpenses => {
    //   return [expense, ...prevExpenses]
    // });
  }


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
