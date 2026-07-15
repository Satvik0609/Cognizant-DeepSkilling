import React, { useState } from "react";
import "./App.css";

function App() {

  // Counter State
  const [count, setCount] = useState(0);

  // Currency States
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  // Increment Counter
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement Counter
  const decrement = () => {
    setCount(count - 1);
  };

  // Static Hello Message
  const sayHello = () => {
    alert("Hello! React Event Handling");
  };

  // Increment Button calls Multiple Methods
  const handleIncrement = () => {
    increment();
    sayHello();
  };

  // Welcome Button
  const sayWelcome = (message) => {
    alert(message);
  };

  // Synthetic Event
  const handleClick = () => {
    alert("I was clicked");
  };

  // Currency Conversion
  const handleSubmit = (event) => {

    event.preventDefault();

    if (amount === "") {
      alert("Enter Amount");
      return;
    }

    const euro = (parseFloat(amount) / 90).toFixed(2);

    setCurrency(euro);

    alert("Converting INR to Euro");

  };

  return (

    <div className="container">

      <h2>{count}</h2>

      <button onClick={handleIncrement}>
        Increment
      </button>

      <br /><br />

      <button onClick={decrement}>
        Decrement
      </button>

      <br /><br />

      <button onClick={() => sayWelcome("Welcome")}>
        Say Welcome
      </button>

      <br /><br />

      <button onClick={handleClick}>
        Click on me
      </button>

      <br /><br /><br />

      <h1>Currency Convertor!!!</h1>

      <form onSubmit={handleSubmit}>

        <table>

          <tbody>

            <tr>

              <td>Amount</td>

              <td>

                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />

              </td>

            </tr>

            <tr>

              <td>Currency</td>

              <td>

                <input
                  type="text"
                  value={currency}
                  readOnly
                />

              </td>

            </tr>

            <tr>

              <td></td>

              <td>

                <button type="submit">
                  Submit
                </button>

              </td>

            </tr>

          </tbody>

        </table>

      </form>

    </div>

  );

}

export default App;