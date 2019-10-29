import React, { useState } from 'react';
import { anecdoteCreation } from '../reducers/anecdoteReducer';

const addAnecdote = (event, input, store) => {
  event.preventDefault();

  const action = anecdoteCreation(input);

  store.dispatch(action);
};

const updateInputState = (event, setInput) => {
  setInput(event.target.value);
}

const AnecdoteAdding = (props) => {
  const [input, setInput] = useState('');
  return (
    <form onSubmit={(event) => addAnecdote(event, input, props.store)}>
      <div>
        <input value={input} onChange={(event) => updateInputState(event, setInput)}/>
      </div>
      <button type='submit' value={input}>create</button>
    </form>
  )
}

export default AnecdoteAdding;
