import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
/* Drawer and Appbar need to be here global imports java the bad parts */
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {useStyles, theme} from './components/styles';
import LeftSidebar from './components/sidebar';
import Headline from './components/headline';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {Overview} from './components/overview';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
     {/*  <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '} */}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  const classes = useStyles();
  
   const [open, setOpen] = React.useState(false);
 
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div className={classes.root}>
          <CssBaseline />
          <Headline open={open} drawer_open={handleDrawerOpen}>
          </Headline>
          <LeftSidebar open={open} drawer_close={handleDrawerClose}>
          </LeftSidebar>
          <main role="main" className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
              <Switch>
                <Route exact path="/" component={Overview}/>
              </Switch>
            </Container>
            <Copyright></Copyright>
          </main>
        </div>
      </Router> 
    </MuiThemeProvider>
  );
}