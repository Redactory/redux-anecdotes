import React from 'react';
import { incrementVoteTally } from '../reducers/anecdoteReducer';
import { notificationCreation, emptyNotificationCreation } from '../reducers/notificationReducer';

const vote = (anecdote, store) => {
    const increment = incrementVoteTally(anecdote.id);
    const presentation = notificationCreation(anecdote.content);
    const empty = emptyNotificationCreation();

    store.dispatch(increment);
    store.dispatch(presentation);
    setTimeout(() => store.dispatch(empty), 5000);
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
