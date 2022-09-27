import React, { useState } from "react";
import { setBudget } from "../../../../redux/slices/budgetSlice";
import { useAppDispatch } from "../../../../redux/store";
import classes from "./EditBudget.module.css";

type EditBudgetProps = {
  setIsVisible: (visible: boolean) => void;
};

const EditBudget: React.FC<EditBudgetProps> = ({ setIsVisible }) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<number>(0);

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
