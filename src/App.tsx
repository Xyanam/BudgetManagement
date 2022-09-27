import "./App.css";
import BudgetBlock from "./components/BudgetBlock/BudgetBlock";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Менеджер бюджета</h1>
      <BudgetBlock />
      <Expenses />
      <NewExpenses />
    </div>
  );
}

export default App;
