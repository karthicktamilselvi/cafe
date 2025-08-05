import react,{useState,useEffect} from 'react';
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
import zetto from '../images/zetto/logo/zetto.png';

import myProfileIcon from '../images/zetto/icon/avatar.webp';
import referralEarningsIcon from '../images/zetto/icon/refericon.webp'
import myMessageIcon from '../images/zetto/icon/message.png'
import changePasswordIcon from '../images/zetto/icon/editpassword.webp'
import accountStatementIcon from '../images/zetto/icon/accstatement.webp'
import currentBetsIcon from '../images/zetto/icon/bethistory.webp'
import profitLossIcon from '../images/zetto/icon/profloss.webp'
import betHistoryIcon from '../images/zetto/icon/bethistory.webp'
import activityLogIcon from '../images/zetto/icon/passhistory.webp'
import settingIcon from '../images/zetto/icon/setting.webp'
import user from '../images/zetto/icon/green-avatar.png';
import speaker from '../images/zetto/icon/speaker_icon.png'
import HomeService from '../services/homeService';
import { useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [marquee,setMarquee] = useState();
  const [open, setOpen] = useState(false);

  const theme = useTheme(); // This gives you access to your theme object
  const navigate = useNavigate();
  let token = "";
  token = localStorage.getItem("token")
  const settings = ['Profile',  'Logout'];



  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const menuItems = [
  { text: 'My Profile', icon: myProfileIcon, path: '/profile' },
  { text: 'Referral Earnings', icon: referralEarningsIcon, path: '/referral' },
  { text: 'My Messages', icon: myMessageIcon, path: '/messages' },
  { text: 'Change Password', icon: changePasswordIcon, path: '/change-password' },
  { text: 'Account Statement', icon: accountStatementIcon, path: '/statement' },
  { text: 'Current Bets', icon: currentBetsIcon, path: '/current-bets' },
  { text: 'Profit/Loss', icon: profitLossIcon, path: '/profit-loss' },
  { text: 'Bet History', icon: betHistoryIcon, path: '/bet-history' },
  { text: 'Activity Log', icon: activityLogIcon, path: '/activity-log' },
  { text: 'Settings', icon: settingIcon, path: '/settings' }
];


   const DrawerList = (
      <Box sx={{ width: 250,backgroundColor:theme.palette.secondary.main,color:theme.palette.secondary.contrastText  }} role="presentation" onClick={toggleDrawer(false)}>
        
        <Box sx={{display:'flex', justifyContent:'center',alignItems:'center', marginTop:{
          xs:'40px',md:'50px'
        }
        
        }}>
          <Typography  sx={{

            display:'flex',
            alignItems:'center',
            fontWeight:'bold'
          }} component="p">
            
            <Typography src={user}  sx={
               {
                height:{
                  xs:'20px',
                  md:'20px'
                },
                marginRight:'8px'
               }
            } component="img"></Typography>
            Username
            
          </Typography>
        </Box>

        <Box sx={{
          display:'flex',
          justifyContent:'center',
          alignItem:'center',
          marginTop:'6px'
        }}>
           <Typography component="span" >Balance Information</Typography>
        </Box>

        <Box sx={{
          padding:'0px 10px'
        }}>
        <Box sx={{
          display:'flex',
          justifyContent:'space-between',
          alignItem:'center',
          marginTop:'6px',
          padding:'10px 10px'
        }}>
          <Typography component="span" >Available Credit</Typography>
          <Typography component="span" >1000</Typography>
        </Box>
 
        <Divider sx={{
          backgroundColor:'#fff'
        }}/>
        </Box>

        <Box sx={{
          padding:'0px 10px'
        }}>
        <Box sx={{
          display:'flex',
          justifyContent:'space-between',
          alignItem:'center',
          marginTop:'6px',
          padding:'10px 10px'
        }}>


          <Typography component="span" >Net Exposure</Typography>
          <Typography component="span" >1000</Typography>
        </Box>
 
        <Divider sx={{
          backgroundColor:'#fff'
        }}/>
        </Box>

        <Box sx={{
          display:'flex',
          justifyContent:'space-between',
          alignItem:'center',
          marginTop:'6px',
          padding:'10px 10px'
        }}>
              <Button variant='navbar-withdraw'>Wallet</Button>
              <Button variant='navbar-deposit'>Deposit</Button>
        </Box>
        <List>
      {menuItems.map((item, index) => (
        <ListItem key={item.text} disablePadding>
          <ListItemButton onClick={() => navigate(item.path)}>
            <ListItemIcon>
              <Typography 
                component="img" 
                sx={{ height: { xs: '20px', md: '20px' } }} 
                src={item.icon} 
                alt={item.text}
              />
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}

        </List>
      </Box>
    );
  
    
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
      localStorage.removeItem("token");
      localStorage.removeItem("login_data")

      navigate('/')
    }
    else if(setting === "Profile"){
      navigate('/profile')
    }
  };


  useEffect(() =>{
      marqueeList()
  },[])


  const marqueeList = async() =>{
        try {
    
          let org = "zettotest"
          const response = await HomeService.marquee(org);
          if(response?.status === 1){
            setMarquee(response.data.marquee_list)
          }
          // Handle successful login (e.g., redirect)
        } catch (err) {
          console.log(err.response?.data?.message || 'Login failessd');
        } finally {
          // setLoading(false);
        }
  }

  return (
    <Box sx={{ flexGrow: 1 ,        position:"fixed"}}>
      <AppBar 
        sx={{
          backgroundColor: theme.palette.secondary.main, // Using theme colors
          color: theme.palette.secondary.contrastText,
          height:'70px',
          display: 'flex',
          justifyContent: 'center' // Vertically center the content

        }}
      >
        <Container maxWidth="full">
          <Toolbar disableGutters>
            
            <Box sx={{ flexGrow: 5 }}>
                <Box 
                    component="img"
                    src={zetto}
                    alt="logo"
                    sx={{
                        height: { xs: '28px', md: '36px' }
                    }}
                />
            </Box>
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
              <Typography variant="body1" component="p" sx={{ lineHeight:'13px'}}>
                <Box component="span"
                 sx={{color:theme.palette.primary.main,
                  fontSize:{
                    xs:'12px',
                    md:'12px'

                  },
                
                }}
                  >(Bal:</Box>
                <Box component="span" 
                sx={{color:'white',
                  fontSize:{
                    xs:'12px',
                    md:'12px'
                  },

                }}

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
              <Typography variant="body1" component="p" sx={{ lineHeight:'13px'}}>
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
                     <Box onClick={toggleDrawer(true)}
                    component="img"
                    src={user}
                    alt="logo"
                    sx={{
                        height: { xs: '28px', md: '28px' }
                    }}
                />




                {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton> */}
              </Tooltip>
              {/* <Menu
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
              </Menu> */}
            </Box>





              <Drawer open={open} onClose={toggleDrawer(false)}>
                      {DrawerList}
              </Drawer>             
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
        <Box 
    sx={{
      position: 'fixed',
      top: '70px', // Position right below the AppBar
      width: '100%',
      backgroundColor: 'gray',
      color: theme.palette.primary.contrastText,
      padding: '6px 0',
      zIndex: theme.zIndex.drawer
    }}
  >
    <Box sx={{display:'flex', alignItems:'center',  direction:'row',padding:'0px 10px',height:'20px'}}>
      <Box 
        component="img"
        src={speaker}
        alt="logo"
        sx={{
            height: { xs: '20px', md: '20px' }
        }}
    />
      <Box sx={{width:'100%'}}>
        <marquee behavior="scroll" direction="left">
          {/* This is your scrolling marquee text. You can put any important announcements here. */}
          <Box component="ul" sx={{ 
            display: 'flex',
            listStyle: 'none',
            padding: 0,
            margin: 0,
            '& li': {
              display: 'flex',
              alignItems: 'center',
              marginRight: '14px', // Slightly increased for better spacing
              fontSize: '14px', // Smaller text size
              '&::before': {
                content: '"\\2022"', // Bullet point
                color: theme.palette.primary.contrastText,
                fontSize: '35px', // Larger bullet size
                marginRight: '4px',
                verticalAlign: 'middle' // Better alignment
              }
            }
          }}>
            {marquee?.map((item) =>(
              <li key={item?.id}>{item?.content}</li>
            ))}
          </Box>
        </marquee>
      </Box>

    </Box>
  </Box>
{/* https://cms-api.dev.fastplay.in/public/marquee/list?org=zettotest */}

    </Box>
  );
}

export default Navbar;