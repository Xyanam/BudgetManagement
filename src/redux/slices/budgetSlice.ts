import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type subExpensesType = {
  idSubExpense: number;
  idExpense: string;
  title: string;
  cost: number;
};

type expensesType = {
  id: string;
  title: string;
  cost: number;
  subExpenses: subExpensesType[];
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
    setSubExpenses(state, action: PayloadAction<subExpensesType>) {
      const index = state.expenses.findIndex(
        (f) => f.id === action.payload.idExpense
      );
      state.expenses[index].subExpenses.push(action.payload);
    },
    removeSubExpenses(
      state,
      {
        payload,
      }: PayloadAction<{
        id: string;
        idSubExpense: number;
      }>
    ) {
      const index = state.expenses.findIndex((i) => i.id === payload.id);
      state.expenses[index].subExpenses = state.expenses[
        index
      ].subExpenses.filter(
        (subExp) => subExp.idSubExpense !== payload.idSubExpense
      );
    },
  },
});

export const {
  setBudget,
  setExpenses,
  removeExpenses,
  setSubExpenses,
  removeSubExpenses,
} = budgetSlice.actions;
export default budgetSlice.reducer;
