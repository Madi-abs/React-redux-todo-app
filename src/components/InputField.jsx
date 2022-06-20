import React from 'react';

const InputField = ({text, setText, addTodo}) => {
   return (
      <label className='add-todo'>
        <input onChange={(e) => setText(e.target.value)} value={text} className="add-input" placeholder='Add a todo...'/>
        <button onClick={addTodo} className="add-btn">Add ToDo</button>
      </label>
   );
};

export default InputField;