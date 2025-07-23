import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/Errorpage";
import Home from "../pages/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import UpdateProfile from "../pages/Auth/UpdateProfile";
import AddTutor from "../pages/AddTutor";
import TutorDetails from "../pages/TutorDetails";
import FindTutors from "../pages/FindTutors";
import TutorsByLanguage from "../pages/TutorsByLanguage";
import MyTutors from "../pages/MyTutors";
import BookedTutors from "../pages/BookedTutors";
import UpdateTutor from "../pages/UpdateTutor";
import PrivateRoute from "./PrivateRoute";

const route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/add-tutor',
        element: <PrivateRoute><AddTutor/></PrivateRoute>,
      },
      {
        path: '/find-tutors',
        element: <FindTutors />,
      },
      {
        path: '/find-tutors/:category',
        element: <TutorsByLanguage/>,
      },
      {
        path: '/my-tutors',
        element: <PrivateRoute><MyTutors/></PrivateRoute>,
      },
      {
        path: '/booked-tutors',
        element: <PrivateRoute><BookedTutors/></PrivateRoute>,
      },
      {
        path: '/update-tutor/:id',
        element: <PrivateRoute><UpdateTutor/></PrivateRoute>,
      },
      {
        path: '/tutors/:id',
        element: <PrivateRoute><TutorDetails/></PrivateRoute>,
      },
      {
        path: '/login',
        element: <Login/>,
      },
      {
        path: '/register',
        element: <Register/>,
      },
      {
        path: 'update-profile',
        element: <PrivateRoute><UpdateProfile /></PrivateRoute>,
      }
    ]
    
  }
])
export default route