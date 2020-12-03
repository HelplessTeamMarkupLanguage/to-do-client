import { Card } from '@material-ui/core';
import React from 'react';
import './NoDataFound.scss';

const noDataFound = (props) => (
  <Card classes={{ root: 'no-data-found' }}>
    <h4>You have nothing todo</h4>
  </Card>
);

export default noDataFound;
