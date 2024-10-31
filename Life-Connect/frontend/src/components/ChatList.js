import React from 'react';
import { Box, Typography, Button, List, ListItem } from '@mui/material';
import '../styles/Chat.css';

function ChatList() {
  const messages = [
    "I'm feeling a bit lonely.",
    "I had a good day today.",
    "I'm feeling really down today."
  ];

  return (
    <Box className="page-container">
      <Box className="header-image" style={{ backgroundImage: 'url(/chat-bg.jpg)' }}>
        <Typography variant="h2">Chat List</Typography>
        <Button variant="contained" className="add-button">Add new</Button>
      </Box>
      <List className="chat-list">
        {messages.map((message, index) => (
          <ListItem key={index} className="chat-item">{message}</ListItem>
        ))}
      </List>
      <Typography className="list-counter">1 - 3 of 3</Typography>
    </Box>
  );
}

export default ChatList;
