import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const placeholderData = [
  {
    id: "e1",
    title: "TV",
    amount: 200,
    date: new Date(2022, 3, 13),
  },
  {
    id: "e2",
    title: "Couch",
    amount: 300,
    date: new Date(2020, 4, 23),
  },
  {
    id: "e3",
    title: "Chair",
    amount: 15,
    date: new Date(2021, 5, 1),
  },
  {
    id: "e4",
    title: "Bed",
    amount: 250,
    date: new Date(2022, 1, 4),
  },
  {
    id: "e5",
    title: "Coffee Machine",
    amount: 35,
    date: new Date(2020, 5, 1),
  },
  {
    id: "e6",
    title: "Desk",
    amount: 100,
    date: new Date(2020, 1, 4),
  },
  {
    id: "e7",
    title: "Speakers",
    amount: 50,
    date: new Date(2021, 1, 4),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(placeholderData);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    // setExpenses(prevExpenses => {
    //   return [expense, ...prevExpenses]
    // });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
