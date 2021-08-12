import { withRouter } from "react-router-dom";
import { useState } from "react";
function UpdateTransaction(...props) {
    
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
      props[0].updateTransaction(transaction, props[0].match.params.index);
      props[0].history.push("/transactions");
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="date">Date:</label>
          <input id="date" type="text" required value={transaction.date} placeholder="Month Date" onChange={handleChange}/>
          <br></br>
          <label htmlFor="name">Spent Item:</label>
          <input id="name" type="text" required value={transaction.name} placeholder="Item" onChange={handleChange}/>
          <br></br>
          <label htmlFor="from">From:</label>
          <input id="from" type="text" required value={transaction.from} placeholder="From" onChange={handleChange}/>
          <br></br>
          <label htmlFor="amount">Amount:</label>
          <input id="amount" type="number" required value={transaction.amount} placeholder="Amount" onChange={handleChange}/>
          <br></br>
          <input type="submit" className="btn"/>
        </form>
      </div>
    );
  }
  
  export default withRouter(UpdateTransaction);
  