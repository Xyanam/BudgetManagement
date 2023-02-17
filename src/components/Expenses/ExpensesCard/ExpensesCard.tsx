import React, { SyntheticEvent, useState } from "react";
import { onChangeTitle, removeExpenses } from "../../../redux/slices/budgetSlice";
import { useAppDispatch } from "../../../redux/store";
import { CSSTransition } from "react-transition-group";
import NewSubExpenses from "../NewSubExpenses/NewSubExpenses";
import SubExpenses from "../SubExpenses/SubExpenses";
import classes from "./ExpensesCard.module.css";

type ExpensesCardProps = {
  id: number;
  title: string;
  cost: number;
  subExpense: {
    idSubExpense: number;
    idExpense: number;
    title: string;
    cost: number;
  }[];
};

const ExpensesCard: React.FC<ExpensesCardProps> = ({ title, cost, id, subExpense }) => {
  const dispatch = useAppDispatch();

  const [isVisible, setIsVisible] = useState(false);
  const [activeArrow, setActiveArrow] = useState(false);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [inputTitle, setInputTitle] = useState("");

  const changeTitle = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(
      onChangeTitle({
        id,
        title: inputTitle,
      })
    );
    setIsTitleVisible(false);
  };

  return (
    <div>
      <div className={classes.card}>
        <div className={classes.mainCard}>
          <div className={classes.title}>
            {!isTitleVisible ? (
              <>
                <p>{title}</p>
                <svg
                  onClick={() => setIsTitleVisible(true)}
                  className={classes.editIcon}
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 330 330"
                  xmlSpace="preserve">
                  <g id="XMLID_23_">
                    <path
                      id="XMLID_24_"
                      d="M75,180v60c0,8.284,6.716,15,15,15h60c3.978,0,7.793-1.581,10.606-4.394l164.999-165
		c5.858-5.858,5.858-15.355,0-21.213l-60-60C262.794,1.581,258.978,0,255,0s-7.794,1.581-10.606,4.394l-165,165
		C76.58,172.206,75,176.022,75,180z M105,186.213L255,36.213L293.787,75l-150,150H105V186.213z"
                    />
                    <path
                      d="M315,150.001c-8.284,0-15,6.716-15,15V300H30V30H165c8.284,0,15-6.716,15-15s-6.716-15-15-15H15
		C6.716,0,0,6.716,0,15v300c0,8.284,6.716,15,15,15h300c8.284,0,15-6.716,15-15V165.001C330,156.716,323.284,150.001,315,150.001z"
                    />
                  </g>
                </svg>
              </>
            ) : (
              <form>
                <input
                  className={classes.inputTitle}
                  type="text"
                  value={inputTitle}
                  onChange={(e) => setInputTitle(e.target.value)}
                  maxLength={16}
                />
                <button className={classes.btn} onClick={changeTitle}>
                  Изменить
                </button>
              </form>
            )}
          </div>
          <div onClick={() => setIsVisible(!isVisible)}>
            <span className={classes.addSub}>
              Добавить
              <br /> подгруппу
            </span>
          </div>
          <div className={classes.cost}>
            <p>{cost} ₽</p>
          </div>
          <div
            className={!activeArrow ? classes.arrow : classes.arrowActive}
            onClick={() => setActiveArrow(!activeArrow)}>
            <svg
              width="22"
              height="22"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 129 129"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              enableBackground="new 0 0 129 129">
              <g>
                <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" />
              </g>
            </svg>
          </div>
          <button className={classes.delete} onClick={() => dispatch(removeExpenses(id))}>
            X
          </button>
        </div>
        <CSSTransition in={activeArrow} timeout={300} classNames="alert" unmountOnExit>
          <div>{activeArrow && <SubExpenses subExpense={subExpense} id={id} />}</div>
        </CSSTransition>
      </div>
      {isVisible && <NewSubExpenses id={id} setActiveArrow={setActiveArrow} />}
    </div>
  );
};

export default ExpensesCard;
