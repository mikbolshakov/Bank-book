import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "./asyncActions/customers";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCustomerAction = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomerAction = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div className={"app"}>
      <div style={{ fontSize: "2rem", margin: 20}}>Баланс: {cash} ETH</div>
      <div>
        <button onClick={() => addCash(Number(prompt()))}>
          Пополнить счет
        </button>
        <button onClick={() => getCash(Number(prompt()))}>
          Снять со счета
        </button>
        <button onClick={() => addCustomerAction(prompt())}>Добавить клиента</button>
        <button onClick={() => dispatch(fetchCustomers())}>
          Получить клиентов из базы
        </button>
      </div>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div className="clients" onClick={() => removeCustomerAction(customer)}>{customer.name}</div>
          ))}
        </div>
      ) : (
        <div style={{ fontSize: "2rem", margin: 20 }}>
          Клиенты отсутствуют!
        </div>
      )}
    </div>
  );
}

export default App;
