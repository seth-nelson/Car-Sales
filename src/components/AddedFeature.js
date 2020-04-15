import React from 'react';


const AddedFeature = props => {

  const removeItem = feature => {
    props.removeFeature(feature);
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => removeItem(props.feature)} className="button">Remove</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
