import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type expensesType = {
  id: string;
  title: string;
  cost: number;
};

interface budgetSliceState {
  expenses: expensesType[];
  budget: number;
}

const expenseJson = localStorage.getItem("expenses");
let items: expensesType[] = expenseJson !== null ? JSON.parse(expenseJson) : [];
const budgetJson = localStorage.getItem("budget");
let budgetItem = budgetJson !== null ? +budgetJson : 0;

const initialState: budgetSliceState = {
  expenses: items,
  budget: budgetItem,
};

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    setBudget(state, action: PayloadAction<number>) {
      state.budget = action.payload;
      localStorage.setItem("budget", JSON.stringify(state.budget));
    },
    setExpenses(state, action: PayloadAction<expensesType>) {
      state.expenses.push(action.payload);

      localStorage.setItem("expenses", JSON.stringify(state.expenses));
    },
    removeExpenses(state, action: PayloadAction<string>) {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
      let filteredExpenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
      localStorage.setItem("expenses", JSON.stringify(filteredExpenses));
    },
  },
});

export const { setBudget, setExpenses, removeExpenses } = budgetSlice.actions;
export default budgetSlice.reducer;
