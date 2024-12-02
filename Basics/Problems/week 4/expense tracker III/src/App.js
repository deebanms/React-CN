import { useReducer } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [action.payload, ...state];
    case "DELETE_EXPENSE":
      return state.filter((expense) => expense.id !== action.payload.id);

    default:
      return [];
  }
}

function App() {
  // Remove the useState hook and replace it with useReducer hook
  // Implement the functionality to add and remove the transaction in reducer function
  //const [expenses, setExpenses] = useState([]);

  const [expenses, dispatch] = useReducer(reducer, []);

  const addExpense = (expense) => {
    dispatch({ type: "ADD_EXPENSE", payload: expense });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE_EXPENSE", payload: { id } });
  };

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm addExpense={addExpense} />
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} />
          <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
        </div>
      </div>
    </>
  );
}

export default App;
