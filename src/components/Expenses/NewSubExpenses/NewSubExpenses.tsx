import React, { useState } from "react";
import { setSubExpenses } from "../../../redux/slices/budgetSlice";
import { useAppDispatch } from "../../../redux/store";
import classes from "./NewSubExpenses.module.css";

type newSubExpensesProps = {
  id: string;
};

const NewSubExpenses: React.FC<newSubExpensesProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [cost, setCost] = useState<number>(0);
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
        <button
          className={classes.btn}
          onClick={() => {
            let subExpense = {
              id: id,
              title: title,
              cost: cost,
            };
            dispatch(setSubExpenses(subExpense));
            setTitle("");
            setCost(0);
          }}
        >
          Добавить
        </button>
      </div>
    </div>
  );
};

export default NewSubExpenses;
