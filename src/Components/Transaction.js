import React from "react";
import { Link } from "react-router-dom";
import "./Transaction.css"
export default function Transaction({ transaction, index }) {

  return (
    <div className="logItem">
      <Link className="item" to={`/transactions/${index}`}>Date:{transaction.date}{"  "} Item:{transaction.name}{" "}Amount:${transaction.amount}{" "}From:{transaction.from}</Link>
    </div>
  );
}