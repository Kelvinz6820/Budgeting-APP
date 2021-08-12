import { useState, useEffect } from "react";
import React from "react";
import { useParams, useHistory, withRouter } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../apiURL";

const API = apiURL();

function Index() {
  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();
  let history = useHistory();

  useEffect(() => {
    console.log(index)
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => {
        console.log(response)
        const { data } = response;
        setTransaction(data.payload);
      })
      .catch((e) => {
        history.push("/page-not-found");
      });
  }, [index, history]);

  return (
    <div>
      <h2>{transaction.date}</h2>
      <h3>{transaction.name}</h3>
      <h3>{transaction.amount}</h3>
      <h3>{transaction.from}</h3>
    </div>
  );
}

export default withRouter(Index);