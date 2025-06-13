import * as React from 'react';
import {Box,Drawer,List,Divider,ListItem,ListItemButton,ListItemIcon,ListItemText,AppBar,Toolbar,Typography,IconButton,Badge} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DevicesIcon from '@mui/icons-material/Devices';
import { Link } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function Header() {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <Link to="/overview" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem key={'Overview'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Overview" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <List>
        <Link to="/assetinventory" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem key={'AssetInventory'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DevicesIcon />
              </ListItemIcon>
              <ListItemText primary="Asset Inventory" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <List>
        <Link to="/security" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem key={'Security'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DevicesIcon />
              </ListItemIcon>
              <ListItemText primary="Security" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link to="/integration" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem key={'Integration'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <IntegrationInstructionsIcon />
              </ListItemIcon>
              <ListItemText primary="Integration" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#263238' }}>
        <Toolbar>
          <IconButton onClick={toggleDrawer(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Project
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
}