import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
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

  const addExpenseHandler = (expense) => {
    console.log('tet')
    console.log(expense)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
