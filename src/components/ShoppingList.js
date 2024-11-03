import React from 'react';
import Item from './Item';

function ShoppingList({ items }) {
  return (
    <ul className="Items">
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default ShoppingList;

