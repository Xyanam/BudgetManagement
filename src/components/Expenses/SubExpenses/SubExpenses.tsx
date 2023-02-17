import { removeSubExpenses } from "../../../redux/slices/budgetSlice";
import { useAppDispatch } from "../../../redux/store";
import classes from "./SubExpenses.module.css";

type subExpensesProps = {
  subExpense: {
    idSubExpense: number;
    idExpense: number;
    title: string;
    cost: number;
  }[];
  id: number;
};
const SubExpenses: React.FC<subExpensesProps> = ({ subExpense, id }) => {
  const dispatch = useAppDispatch();
  return (
    <>
      {subExpense.map((exp) => (
        <div key={exp.idSubExpense} className={classes.subContainer}>
          <span className={classes.title}>{exp.title}</span>
          <span className={classes.cost}>{exp.cost} ₽</span>
          <button
            className={classes.delete}
            onClick={() => {
              dispatch(
                removeSubExpenses({
                  id,
                  idSubExpense: exp.idSubExpense,
                })
              );
            }}>
            X
          </button>
        </div>
      ))}
    </>
  );
};

export default SubExpenses;
