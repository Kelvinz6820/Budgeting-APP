import TransactionNewForm from "../Components/TransactionNewForm";

function New({ addTransaction }) {
  return (
    <div className="New">
      <TransactionNewForm addTransaction={addTransaction} />
    </div>
  );
}

export default New;