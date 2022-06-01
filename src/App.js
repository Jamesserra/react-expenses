import Expenses from "./components/Expense";

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
      date: new Date(2022, 4, 23),
    },
    {
      id: "e3",
      title: "Chair",
      amount: 15,
      date: new Date(2022, 5, 1),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
