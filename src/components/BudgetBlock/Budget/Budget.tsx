import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import classes from "./Budget.module.css";
import EditBudget from "./EditBudget/EditBudget";
const Budget = () => {
  const { budget } = useSelector((state: RootState) => state.budget);

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={classes.block}>
      {!isVisible ? (
        <>
          <div className={classes.budget}>
            <p className={classes.title}>Бюджет:</p>
            <span className={classes.price}>{budget} ₽</span>
          </div>
          <div className={classes.btn}>
            <button className={classes.button} onClick={() => setIsVisible(true)}>
              Изменить
            </button>
          </div>
        </>
      ) : (
        <EditBudget setIsVisible={setIsVisible} />
      )}
    </div>
  );
};

export default Budget;
