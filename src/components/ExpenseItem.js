// ExpenseItem.js

import React from 'react';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <div className="expense-item">
        <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        {/* You can add more description elements as needed */}
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}

export default ExpenseItem;


