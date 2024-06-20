import React, { useState } from 'react';

const AddItemForm = ({ onAddItem }) => {
  const [newItem, setNewItem] = useState({ name: '', price: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onAddItem({ ...newItem, price: parseFloat(newItem.price) });
    setNewItem({ name: '', price: '' });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="name"
        value={newItem.name}
        onChange={handleInputChange}
        placeholder="Item Name"
      />
      <input
        type="number"
        name="price"
        value={newItem.price}
        onChange={handleInputChange}
        placeholder="Item Price"
      />
      <br />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;