import React from 'react';

import { connect } from 'react-redux';

import { buyItem, removeItem } from './actions/index.js';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


const App = (props) => {



  const buyItem = feature => {
    // dipsatch an action here to add an item
    props.addFeature(feature);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        {/* change state to props since it's now passed as data into app */}
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} buyItem={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
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