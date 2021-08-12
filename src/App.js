import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
//PAGES
import { apiURL } from "./apiURL";
import Navbar from "./Pages/Navbar"
import Error from "./Pages/Error";
import Index from "./Pages/Index";
import New from "./Pages/New"
import Show from "./Pages/Show";

function App() {

  const API = apiURL();
  const [transactions, setTransactions] = useState([]);
  const getTransactions = async () => {
    await axios.get(`${API}/transactions`).then((res) => {
      const transactionData = res.data.payload;
      setTransactions(transactionData)
    })
  }
  //componentDidMount
  useEffect(()  => {
    getTransactions();
  }, []);

  const addTransaction = (newTransaction) => {
    axios
      .post(`${API}/transactions`, newTransaction)
      .then(
        (res) => {
          setTransactions([
            ...transactions,
            res.data.payload,
          ])
        }
      )
  };

  const deleteTransaction = (id) => {
    axios
      .delete(`${API}/transactions/${id}`)
      .then(
        (res) => {
          const currentTransactions = [...transactions];
          currentTransactions.splice(id, 1);
          setTransactions(currentTransactions);
        }
      );
  };

 
  return (
  <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <h1 className="title">Kelvin's Budget App</h1>

          <main>
            <Switch>
              <Route path="/transactions/new"><New addTransaction={addTransaction} /></Route>
              <Route path="/transactions/:index"><Index transactions={transactions} deleteTransaction={deleteTransaction}/></Route>
              <Route path="/transactions"><Show transactions={transactions} /></Route>
              <Route path="*"><Error /></Route>
            </Switch>
          </main>
        </div>
      </Router>
  </div>
);
}

export default App;
