import React from 'react';
import { Box, Typography, Button, List, ListItem } from '@mui/material';
import '../styles/Crisis.css';

function CrisisDetection() {
  const alerts = [
    "I just need someone to talk to.",
    "I feel like I'm in a dark place and can't find a way out.",
    "I'm overwhelmed with everything happening around me."
  ];

  return (
    <Box className="page-container">
      <Box className="header-image" style={{ backgroundImage: 'url(/crisis-bg.jpg)' }}>
        <Typography variant="h2">Crisis Detections</Typography>
        <Button variant="contained" className="add-button">Add new</Button>
      </Box>
      <List className="crisis-list">
        {alerts.map((alert, index) => (
          <ListItem key={index} className="crisis-item">{alert}</ListItem>
        ))}
      </List>
      <Typography className="list-counter">1 - 3 of 3</Typography>
    </Box>
  );
}

export default CrisisDetection;
