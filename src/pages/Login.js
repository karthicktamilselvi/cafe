// import React ,{useState} from 'react'

// const Login = () => {
//   const [formValues,setFormValues] = useState({
//     username:'',
//     password:''
//   })

//   const handleChange = (e) => {
//       const {name,value} = e.target;
//       setFormValues(prev => ({ ...prev, [name] : value}))
//   }

//   const  handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("data", formValues)
//   }

//   return (
//       <>
//        <div className="flex items-center justify-center min-h-screen  px-4 sm:px-6 lg:px-8">
//           <div className="w-full max-w-sm loginFormBanner rounded-md p-5 space-y-8">
//             <div>
//               <h2 className="mt-6 text-center text-2xl font-bold underline tracking-tight login-text">
//                 Heritage Cafe
//               </h2>
//             </div>
//             <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
//               <div>
//                 <label htmlFor="username" name="username" className="block text-sm font-medium login-text">
//                   Username
//                 </label>
//                 <input type="text" name="username" id="username" value={formValues.username} onChange={handleChange}  className="mt-1 block w-full px-3 py-1.5 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
//               </div>
//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium login-text">
//                   Password
//                 </label>
//                 <input type="password" name="password" id="password" value={formValues.password} onChange={handleChange} className="mt-1 block w-full px-3 py-1.5 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
//               </div>
//               <div>
//                 <button type="submit" className="w-full flex justify-center rounded-md login-btn py-2 px-4 text-sm font-semibold text-red-900">
//                   Sign in
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </>
//   )
// }

// export default Login;


import React from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Paper,
  useTheme
} from '@mui/material';
import { useForm } from 'react-hook-form';
import AuthService from '../services/authservice';
import { useAuth } from '../context/AuthContext';


const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  // const { login } = useAuth();
  const location = useLocation();

  const {register,handleSubmit,formState :{errors}} = useForm()

  const onSubmit = async(data) => {
    console.log(data);
    let browserprint =   btoa('v2.5.28.1'+Date.now()+Math.floor(Math.random() * 10000));

    let postData ={
      org: "zettotest",
      pwd: data.password,
      type: "player",
      username: data.username,
      browserprint : browserprint
    }
    try {
      const response = await AuthService.login(postData);
      console.log('Login successful', response);
      if(response?.status === 1){
        localStorage.setItem("token",response.data.token);
        const from = location.state?.from?.pathname || '/';
        navigate(from, { replace: true });
      
      }
      // Handle successful login (e.g., redirect)
    } catch (err) {
      // setError(err.response?.data?.message || 'Login failed');
    } finally {
      // setLoading(false);
    }
  };


  // const clickEvent = async() =>{
  //   let browserprint =   btoa('v2.5.28.1'+Date.now()+Math.floor(Math.random() * 10000));

  //   let postData ={
  //     org: "zettotest",
  //     pwd: "Test@123",
  //     type: "player",
  //     username: "best",
  //     browserprint : browserprint
  //   }
  //   try {
  //     const response = await AuthService.login(postData);
  //     console.log('Login successful', response.data.token);
  //     if(response?.status === 1){
  //       localStorage.setItem("token",response.data.token);

  //       // const fakeToken = response.data.token;
  //       // login(fakeToken); // Save token & update auth state
        
  //       // Redirect back to the intended page (or home)
  //       const from = location.state?.from?.pathname || '/';
  //       navigate(from, { replace: true });

  //     }
      
  //     // Handle successful login (e.g., redirect)
  //   } catch (err) {
  //     // setError(err.response?.data?.message || 'Login failed');
  //   } finally {
  //     // setLoading(false);
  //   }
  // }

  return (
    // <>
    //   <Typography onClick={clickEvent} sx={{marginTop:'100px'}}>Login</Typography>
    // </>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100dvh', // Uses dynamic viewport height (better for mobile)
        // backgroundColor: theme.palette.grey[100],
        padding: {
          xs:'20px',
          md:'5px'
        },
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
        <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>

        <TextField
          label="Username"
          fullWidth
          margin="normal"
          variant="outlined"
          error={!!errors.username}
          {...register('username', { required: 'Please enter the username', minLength: { value : 4 , message:'Username must be less than 5 character'} })}
          helperText={errors.username?.message}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          variant="outlined"
          error={!!errors.password}
          {...register('password', { required: 'Please enter the password', minLength: { value : 6 , message:'Username must be atleast 6 character'},pattern: {
            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
            message: 'Password must contain at least one uppercase letter, one lowercase letter, and one number'
          } })}
          helperText={errors.password?.message}
        />

        <Button type='submit'
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
                fontSize:{
                  xs:'16px',
                  md:'16px'
                },
            transition: 'all 0.3s ease',
          }}
        >
          Login to your account
        </Button>
        </form>
       

        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography variant="body2">
            Don't have an account?{' '}
            <Link
              href="/register"
              sx={{
                fontWeight: 'bold',
                color: theme.palette.primary.main,
                '&:hover': {
                  color: theme.palette.primary.dark,
                  textDecoration: 'underline',
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

export default Login;