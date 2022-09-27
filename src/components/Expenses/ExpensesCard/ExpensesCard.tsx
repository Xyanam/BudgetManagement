import React from "react";
import { removeExpenses } from "../../../redux/slices/budgetSlice";
import { useAppDispatch } from "../../../redux/store";
import classes from "./ExpensesCard.module.css";

type ExpensesCardProps = {
  id: string;
  title: string;
  cost: number;
};

const ExpensesCard: React.FC<ExpensesCardProps> = ({ title, cost, id }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={classes.card}>
      <div className={classes.title}>
        <p>{title}</p>
      </div>
      <div className={classes.cost}>
        <p>{cost} ₽</p>
      </div>
      <button
        className={classes.delete}
        onClick={() => dispatch(removeExpenses(id))}
      >
        X
      </button>
    </div>
  );
};

export default ExpensesCard;
