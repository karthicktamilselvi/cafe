import React from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Paper,
  useTheme,
} from '@mui/material';

const Register = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100dvh', // Uses dynamic viewport height (better for mobile)
        // backgroundColor: theme.palette.grey[100],
      }}
    >
      <Paper
        elevation={1}
        sx={{
          padding: 4,
          width: { xs: '90%', sm: '400px' },
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>

        <TextField
          label="Email"
          fullWidth
          margin="normal"
          variant="outlined"
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          variant="outlined"
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            py: 1.5,
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
              transform: 'translateY(-2px)',
              boxShadow: theme.shadows[4],
            },
            transition: 'all 0.3s ease',
          }}
        >
          Login to your account
        </Button>

        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography variant="body2">
            Don't have an account?{' '}
            <Link
              href="/signup"
              sx={{
                fontWeight: 'bold',
                color: theme.palette.primary.main,
                '&:hover': {
                  color: theme.palette.primary.dark,
                  textDecoration: 'underline',
                },
                fontSize:{
                  
                }
              }}
            >
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Register;