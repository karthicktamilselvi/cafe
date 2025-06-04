import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: { main: '#00ffe6', contrastText: '#000' },
    secondary: { main: '#021f3f', contrastText: '#FFFFFF' },
    
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 500 },
    h2: { fontSize: '2rem', fontWeight: 500 },
    h3: { fontSize: '1.75rem', fontWeight: 500 },
    h4: { fontSize: '1.5rem', fontWeight: 500 },
    body1: { fontSize: '1rem', lineHeight: 1.5 }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        // Base button styles
        root: {
          borderRadius: 4, // Adjust border radius as needed
          textTransform: 'none',
          fontSize: '12px',
          fontWeight:'bold',
          border: '1px solid transparent', // Default transparent border
          '&:hover': {
            border: '1px solid currentColor' // Border on hover
          }
        },
      
        // Text button styles
        text: {
          '&:hover': {
            border: '1px solid rgba(0, 0, 0, 0.1)' // Light border on hover
          }
        }
      },
      variants: [
        {
          props: { variant: 'navbar-deposit' },
          style: {
            backgroundColor: '#00ffe6',
            color: '#021f3f',
            padding: '1px 18px',
            fontSize:{
              xs:'12px',
              md:'10px'
            },
            border: '1px solid #00ffe6',
            '&:hover': {
              backgroundColor: '#00e6cc',
              border: '1px solid #00e6cc'
            }
          }
        },
        {
          props: { variant: 'navbar-withdraw' },
          style: {
            backgroundColor: '#021f3f',
            padding: '1px 18px',
            color: '#fff',
            fontSize:{
              xs:'12px',
              md:'10px'
            },
            border: '1px solid #fff',
                  '&:hover': {
                    backgroundColor: '#edeeee', // Replace with your desired hover color
                    color: '#000',       // Replace if you want to change text color on hover
                  }

          }
        }
      ]
    }
  }
});



