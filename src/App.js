import React from 'react';
import Anecdotes from './components/Anecdotes';
import AnecdoteAdding from './components/AnecdoteAdding';

const App = (props) => {
  const anecdotes = props.store.getState()

  return (
    <div>
      <h2>Anecdotes</h2>
      <Anecdotes 
        store={props.store}
        anecdotes={anecdotes}  
      />
      <h2>create new</h2>
      <AnecdoteAdding
        store={props.store}
      />
    </div>
  )
}

export default App;
