import React from 'react';

const ItemsList = ({ items }) => {
  return (
    <div>
      <h1>Items</h1>
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong>: ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;