import React from 'react';
import { Routes,Route } from 'react-router-dom';
import { routesConfig } from '../config/routes';
import PrivateRoute from './privateRouter';


const index = () => {
  return (
    <>
       <Routes>
        {routesConfig.map((route, index) => (
           route?.isPublic === true ? 
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />

          :
          <Route
          key={index}
          path={route.path}
          element={
            <PrivateRoute>
              {route.element}
            </PrivateRoute>
          }
        />

        ))}
      </Routes>
    </>
  )
}

export default index