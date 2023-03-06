import PropTypes from 'prop-types';
import React from 'react';
const Notification = ({ message }) => {
  return <p>{message}</p>;
};
export default Notification;
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};