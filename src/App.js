import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './pages/Navbar';
import Router from './router/index';
 
const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <Router />
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App