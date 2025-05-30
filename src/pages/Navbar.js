import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';

function Navbar() {
  const theme = useTheme(); // This gives you access to your theme object

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed"
        sx={{
          backgroundColor: theme.palette.secondary.main, // Using theme colors
          color: theme.palette.secondary.contrastText
        }}
      >
        <Container maxWidth="full">
          <Toolbar disableGutters>
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                flexGrow: 5,
                color: theme.palette.primary.main
                // Using theme text color
              }}
            >
              Demo
            </Typography>
            <Link className='mr-2'  href="/register"
               variant="navbar-signUp" sx={
                { textDecoration:'none',
                  backgroundColor:theme.palette.primary.main,
                  color:theme.palette.primary.contrastText,
                  padding: '3px 10px',
                  fontWeight:'bold',
                  border: '1px solid #00ffe6',
                  borderRadius:'3px',
                  marginRight:{
                    xs:'10px',
                    md:'10px'
                  },
                  fontSize:{
                    xs:'12px',
                    md:'14px'
                  },
                  '&:hover': {
                    backgroundColor: '#078f8a', // Replace with your desired hover color
                    color: '#000',       // Replace if you want to change text color on hover
                    border:'1px solid #078f8a'
                  }
                }
               }>
                SIGN UP
            </Link>
            <Link   href="/login"
                sx={
                { textDecoration:'none',
                  backgroundColor:theme.palette.secondary.main,
                  color:theme.palette.secondary.contrastText,
                  padding: '3px 10px',
                  fontWeight:'bold',
                  border: '1px solid #edeeee',
                  borderRadius:'3px',
                  marginRight:{
                    xs:'10px',
                    md:'10px'
                  },
                  fontSize:{
                    xs:'12px',
                    md:'14px'
                  },
                  // '$:hover':{
                  //   backgroundColor:'#edeee',
                  //   color:'#000'
                  // }
                  '&:hover': {
                    backgroundColor: '#edeeee', // Replace with your desired hover color
                    color: '#000',       // Replace if you want to change text color on hover
                  }
                }
               }>
                LOGIN
            </Link>
            
          
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Navbar;