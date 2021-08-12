import TransactionNewForm from "../Components/TransactionNewForm";

function New({ addTransaction }) {
  return (
    <div className="New">
      <h2 className="new-title">New Transaction</h2>
      <TransactionNewForm addTransaction={addTransaction} />
    </div>
  );
}

export default New;