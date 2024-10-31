import React from 'react';
import { Box, Typography, Button, List, ListItem } from '@mui/material';
import '../styles/Emergency.css';

function EmergencyContacts() {
  const contacts = [
    '+1122334456',
    '+0987654322',
    '+123456789'
  ];

  return (
    <Box className="page-container">
      <Box className="header-image" style={{ backgroundImage: 'url(/emergency-bg.jpg)' }}>
        <Typography variant="h2">Emergency Contacts</Typography>
        <Button variant="contained" className="add-button">Add new</Button>
      </Box>
      <List className="contact-list">
        {contacts.map((contact, index) => (
          <ListItem key={index} className="contact-item">{contact}</ListItem>
        ))}
      </List>
      <Typography className="list-counter">1 - 3 of 3</Typography>
    </Box>
  );
}

export default EmergencyContacts;