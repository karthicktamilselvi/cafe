import react,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';


import { useTheme } from '@mui/material/styles';

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const theme = useTheme(); // This gives you access to your theme object
  const navigate = useNavigate();
  let token = "";
  token = localStorage.getItem("token")
  console.log("get",token)
  const settings = ['Profile',  'Logout'];



  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (setting) => {
    setAnchorElUser(null);
    if(setting === "Logout"){
      localStorage.removeItem("token")
      navigate('/')
    }
    else if(setting === "Profile"){
      navigate('/profile')
    }
  };

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
              }}
            >
              Zetto
            </Typography>

            {token ? <>
            <Box sx={
                { marginRight:{
                    xs:'20px',
                    md:'20px'
                  },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', // Center children horizontally
                }
              }
              >
              <Button variant='navbar-deposit'>Deposit</Button>
              <Typography variant="body1" component="p">
                <Box component="span"
                 sx={{color:theme.palette.primary.main,
                  fontSize:{
                    xs:'12px',
                    md:'12px'

                  } }}
                  >(Bal:</Box>
                <Box component="span" 
                sx={{color:'white',
                  fontSize:{
                    xs:'12px',
                    md:'12px'
                  }}}

                >1000)</Box>
              </Typography>
            </Box>

            <Box sx={{    
              marginRight:{
                xs:'20px',
                md:'20px'
              },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', 
            }}>
              <Button variant="navbar-withdraw">Withdraw</Button> 
              <Typography variant="body1" component="p">
                <Box component="span"
                 sx={{color:theme.palette.primary.main,
                  fontSize:{
                    xs:'12px',
                    md:'12px'

                  } }}
                  >(Exp:</Box>
                <Box component="span" 
                sx={{color:'white',
                  fontSize:{
                    xs:'12px',
                    md:'12px'
                  }}}

                >1000)</Box>
              </Typography>
            </Box>  


            <Box sx={{ flexGrow: 0 }}  >
              <Tooltip title="Open settings">

                <Typography onClick={handleOpenUserMenu}>hiii</Typography>
                {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton> */}
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{  
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={() => handleCloseUserMenu()} // Also fix this one
              >
                {settings.map((setting) => (
                  <MenuItem 
                    key={setting} 
                    onClick={() => handleCloseUserMenu(setting)} // Fixed here
                  >
                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
                                  
            </> : 
            
            <>
              <Link className='mr-2'  href="/register"
                variant="navbar-withdraw" sx={
                  { textDecoration:'none',
                    backgroundColor:theme.palette.primary.main,
                    color:theme.palette.primary.contrastText,
                    padding: '6px 12px',
                    fontWeight:'bold',
                    border: '1px solid #00ffe6',
                    borderRadius:'3px',
                    marginRight:{
                      xs:'5px',
                      md:'5px'
                    },
                    fontSize:{
                      xs:'12px',
                      md:'10px'
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
                    padding: '6px 12px',
                    fontWeight:'bold',
                    border: '1px solid #edeeee',
                    borderRadius:'3px',
                    marginRight:{
                      xs:'5px',
                      md:'5px'
                    },
                    fontSize:{
                      xs:'12px',
                      md:'10px'
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
            
            </>
            
            }
            
          
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Navbar;