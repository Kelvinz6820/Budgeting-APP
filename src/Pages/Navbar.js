import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
      <nav className="navbar">
        <div className="container">
            <button className="btn">
                <NavLink to="/transactions" className="link">Transactions</NavLink>
            </button>
            <button className="btn">
                <NavLink to="/transactions/new" className="link">New Transaction</NavLink>
            </button>
        </div>
      </nav>
    );
  }