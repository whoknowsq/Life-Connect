import React from 'react';
import { Box, Avatar, Typography, TextField, IconButton } from '@mui/material';
import { Edit, ArrowBack } from '@mui/icons-material';
import '../styles/Profile.css';

function Profile() {
  return (
    <Box className="profile-container">
      <Box className="profile-header">
        <IconButton className="back-button">
          <ArrowBack />
        </IconButton>
        <IconButton className="edit-button">
          <Edit />
        </IconButton>
      </Box>

      <Box className="profile-content">
        <Avatar src="/profile-image.jpg" alt="Profile" className="profile-avatar" />
        <Typography variant="h4">Quinten Jin</Typography>

        <Box className="profile-fields">
          <Box className="field-group">
            <Typography variant="subtitle1">Email</Typography>
            <TextField value="Quintenjin@gmail.com" fullWidth disabled variant="filled" />
          </Box>

          <Box className="field-group">
            <Typography variant="subtitle1">Preferences</Typography>
            <TextField value="Prefers afternoon sessions, enjoys painting" fullWidth disabled variant="filled" multiline />
          </Box>

          <Box className="field-group">
            <Typography variant="subtitle1">Emotional Triggers</Typography>
            <TextField value="Isolation, darkness" fullWidth disabled variant="filled" multiline />
          </Box>

          <Box className="field-group">
            <Typography variant="subtitle1">Phone Number</Typography>
            <TextField value="+112233445" fullWidth disabled variant="filled" />
          </Box>

          <Box className="field-group">
            <Typography variant="subtitle1">Address</Typography>
            <TextField fullWidth disabled variant="filled" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;
