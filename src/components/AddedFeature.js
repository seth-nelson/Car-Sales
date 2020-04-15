import React from 'react';
//add actions to import
import { connect } from 'react-redux';
import { removeItem } from '../actions/index.js';

const AddedFeature = props => {

  const removeItem = feature => {
    //dispatch an action here to add an item
    props.removeItem(feature);
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => removeItem(props.feature)} className="button">Remove</button>
      {props.feature.name}
    </li>
  );
};

export default connect ('', { removeItem })(AddedFeature);
console.log('removeItem display', removeItem)
