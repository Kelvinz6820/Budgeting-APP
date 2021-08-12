import React from "react";
import { useState } from "react";
import { withRouter } from "react-router-dom";

function TransactionNewForm(props) {
  const [transaction, setTransaction] = useState({
    name: "",
    date: "",
    from: "",
    amount: "",
  });

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.id]: e.target.value });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTransaction(transaction);
    props.history.push("/transactions");
  };

  return (
    <div>
      <h1>New Transaction</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input id="date" type="text" required value={transaction.date} placeholder="Month Date" onChange={handleChange}/>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" required value={transaction.name} placeholder="Name" onChange={handleChange}/>
        <label htmlFor="from">From:</label>
        <input id="from" type="text" required value={transaction.from} placeholder="From" onChange={handleChange}/>
        <label htmlFor="amount">Amount:</label>
        <input id="amount" type="number" required value={transaction.amount} placeholder="Amount" onChange={handleChange}/>
        <input type="submit" className="btn"/>
      </form>
    </div>
  );
}

export default withRouter(TransactionNewForm);
