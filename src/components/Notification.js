import React from 'react';

const styling = (notification) => {
  if (notification.length > 0) {
    return {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }
  }

  return {
    display: 'none'
  };
}

const Notification = (props) => {
  const style = styling(props.store.getState().notification);
  
  return (
    <div style={style}>
      {props.store.getState().notification}
    </div>
  )
}

export default Notification