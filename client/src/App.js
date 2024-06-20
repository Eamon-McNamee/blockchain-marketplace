import React, { useEffect, useState } from 'react';
import { fetchItems } from './services/apiService';

function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems()
      .then(response => setItems(response.data.items))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Blockchain Marketplace</h1>
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
    </div>
  );
}

export default App;