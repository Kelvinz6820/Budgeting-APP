import { useState, useEffect } from "react";
import React from "react";
import { useParams, useHistory, withRouter } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../apiURL";
import {Link } from "react-router-dom";
import "./Index.css"
const API = apiURL();

function Index({deleteTransaction}) {
  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();
  let history = useHistory();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => {
        const { data } = response;
        setTransaction(data.payload);
      })
  }, [index, history]);

  return (
    <div>
      <h2>Date: {transaction.date}</h2>
      <h2>Item: {transaction.name}</h2>
      <h2>Amount: ${transaction.amount}</h2>
      <h2>From: {transaction.from}</h2>
      <button><Link type="button" className="detail" to="/transactions" onClick={() => deleteTransaction(index)}>Do you want to delete?</Link></button>
      <br></br>
      <br></br>
      <button><Link type="button" className="detail" to={`/transactions/update/${index}`} >Do you want to update?</Link></button>
    </div>
  );
}

export default withRouter(Index);