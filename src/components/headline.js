import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import AddIcon from '@material-ui/icons/Add';

import { Link } from 'react-router-dom';

export default function Headline(props){

    return (
      <AppBar position="absolute" className={clsx(props.style.appBar, props.open && props.style.appBarShift)}>
        <Toolbar className={props.style.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={props.drawer_open}
            className={clsx(props.style.menuButton, props.open && props.style.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>       
          <Typography component="h1" variant="h6" color="inherit" noWrap className={props.style.title}>
            <Link to="/">Grown</Link>
          </Typography>
          
          <Link to="/devices">
            <IconButton color="inherit">         
                <AddIcon />
            </IconButton>
          </Link>
          <Link to="/notifications">
            <IconButton color="inherit">
              <Badge badgeContent={0} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Link>
          <Link to="/settings">
            <IconButton color="inherit">
                <SettingsIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    );
}
