import './NewCost.css';
import CostForm from '../cost-form/CostForm';
import { useState } from 'react';

function NewCost(props) {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const saveCostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString(),
        };
        props.onAddCost(costData);
        setIsFormVisible(false);
    };

    const inputCostDataHandler = () => {
        setIsFormVisible(true)
    };

    const cancelCostHandler = () => {
        setIsFormVisible(false)
    };

    return (
        <div className='new-cost'>
            {!isFormVisible &&
                <button onClick={inputCostDataHandler}>
                    Create new cost
                </button>}

            {isFormVisible &&
                <CostForm
                    onSaveCostData={saveCostDataHandler}
                    onCancel={cancelCostHandler}
                />}
        </div>
    );
};

export default NewCost;