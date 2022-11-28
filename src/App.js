import './index.css';
import React, { useState } from "react";
import Costs from './components/costs/Costs';
import NewCost from './components/new-cost/NewCost';
import costsList from './components/costs-list/costs-list';

function App(props) {

  const [costs, setCosts] = useState(costsList);

  const addCostHandler = (cost) => {
    if (cost.description.length === 0 || cost.amount.length === 0 || cost.date == 'Invalid Date') {
      alert('There is no data entered, or you forgot to enter something')
    } else {
      setCosts(previousCosts => {
        return [cost, ...previousCosts]
      });
    };
  };

  return (
    <div className="app">
      <div className="app-header">
        <h1>Accounting app</h1>
      </div>
      <div>
        <NewCost onAddCost={addCostHandler} />
      </div>
      <div>
        <Costs costs={costs} />
      </div>
    </div>
  );
};

export default App;
