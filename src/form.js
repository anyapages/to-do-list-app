import React from 'react';

// user input - includes validation
function TodoForm({addTodo}){
  const [value,setValue] = React.useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="What should I do today?" style={{ color: 'crimson' }}
        onChange={e => setValue(e.target.value)} />
    </form>
  );
};

export default TodoForm;