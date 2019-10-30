import React from 'react';
import { connect } from 'react-redux';

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
  const style = styling(props.notification);
  
  return (
    <div style={style}>
      {props.notification}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const connectedNotification = connect(mapStateToProps)(Notification);
export default connectedNotification;
