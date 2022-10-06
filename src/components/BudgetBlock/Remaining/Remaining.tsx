import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import classes from "./Remaining.module.css";
const Remaining = () => {
  const { expenses, budget } = useSelector((state: RootState) => state.budget);

  const totalSum = expenses.reduce((sum, item) => {
    return (sum += item.cost);
  }, 0);

  return (
    <div className={classes.block}>
      <div className={classes.remaining}>
        <p className={classes.title}>Осталось:</p>
        <span
          className={classes.price}
          style={budget - totalSum < 0 ? { color: "red" } : { color: "black" }}
        >
          {budget - totalSum} ₽
        </span>
      </div>
    </div>
  );
};

export default Remaining;
