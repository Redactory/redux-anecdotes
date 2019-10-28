import React from 'react';

const vote = (anecdote, store) => {
    const increment = {
        type: 'INCREMENT',
        id: anecdote.id
    };

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
