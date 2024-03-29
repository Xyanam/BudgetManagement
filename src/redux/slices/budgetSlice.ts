import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type subExpensesType = {
  idSubExpense: number;
  idExpense: number;
  title: string;
  cost: number;
};

type expensesType = {
  id: number;
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
    removeExpenses(state, action: PayloadAction<number>) {
      state.expenses = state.expenses.filter((expense) => expense.id !== action.payload);
      let filteredExpenses = state.expenses.filter((expense) => expense.id !== action.payload);
      localStorage.setItem("expenses", JSON.stringify(filteredExpenses));
    },
    onChangeTitle(
      state,
      {
        payload,
      }: PayloadAction<{
        id: number;
        title: string;
      }>
    ) {
      const index = state.expenses.findIndex((idx) => idx.id === payload.id);
      state.expenses[index].title = payload.title;
      localStorage.setItem("expenses", JSON.stringify(state.expenses));
    },
    setSubExpenses(state, action: PayloadAction<subExpensesType>) {
      const index = state.expenses.findIndex((f) => f.id === action.payload.idExpense);
      state.expenses[index].subExpenses.push(action.payload);
    },
    removeSubExpenses(
      state,
      {
        payload,
      }: PayloadAction<{
        id: number;
        idSubExpense: number;
      }>
    ) {
      const index = state.expenses.findIndex((i) => i.id === payload.id);
      state.expenses[index].subExpenses = state.expenses[index].subExpenses.filter(
        (subExp) => subExp.idSubExpense !== payload.idSubExpense
      );
    },
  },
});

export const { setBudget, setExpenses, removeExpenses, setSubExpenses, removeSubExpenses, onChangeTitle } =
  budgetSlice.actions;
export default budgetSlice.reducer;
