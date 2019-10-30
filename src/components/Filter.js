import React from 'react';
import { updateSearchString } from '../reducers/filterReducer';

const Filter = (props) => {
    const handleChange = (event) => {      
      const searchString = event.target.value;
      const searchAction = updateSearchString(searchString);
      props.store.dispatch(searchAction);
    };

    const style = {
      marginBottom: 10
    };
  
    return (
      <div style={style}>
        filter <input onChange={handleChange} />
      </div>
    );
  };
  
  export default Filter;
