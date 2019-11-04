import React, { useState } from 'react';
import { anecdoteCreation } from '../reducers/anecdoteReducer';
import { notificationCreation, emptyNotificationCreation } from '../reducers/notificationReducer';
import { connect } from 'react-redux';
import anecdoteService from '../services/anecdotes';

const addAnecdote = (event, input, props) => {
  event.preventDefault();

  const max = 1000000000;
  const id = Math.floor(Math.random() * max) + '';
  
  const anecdote = {
    content: input,
    id: id,
    votes: 0
  }

  props.anecdoteCreation(input);
  props.notificationCreation(input);
  setTimeout(() => props.emptyNotificationCreation(), 5000);

  anecdoteService.addAnecdote(anecdote);
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
  notificationCreation,
  emptyNotificationCreation
}

const mapStateToProps = (state) => {
  return {
    anecdote: state.anecdote
  };
}

const connectAnecdoteForm = connect(mapStateToProps, mapDispatchToProps)(AnecdoteForm);
export default connectAnecdoteForm;
