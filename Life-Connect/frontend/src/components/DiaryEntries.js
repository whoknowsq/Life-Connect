import React from 'react';
import { Box, Typography, Button, List, ListItem } from '@mui/material';
import '../styles/Diary.css';

function DiaryEntries() {
  const entries = [
    'Quinten "Stargazer" Jin',
    'Quinten "Stargazer" Jin',
    'Quinten "Stargazer" Jin'
  ];

  return (
    <Box className="page-container">
      <Box className="header-image" style={{ backgroundImage: 'url(/diary-bg.jpg)' }}>
        <Typography variant="h2">Diary Entries</Typography>
        <Button variant="contained" className="add-button">Add new</Button>
      </Box>
      <List className="diary-list">
        {entries.map((entry, index) => (
          <ListItem key={index} className="diary-item">{entry}</ListItem>
        ))}
      </List>
      <Typography className="list-counter">1 - 3 of 3</Typography>
    </Box>
  );
}

export default DiaryEntries;
