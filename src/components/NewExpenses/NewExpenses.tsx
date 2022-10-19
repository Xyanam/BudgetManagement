import FormExpenses from "./FormExpenses/FormExpenses";
import classes from "./NewExpenses.module.css";
const NewExpenses = () => {
  return (
    <div className={classes.container}>
      <FormExpenses />
    </div>
  );
};

export default NewExpenses;
