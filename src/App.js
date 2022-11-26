import './index.css';
import React from "react";
import Costs from './components/costs/Costs';
import NewCost from './components/new-cost/NewCost';

function App(props) {

  const addCostHandler = (cost) => {
    console.log(cost);
    console.log('app');
  };

  return (
    <div className="app">
      <div className="app-header">
        <h1>Accounting app (beta)</h1>
      </div>
      <div>
        <NewCost onAddCost={addCostHandler} />
      </div>
      <div>
        <Costs />
      </div>
    </div>
  );
};

export default App;
