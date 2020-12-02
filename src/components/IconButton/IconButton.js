import { Icon, IconButton } from '@material-ui/core';
import React from 'react';
import './IconButton.scss';

const iconButton = (props) => (
  <IconButton onClick={props.onClick}>
    <Icon classes={{ root: 'icon' }}>{props.iconName}</Icon>
  </IconButton>
);

export default iconButton;
