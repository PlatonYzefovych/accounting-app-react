import React, { useState } from 'react';
import './CostItem.css';
import CostDate from '../cost-date/CostDate';
import Card from '../card/Card';

function CostItem(props) {

    const [description, setDescription] = useState(props.description);

    const changeDescriptionHandler = () => {
        setDescription('New text')
    };

    return (
        <Card className='cost-item'>
            <div>
                <CostDate date={props.date} />
            </div>
            <div className='cost-item__description'>
                <h2>{description}</h2>
                <div className='cost-item__price'>{props.amount}zł</div>
            </div>
            <button onClick={changeDescriptionHandler}>Change description</button>
        </Card>
    )
};

export default CostItem;                    