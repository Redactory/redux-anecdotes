import React from 'react';
import Anecdotes from './components/Anecdotes';

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
      <form>
        <div><input /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App;
