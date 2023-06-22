import React from 'react';
import {Route} from "react-router-dom"
import LoginAdmin from './loginAdmin';
import UsersList from './users/usersList';

export const adminRoutes = () => {
  return (
    <React.Fragment>
      <Route path="/admin" element={<LoginAdmin />} />
      <Route path="/admin/users" element={<UsersList />} />
    </React.Fragment>
  )
}