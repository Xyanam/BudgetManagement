import React from "react";
import FormExpenses from "./FormExpenses/FormExpenses";
import classes from "./NewExpenses.module.css";
const NewExpenses = () => {
  return (
    <div className={classes.container}>
      <h1 style={{ textAlign: "center" }}>Новый расход</h1>
      <FormExpenses />
    </div>
  );
};

export default NewExpenses;
