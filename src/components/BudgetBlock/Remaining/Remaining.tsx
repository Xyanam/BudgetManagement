import React from "react";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import classes from "./Remaining.module.css";
const Remaining: FC = () => {
  const { expenses, budget } = useSelector((state: RootState) => state.budget);

  const totalSum = expenses.reduce((sum, item) => (sum += item.cost), 0);

  return (
    <div className={classes.block}>
      <div className={classes.remaining}>
        <p className={classes.title}>Осталось:</p>
        <span className={classes.price} style={budget - totalSum < 0 ? { color: "red" } : { color: "black" }}>
          {budget - totalSum} ₽
        </span>
      </div>
    </div>
  );
};

export default React.memo(Remaining);
