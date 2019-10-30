import React from 'react';
import Anecdote from './Anecdote';

const createAnecdotes = (props) => {
    const anecdotes = props.store.getState().anecdote;
    const filterString = props.store.getState().filter.toLowerCase();
    return (
        anecdotes.map(anecdote => {
            if (anecdote.content.toLowerCase().includes(filterString)) {
                return <Anecdote 
                    key={anecdote.id}
                    store={props.store}
                    anecdote={anecdote}
                />
            }

            return;
        })
    );
}

const Anecdotes = (props) => {
    return (
        createAnecdotes(props)
    );
}

export default Anecdotes;
