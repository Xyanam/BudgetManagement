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

const initialState: budgetSliceState = {
  expenses: [],
  budget: 5000,
};

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    setBudget(state, action: PayloadAction<number>) {
      state.budget = action.payload;
    },
    setExpenses(state, action: PayloadAction<expensesType>) {
      state.expenses.push(action.payload);
    },
    removeExpenses(state, action: PayloadAction<string>) {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
    },
  },
});

export const { setBudget, setExpenses, removeExpenses } = budgetSlice.actions;
export default budgetSlice.reducer;
