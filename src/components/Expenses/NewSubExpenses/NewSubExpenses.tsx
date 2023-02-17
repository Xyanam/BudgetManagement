import React, { useState } from "react";
import { setSubExpenses } from "../../../redux/slices/budgetSlice";
import { useAppDispatch } from "../../../redux/store";
import classes from "./NewSubExpenses.module.css";

type newSubExpensesProps = {
  id: number;
  setActiveArrow: (arrow: boolean) => void;
};

const NewSubExpenses: React.FC<newSubExpensesProps> = ({ id, setActiveArrow }) => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [cost, setCost] = useState<number>(0);

  const newSubExpense = () => {
    let subExpense = {
      idSubExpense: Date.now(),
      idExpense: id,
      title: title,
      cost: cost,
    };
    dispatch(setSubExpenses(subExpense));
    setActiveArrow(true);
    setTitle("");
    setCost(0);
  };

  return (
    <div className={classes.container}>
      <div className={classes.input_blocks}>
        <input
          className={classes.input}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Введите название"
        />
        <input
          className={classes.input}
          type="number"
          value={cost}
          onChange={(e) => setCost(+e.target.value)}
          placeholder="Введите цену"
        />
      </div>
      <div>
        <button className={classes.btn} onClick={newSubExpense}>
          Добавить
        </button>
      </div>
    </div>
  );
};

export default NewSubExpenses;
