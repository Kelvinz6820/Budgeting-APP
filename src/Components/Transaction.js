import React from "react";
import { Link } from "react-router-dom";

export default function Transaction({ transaction, index }) {

  return (
    <div className="logItem">
      <Link className="item" to={`/transactions/${index}`}>{transaction.date}{" "}{transaction.name} : ${transaction.amount} : {transaction.from}</Link>
    </div>
  );
}