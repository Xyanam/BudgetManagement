import "./App.css";
import BudgetBlock from "./components/BudgetBlock/BudgetBlock";
import ChartDiagram from "./components/Chart/ChartDiagram";
import Expenses from "./components/Expenses/Expenses";
import Modal from "./components/Modal/Modal";
import FormExpenses from "./components/FormExpenses/FormExpenses";
import { useState } from "react";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Менеджер бюджета</h1>
      <BudgetBlock />
      <Expenses />
      <div className="container">
        <Modal isVisible={isModalVisible} setIsVisible={setIsModalVisible}>
          <FormExpenses setIsVisible={setIsModalVisible} />
        </Modal>
        <button className="btnNewExpense" onClick={() => setIsModalVisible(true)}>
          Создать новый расход
        </button>
      </div>

      <h1 style={{ textAlign: "center", marginTop: "40px" }}>Диаграмма расходов</h1>
      <div style={{ width: 320, height: 320, margin: "50px auto" }}>
        <ChartDiagram />
      </div>
    </div>
  );
}

export default App;
