import React from 'react';
import Anecdote from './Anecdote';

const createAnecdotes = (props) => {
    const anecdotes = props.store.getState();
    return (
        anecdotes.map(anecdote =>
            <Anecdote 
                key={anecdote.id}
                store={props.store}
                anecdote={anecdote}
            />
        )
    );
}

const Anecdotes = (props) => {
    return (
        createAnecdotes(props)
    );
}

export default Anecdotes;
