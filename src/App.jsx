import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash);

  const addCash = () => {
    dispatch({ type: "ADD_CASH", payload: 5 });
  };

  const getCash = () => {
    dispatch({ type: "GET_CASH", payload: 5 });
  };

  return (
    <div className={"App"}>
      <div style={{ fontSize: "3rem" }}>{cash}</div>
      <div style={{ display: "flex" }}>
        <button className="buttons" onClick={() => addCash}>Пополнить счет</button>
        <button className="buttons" onClick={() => getCash}>Снять со счета</button>
      </div>
    </div>
  );
}

export default App;