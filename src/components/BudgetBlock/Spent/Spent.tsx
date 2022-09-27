import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import classes from "./Spent.module.css";
const Spent: React.FC = () => {
  const { expenses } = useSelector((state: RootState) => state.budget);

  const totalSum = expenses.reduce((sum, item) => {
    return (sum += item.cost);
  }, 0);

  return (
    <div className={classes.block}>
      <div className={classes.spent}>
        <p className={classes.title}> Потрачено:</p>
        <span className={classes.price}>{totalSum} ₽</span>
      </div>
    </div>
  );
};

export default Spent;
