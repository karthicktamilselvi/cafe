import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

function Navbar() {
  const theme = useTheme(); // This gives you access to your theme object

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static"
        sx={{
          backgroundColor: theme.palette.primary.main, // Using theme colors
          color: theme.palette.primary.contrastText
        }}
      >
        <Container maxWidth="full">
          <Toolbar disableGutters>
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                flexGrow: 5,
                color: theme.palette.primary.contrastText
                // Using theme text color
              }}
            >
              Demo
            </Typography>
            <Button variant="navbar-signUp">
                Sign Up
            </Button>
            
            {/* Login button with custom styling */}
            <Button variant="navbar-login">
                Login
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Navbar;