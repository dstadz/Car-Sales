import React, {useState, useReducer} from 'react';
import {reducer, initialState} from '../reducers'





const addFeature = index => {
  console.log('addFeature')
  return {type:'BUY_ITEM', payload:index}
}





const AdditionalFeature = props => {
  const index=props.feature.id
  console.log(index)

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state.additionalFeatures)
  console.log(state.additionalFeatures[index])
  console.log(state.additionalFeatures[index])

  const add = () => {
    
    console.log (`clicked`, index)
    dispatch(addFeature(index))
     return {type: 'BUY_ITEM', payload:index}
  }


  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={add}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
