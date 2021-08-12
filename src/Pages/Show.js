import { useState, useEffect } from "react";
import Transactions from "../Components/Transactions";

function Show({ transactions }) {
  let [funds, setFunds] = useState(2000)  
  useEffect(() => {
    let transactionArray = transactions
      .map((transaction) => Number(transaction.amount))
      .reduce((a, b) => a + b, 2000);
    setFunds(transactionArray);
  }, [transactions]);
  return (
    <div className="Show">
      <h2 className="transaction-title">Transaction Details</h2>
      <section> 
        <h2 className="balance">{`Account Balance: $${funds.toLocaleString("en-US")}`}</h2>
        <Transactions transactions={transactions}/> 
      </section>
    </div>
  );
}

export default Show;
