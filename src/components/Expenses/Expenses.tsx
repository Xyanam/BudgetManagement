import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import classes from "./Expenses.module.css";
import ExpensesCard from "./ExpensesCard/ExpensesCard";
const Expenses = () => {
  const { expenses } = useSelector((state: RootState) => state.budget);

  return (
    <div className={classes.container}>
      <h1>Расходы</h1>
      <div>
        {expenses.length > 0 ? (
          expenses.map((expenses) => (
            <ExpensesCard
              key={expenses.id}
              title={expenses.title}
              cost={expenses.cost}
              id={expenses.id}
            />
          ))
        ) : (
          <h2
            style={{
              textAlign: "center",
              color: "gray",
            }}
          >
            Расходов нету!
          </h2>
        )}
      </div>
    </div>
  );
};

export default Expenses;
