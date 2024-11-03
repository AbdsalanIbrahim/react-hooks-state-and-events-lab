import React from 'react';

function Item({ name, category }) {
  return (
    <li className="Item">
      <span className="Item-name">{name}</span>
      <span className="Item-category">{category}</span>
    </li>
  );
}

export default Item;

