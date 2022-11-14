import './NewCost.css';
import React from 'react';
import CostForm from './CostForm';

export const NewCost = (props) => {

  const SaveCostDataHandler = (inputCostData) => {

    const costData = {
      ...inputCostData,
      id: Math.random().toString()
    }
    props.onAddCost(costData);
  };

  return (
    <div className='new-cost'>
      <CostForm onSaveCostData={SaveCostDataHandler} />
    </div>
  );
};

export default NewCost;
