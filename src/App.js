import React from 'react';

import { connect } from 'react-redux';

import { buyItem, removeItem } from './actions/index.js';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


const App = () => {

  
  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};


const mapStateToProps = state => {
  console.log(state);
  return {
    additionalPriceOnProps: state.additionalPrice,
    carDataOnProps: state.car,
    additionalFeaturesOnProps: state.additionalFeatures
  };
};


export default connect(
  mapStateToProps,
  { buyItem, removeItem }
)(App);
console.log('App disp. with features', buyItem, removeItem);