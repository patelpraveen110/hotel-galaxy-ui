

// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../src/components/common/Navbar'
import FooterComponent from '../src/components/common/Footer';
import LoginPage from '../src/components/auth/LoginPage';
import RegisterPage from '../src/components/auth/RegisterPage';
import HomePage from '../src/components/home/HomePage';
import AllRoomsPage from '../src/components/booking_rooms/AllRoomsPage';
import RoomDetailsBookingPage from '../src/components/booking_rooms/RoomDetailsPage';
import FindBookingPage from '../src/components/booking_rooms/FindBookingPage';
import AdminPage from '../src/components/admin/AdminPage';
import ManageRoomPage from '../src/components/admin/ManageRoomPage';
import EditRoomPage from '../src/components/admin/EditRoomPage';
import AddRoomPage from '../src/components/admin/AddRoomPage';
import ManageBookingsPage from '../src/components/admin/ManageBookingsPage';
import EditBookingPage from '../src/components/admin/EditBookingPage';
import ProfilePage from '../src/components/profile/ProfilePage';
import EditProfilePage from '../src/components/profile/EditProfilePage';
import { ProtectedRoute, AdminRoute } from './service/guard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            {/* Public Routes */}
            <Route exact path="/home" element={<HomePage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/rooms" element={<AllRoomsPage />} />
            <Route path="/find-booking" element={<FindBookingPage />} />

            {/* Protected Routes */}
            <Route path="/room-details-book/:roomId"
              element={<ProtectedRoute element={<RoomDetailsBookingPage />} />}
            />
            <Route path="/profile"
              element={<ProtectedRoute element={<ProfilePage />} />}
            />
            <Route path="/edit-profile"
              element={<ProtectedRoute element={<EditProfilePage />} />}
            />

            {/* Admin Routes */}
            <Route path="/admin"
              element={<AdminRoute element={<AdminPage />} />}
            />
            <Route path="/admin/manage-rooms"
              element={<AdminRoute element={<ManageRoomPage />} />}
            />
            <Route path="/admin/edit-room/:roomId"
              element={<AdminRoute element={<EditRoomPage />} />}
            />
            <Route path="/admin/add-room"
              element={<AdminRoute element={<AddRoomPage />} />}
            />
            <Route path="/admin/manage-bookings"
              element={<AdminRoute element={<ManageBookingsPage />} />}
            />
            <Route path="/admin/edit-booking/:bookingCode"
              element={<AdminRoute element={<EditBookingPage />} />}
            />

            {/* Fallback Route */}
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;