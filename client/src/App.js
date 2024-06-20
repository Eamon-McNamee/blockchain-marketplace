import React, { useEffect, useState } from 'react';
import { fetchItems, addItem } from './services/apiService';
import ItemsList from './components/ItemsList';
import AddItemForm from './components/AddItemForm';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems()
      .then(response => setItems(response.data.items))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleAddItem = (newItem) => {
    addItem(newItem)
      .then(response => {
        setItems([...items, newItem]);
      })
      .catch(error => console.error('Error adding item:', error));
  };

  return (
    <div>
      <ItemsList items={items} />
      <AddItemForm onAddItem={handleAddItem} />
    </div>
  );
}

export default App;