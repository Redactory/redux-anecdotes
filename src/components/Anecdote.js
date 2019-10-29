import React from 'react';
import { incrementVoteTally } from '../reducers/anecdoteReducer';

const vote = (anecdote, store) => {
    const increment = incrementVoteTally(anecdote.id);

    store.dispatch(increment);
};

 const Anecdote = (props) => {
    return (
        <div key={props.anecdote.id}>
            <div>
                {props.anecdote.content}
            </div>
            <div>
                has {props.anecdote.votes}
                <button onClick={() => vote(props.anecdote, props.store)}>vote</button>
            </div>
        </div>
    )
}

export default Anecdote;
