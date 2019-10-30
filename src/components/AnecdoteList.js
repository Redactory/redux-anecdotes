import React from 'react';
import Anecdote from './Anecdote';
import { connect } from 'react-redux';

const AnecdoteList = (props) => {
    const anecdotes = props.anecdote;
    const filterString = props.filter.toLowerCase();
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

const mapStateToProps = (state) => {
    return {
      anecdote: state.anecdote,
      filter: state.filter
    };
}

const connectedAnecdoteList = connect(mapStateToProps)(AnecdoteList);
export default connectedAnecdoteList;
