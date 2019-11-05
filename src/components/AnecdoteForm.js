import React, { useState } from 'react';
import { anecdoteCreation } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';
import { connect } from 'react-redux';

const addAnecdote = (event, input, props) => {
  event.preventDefault();

  props.anecdoteCreation(input);
  props.setNotification(input, 5000);
};

const updateInputState = (event, setInput) => {
  setInput(event.target.value);
}

const AnecdoteForm = (props) => {
  const [input, setInput] = useState('');
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={(event) => addAnecdote(event, input, props)}>
        <div>
          <input value={input} onChange={(event) => updateInputState(event, setInput)}/>
        </div>
        <button type='submit' value={input}>create</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  anecdoteCreation,
  setNotification
}

const mapStateToProps = (state) => {
  return {
    anecdote: state.anecdote
  };
}

const connectAnecdoteForm = connect(mapStateToProps, mapDispatchToProps)(AnecdoteForm);
export default connectAnecdoteForm;
