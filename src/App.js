import React from 'react';
import Anecdotes from './components/Anecdotes';
import AnecdoteForm from './components/AnecdoteForm';

const App = (props) => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Anecdotes 
        store={props.store}
      />
      <AnecdoteForm
        store={props.store}
      />
    </div>
  )
}

export default App;
