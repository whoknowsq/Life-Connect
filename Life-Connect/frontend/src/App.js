import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Sidebar from '.Sidebar.js';
import Welcome from './components/Welcome';
import Profile from './components/Profile';
import Chats from './components/Chats';
import DiaryEntries from './components/DiaryEntries';
import CrisisDetection from './components/CrisisDetection';
import WebLinks from './components/WebLinks';
import EmergencyContacts from './components/EmergencyContacts';
import './styles/App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00BCD4',
      contrastText: '#fff'
    },
    background: {
      default: '#1E1E1E',
      paper: '#2D2D2D'
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)'
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 500
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontSize: '1rem'
        }
      }
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="app">
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/chats" element={<Chats />} />
              <Route path="/crisis" element={<CrisisDetection />} />
              <Route path="/diary" element={<DiaryEntries />} />
              <Route path="/web-links" element={<WebLinks />} />
              <Route path="/emergency" element={<EmergencyContacts />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;