import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map(el => {
    return (
      <button 
        type="button"
        onClick={() => {
          onLeaveFeedback(el);
        }}
        key={el}
      >
        {el}
      </button>
    );
  });
};

export default FeedbackOptions;
FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

