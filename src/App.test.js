import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

test('Todo', () => {  

  const root = document.createElement('div');
  ReactDOM.render(<App/>, root);

  expect(root.querySelector('h1').textContent).toBe('To-Do List');

});