import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import budget from "./slices/budgetSlice";

export const store = configureStore({
  reducer: {
    budget,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
