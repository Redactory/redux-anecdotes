import React from 'react';
import { updateSearchString } from '../reducers/filterReducer';
import { connect } from 'react-redux';

const Filter = (props) => {
    const handleChange = (event) => {      
      const searchString = event.target.value;
      props.updateSearchString(searchString);
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
  
  const mapDispatchToProps = {
    updateSearchString
  };

  const connectedFilter = connect(null, mapDispatchToProps)(Filter);
  export default connectedFilter;
