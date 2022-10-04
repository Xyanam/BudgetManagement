import React, { useRef, useState } from "react";
import { useAppDispatch } from "../../../redux/store";
import classes from "./FormExpenses.module.css";
import { setExpenses } from "../../../redux/slices/budgetSlice";
import nextId from "react-id-generator";

const FormExpenses = () => {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);

  const inputNameRef = useRef<HTMLInputElement>(null);

  const newExpense = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (title.length > 1 && price > 1) {
      let newExpense = {
        id: nextId(),
        title,
        cost: price,
      };
      dispatch(setExpenses(newExpense));
      setTitle("");
      setPrice(0);
      inputNameRef.current?.focus();
    } else {
      alert("Введите название и цену");
    }
  };

  return (
    <form className={classes.container}>
      <div className={classes.form}>
        <div className={classes.formItem}>
          <span>Название</span>
          <input
            placeholder="Введите название"
            type="text"
            value={title}
            ref={inputNameRef}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          />
        </div>
        <div className={classes.formItem}>
          <span>Цена</span>
          <input
            placeholder="Введите цену"
            type="number"
            value={price}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPrice(parseInt(e.target.value))
            }
          />
        </div>
      </div>
      <button type="submit" className={classes.btn} onClick={newExpense}>
        Добавить
      </button>
    </form>
  );
};

export default FormExpenses;
