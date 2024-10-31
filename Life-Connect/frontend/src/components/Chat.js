import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Paper, Typography } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const { currentUser } = useAuth();

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessage = {
      content: input,
      sender: currentUser.id,
      timestamp: new Date()
    };

    setMessages([...messages, newMessage]);
    setInput('');

    // Send to backend for analysis and response
    try {
      const response = await api.post('/chat', newMessage);
      setMessages(prev => [...prev, response.data]);
    } catch (error) {
      console.error('Chat error:', error);
    }
  };

  return (
    <Box sx={{ p: 2, maxWidth: 600, mx: 'auto' }}>
      <Paper sx={{ p: 2, mb: 2, maxHeight: 400, overflow: 'auto' }}>
        {messages.map((msg, index) => (
          <Box
            key={index}
            sx={{
              mb: 1,
              p: 1,
              backgroundColor: msg.sender === currentUser.id ? '#e3f2fd' : '#f5f5f5',
              borderRadius: 1,
              maxWidth: '80%',
              ml: msg.sender === currentUser.id ? 'auto' : 0
            }}
          >
            <Typography variant="body1">{msg.content}</Typography>
          </Box>
        ))}
      </Paper>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <Button variant="contained" onClick={handleSend}>
          Send
        </Button>
      </Box>
    </Box>
  );
}
