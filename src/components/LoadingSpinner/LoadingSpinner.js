import { Card } from '@material-ui/core';
import React from 'react';
import './LoadingSpinner.scss';

const loadingSpinner = (props) => (
  <Card classes={{ root: 'spinner-holder' }}>
    <h1>{props.text}</h1>
    <div className="spinner">Loading...</div>
  </Card>
);

export default loadingSpinner;
