import React from "react";
import classes from "./BudgetBlock.module.css";
import Budget from "./Budget/Budget";
import Remaining from "./Remaining/Remaining";
import Spent from "./Spent/Spent";

const BudgetBlock: React.FC = () => {
  return (
    <div className={classes.container}>
      <Budget />
      <Remaining />
      <Spent />
    </div>
  );
};

export default BudgetBlock;
