import "./App.css";
import BudgetBlock from "./components/BudgetBlock/BudgetBlock";
import ChartDiagram from "./components/Chart/ChartDiagram";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Менеджер бюджета</h1>
      <BudgetBlock />
      <Expenses />
      <NewExpenses />
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>Диаграмма расходов</h1>
      <div style={{ width: 320, height: 320, margin: "50px auto" }}>
        <ChartDiagram />
      </div>
    </div>
  );
}

export default App;
