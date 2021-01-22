import { Drawer, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import NavigationItem from '../components/Navigation/NavigationItem';
import Toolbar from '../components/Navigation/Toolbar';

const layoutStyle = makeStyles((theme) => ({
  main: {
    marginTop: 50,
  },
  sideDrawer: {
    '& .MuiDrawer-paper': {
      width: '50%',
      [theme.breakpoints.up('sm')]: {
        width: '25%',
      },
    },
  },
}));

const Layout = (props) => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);
  const classes = layoutStyle();

  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    props.history.push('/login');
  };

  const list = (
    <div>
      <NavigationItem onClick={handleLogout} icon="exit_to_app">
        Logout
      </NavigationItem>
    </div>
  );

  return (
    <>
      <Toolbar onLogout={handleLogout} drawerToggleClicked={sideDrawerToggleHandler} />
      <Drawer
        color="primary"
        className={classes.sideDrawer}
        open={sideDrawerIsVisible}
        onClose={sideDrawerToggleHandler}
      >
        {list}
      </Drawer>
      <main className={classes.main}>{props.children}</main>
    </>
  );
};

export default withRouter(Layout);
