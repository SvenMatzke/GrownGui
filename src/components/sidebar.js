import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';


export default function LeftSidebar(props){
    
    return (
    <Drawer
        variant="permanent"
        classes={{
          paper: clsx(props.style.drawerPaper, !props.open && props.style.drawerPaperClose),
        }}
        open={props.open}
      >
        <div className={props.style.toolbarIcon}>
          <IconButton onClick={props.drawer_close}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
            <div>
                <ListItem button>
                    <ListItemIcon>
                        <LocalFloristIcon />
                    </ListItemIcon>
                    <ListItemText primary="test1" />
                </ListItem>
            </div>
        </List>
        <Divider />
        <List>            
            <div>
                <ListItem button>
                <ListItemIcon>
                        <LocalFloristIcon />
                    </ListItemIcon>
                    <ListItemText primary="test1" />
                </ListItem>
            </div>
        
        </List>
      </Drawer>
    )
}