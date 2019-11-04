const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
};

const sortAnecdotes = (state) => {
  state.sort((a, b) => {
    return b.votes - a.votes;
  });
};

export const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  
    switch (action.type) {
      case 'INCREMENT':
        for (let i=0; i<state.length; i++) {
          if (state[i].id === action.id) {
            const newState = [...state];
            const votedAnecdote = newState[i];
            votedAnecdote.votes = votedAnecdote.votes + 1;

            sortAnecdotes(newState);

            return newState;
          }
        }
        return state;
      case 'ADD':
        const newState = [...state];

        const newAnecdote = asObject(action.content);
        newState.push(newAnecdote);
        
        return newState;

      case 'INIT_ANECDOTES':
        return action.content;
        
      default: return state;
  }
}

export const anecdoteCreation = (input) => {
  return {
    type: 'ADD',
    content: input,
    notification: 'PRESENT'
  };
};

export const incrementVoteTally = (anecdoteId) => {
  return {
      type: 'INCREMENT',
      id: anecdoteId,
      notification: 'PRESENT'
  };
};

export const initAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    content: anecdotes
  }
}
