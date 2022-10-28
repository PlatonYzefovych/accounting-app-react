import React from "react";
import './index.css';
import CostItem from "./components/cost-item/CostItem";
import costs from './components/costs'

function App() {

  return (
    <div className="app">
      <div className='app-header'>
        <h1>Accounting App</h1>
      </div>

      <CostItem
        key={costs[0].id}
        date={costs[0].date}
        description={costs[0].description}
        amount={costs[0].amount}
      />

      <CostItem
        key={costs[1].id}
        date={costs[1].date}
        description={costs[1].description}
        amount={costs[1].amount}
      />

      <CostItem
        key={costs[2].id}
        date={costs[2].date}
        description={costs[2].description}
        amount={costs[2].amount}
      />

      <CostItem
        key={costs[3].id}
        date={costs[3].date}
        description={costs[3].description}
        amount={costs[3].amount}
      />

    </div>
  );
}

export default App;
