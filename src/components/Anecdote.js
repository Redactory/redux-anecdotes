import React from 'react';
import { incrementVoteTally } from '../reducers/anecdoteReducer';
import { notificationCreation, emptyNotificationCreation } from '../reducers/notificationReducer';
import { connect } from 'react-redux';

const vote = (props) => {
    const anecdote = props.anecdote;

    props.incrementVoteTally(anecdote.id);
    props.notificationCreation(anecdote.content);
    setTimeout(() => props.emptyNotificationCreation(), 5000);
};

const Anecdote = (props) => {
    return (
        <div key={props.anecdote.id}>
            <div>
                {props.anecdote.content}
            </div>
            <div>
                has {props.votes}
                <button onClick={() => vote(props)}>vote</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    incrementVoteTally,
    notificationCreation,
    emptyNotificationCreation
}

const connectAnecdote = connect(null, mapDispatchToProps)(Anecdote);
export default connectAnecdote;
