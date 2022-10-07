import React, { useState } from "react";

import { removeExpenses } from "../../../redux/slices/budgetSlice";
import { useAppDispatch } from "../../../redux/store";
import NewSubExpenses from "../NewSubExpenses/NewSubExpenses";
import classes from "./ExpensesCard.module.css";

type ExpensesCardProps = {
  id: string;
  title: string;
  cost: number;
  subExpense: { id: string; title: string; cost: number }[];
};

const ExpensesCard: React.FC<ExpensesCardProps> = ({
  title,
  cost,
  id,
  subExpense,
}) => {
  const dispatch = useAppDispatch();

  const [isVisible, setIsVisible] = useState(false);
  const [activeArrow, setActiveArrow] = useState(false);
  return (
    <div>
      <div className={classes.card}>
        <div className={classes.title}>
          <p>{title}</p>
        </div>
        <div onClick={() => setIsVisible(!isVisible)}>
          <span className={classes.addSub}>Добавить подгруппу</span>
        </div>
        <div className={classes.cost}>
          <p>{cost} ₽</p>
        </div>
        <div
          className={!activeArrow ? classes.arrow : classes.arrowActive}
          onClick={() => setActiveArrow(!activeArrow)}
        >
          <svg
            width="22"
            height="22"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 129 129"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            enableBackground="new 0 0 129 129"
          >
            <g>
              <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" />
            </g>
          </svg>
        </div>
        <button
          className={classes.delete}
          onClick={() => dispatch(removeExpenses(id))}
        >
          X
        </button>
      </div>
      {isVisible && <NewSubExpenses id={id} />}
      {activeArrow &&
        subExpense.map((exp) => (
          <div key={exp.id} className={classes.subContainer}>
            <span className={classes.title}>{exp.title}</span>
            <span className={classes.cost}>{exp.cost} ₽</span>
          </div>
        ))}
    </div>
  );
};

export default ExpensesCard;
