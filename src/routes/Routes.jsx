import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import PrivateRoute from './PrivateRoute'
import { getRoom } from '../api/rooms'
import DashboardLayout from '../layouts/DashboardLayout'
import AddRoom from '../pages/DashBoard/Host/AddRoom'
import MyListings from '../pages/DashBoard/Host/MyListings'
import HostRoute from './HostRoute'
import AdminRoute from './AdminRoute'
import ManageUsers from '../pages/DashBoard/Admin/ManageUsers'
import Profile from '../pages/DashBoard/Common/Profile'
import MyBookings from '../pages/DashBoard/Guest/MyBookings'
import ManageBookings from '../pages/DashBoard/Host/ManageBookings'
import AdminStatistics from '../components/Dashboard/Statistics/Admin/AdminStatistics'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/room/:id',
        element: <PrivateRoute><RoomDetails /></PrivateRoute>,
        loader: ({ params }) => getRoom(params.id)
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard', element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      {
        path: 'add-room',
        element:
          <PrivateRoute>
            <HostRoute><AddRoom></AddRoom></HostRoute>
          </PrivateRoute>
      },
      {
        path: 'my-listings',
        element:
          <PrivateRoute>
            <HostRoute>
              <MyListings></MyListings>
            </HostRoute>
          </PrivateRoute>
      },
      {
        path:'manage-users',
        element:
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers></ManageUsers>
            </AdminRoute>
          </PrivateRoute>
      },
      {
        path:'profile',
        element:
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
      },
      {
        path:'my-bookings',
        element:
          <PrivateRoute>
            <MyBookings/>
          </PrivateRoute>
      },
      {
        path:'manage-bookings',
        element:
          <HostRoute>
            <ManageBookings/>
          </HostRoute>
      },
      {
        path:'statistics',
        element:
          <AdminRoute>
            <AdminStatistics/>
          </AdminRoute>
      },
    ]
  }
])
