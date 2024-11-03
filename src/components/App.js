import React from 'react';
import Item from './components/Item';

const items = [
  { name: 'Milk', category: 'Dairy' },
  { name: 'Bread', category: 'Bakery' },
  { name: 'Eggs', category: 'Dairy' },
];

function App() {
  return (
    <div className="App">
      <h1>Shopping List</h1>
      <ul className="Items">
        {items.map((item, index) => (
          <Item key={index} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default App;

