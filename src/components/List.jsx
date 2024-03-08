
import React, { useState } from 'react';
const styling ={
    color:'orange'
}


const List = () => {
  const [items, setItems] = useState(['hafsa', 'hania', 'ali']);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    setItems([...items, newItem]);
    setNewItem('');
  };

  return (
    <div>
      <h2>My List</h2>
      <ul>
        {items.map((item, index,) => (
          <li key={index} style={styling}>{item}</li>
        ))}
      </ul>
      <div>
        
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
       
        <button onClick={addItem}>Add Names</button>
      </div>
    </div>
  );
};

export default List;
