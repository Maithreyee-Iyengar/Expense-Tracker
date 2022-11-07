import "./Expenses.css";
import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart  expenses = {filteredExpenses}/>
        <ExpensesList items = {filteredExpenses} />
      </Card>
    </li>
    
  )
  /* want to transform the expense object to this jsx element. */
  /* one more way to render the filter is  */
  /* {filteredExpenses.length === 0 && <p>No Expenses Found.</p>} */
  /* JAVASCRIPT RETURNS THE PART AFTER AND  IF THE FIRST CONDITION THAT IS ENTERED IS TRUE */
  /* {filteredExpenses.length > 0 &&  */
  /* // filteredExpenses.map((expense) => ( */
  /* //   <ExpenseItem */
  /* //     key={expense.id}
          //     title={expense.title}
          //     amount={expense.amount}
          //     date={expense.date}
          //   />
          // ))} */

  /* TERNARY SYNTAX */
  /* {filteredExpenses.length === 0 ? (
          <p>No Expenses Found.</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */

  /* <ExpenseItem                    Remove thehard coded expense item
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem> */
}
export default Expenses;
