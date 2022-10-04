import React, { useState } from "react";
import { useSelector } from "react-redux";
import { setBudget } from "../../../../redux/slices/budgetSlice";
import { RootState, useAppDispatch } from "../../../../redux/store";
import classes from "./EditBudget.module.css";

type EditBudgetProps = {
  setIsVisible: (visible: boolean) => void;
};

const EditBudget: React.FC<EditBudgetProps> = ({ setIsVisible }) => {
  const { budget } = useSelector((state: RootState) => state.budget);

  const dispatch = useAppDispatch();
  const [value, setValue] = useState<number>(budget);

  return (
    <div className={classes.container}>
      <input
        type="number"
        placeholder="Введите бюджет"
        className={classes.input}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(parseInt(e.target.value))
        }
      />
      <button
        className={classes.btn}
        onClick={() => {
          dispatch(setBudget(value));
          setIsVisible(false);
        }}
      >
        Подтвердить
      </button>
    </div>
  );
};

export default EditBudget;
