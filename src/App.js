import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LeftSidebar from './components/sidebar';
import Headline from './components/headline';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {getSensorData} from './requests/grownSensor';
import Overview from './components/overview';
import Devices from './components/devices';
/* Style classes from main because else style can be broken by imports */
import {useStyles, theme, headlineStyles, drawerStyles} from './components/styles';

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
  const headlineClasses = headlineStyles();
  const drawerClasses = drawerStyles();
  const data_address = "http://192.168.2.51"
  getSensorData(data_address)
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
          <Headline open={open} drawer_open={handleDrawerOpen} style={headlineClasses}>
          </Headline>
          <LeftSidebar open={open} drawer_close={handleDrawerClose} style={drawerClasses}>
          </LeftSidebar>
          <main role="main" className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
              <Switch>
                <Route exact path="/" component={Overview}/>
                <Route exact path="/devices" component={Devices}/>
              </Switch>
            </Container>
            <Copyright></Copyright>
          </main>
        </div>
      </Router> 
    </MuiThemeProvider>
  );
}