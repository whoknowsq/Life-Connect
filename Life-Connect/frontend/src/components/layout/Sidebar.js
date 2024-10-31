import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  TextField,
} from '@mui/material';
import {
  Home,
  Chat,
  Warning,
  Book,
  Link as LinkIcon,
  ContactPhone,
  Person,
  Logout,
  Close as CloseIcon,
  Search as SearchIcon
} from '@mui/icons-material';
import '../../styles/Sidebar.css';

function Sidebar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { icon: <Home />, text: 'Home', path: '/' },
    { icon: <Chat />, text: 'Chats', path: '/chats' },
    { icon: <Warning />, text: 'Crisis Detections', path: '/crisis' },
    { icon: <Book />, text: 'Diary Entries', path: '/diary' },
    { icon: <LinkIcon />, text: 'Web Links', path: '/web-links' },
    { icon: <ContactPhone />, text: 'Emergency Contacts', path: '/emergency' },
  ];

  return (
    <Box className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="logo">
          <img src="/heart-icon.png" alt="LifeLine Connect" />
          <span>LifeLine Connect</span>
        </div>
        <IconButton onClick={() => setIsOpen(false)}>
          <CloseIcon />
        </IconButton>
      </div>

      <List className="menu-list">
        {menuItems.map((item) => (
          <ListItem button key={item.text} onClick={() => navigate(item.path)} className="menu-item">
            <ListItemIcon className="menu-icon">{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>

      <div className="search-box">
        <SearchIcon className="search-icon" />
        <TextField
          fullWidth
          placeholder="Search"
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
        />
      </div>

      <div className="sidebar-footer">
        <ListItem button onClick={() => navigate('/profile')}>
          <ListItemIcon><Person /></ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><Logout /></ListItemIcon>
          <ListItemText primary="Log out" />
        </ListItem>
      </div>
    </Box>
  );
}

export default Sidebar;
