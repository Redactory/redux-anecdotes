import React, { useState } from 'react';
import { anecdoteCreation } from '../reducers/anecdoteReducer';
import { notificationCreation, emptyNotificationCreation } from '../reducers/notificationReducer';

const addAnecdote = (event, input, store) => {
  event.preventDefault();

  const action = anecdoteCreation(input);
  const presentation = notificationCreation(input);
  const empty = emptyNotificationCreation();

  store.dispatch(action);
  store.dispatch(presentation);
  setTimeout(() => store.dispatch(empty), 5000);
};

const updateInputState = (event, setInput) => {
  setInput(event.target.value);
}

const AnecdoteForm = (props) => {
  const [input, setInput] = useState('');
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={(event) => addAnecdote(event, input, props.store)}>
        <div>
          <input value={input} onChange={(event) => updateInputState(event, setInput)}/>
        </div>
        <button type='submit' value={input}>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm;
