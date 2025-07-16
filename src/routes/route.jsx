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
        element: <AddTutor/>
      },
      {
        path: '/find-tutors',
        element: <FindTutors />
      },
      {
        path: '/tutors/:id',
        element: <TutorDetails/>
      },
      {
        path: '/login',
        element: <Login/>,
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: 'update-profile',
        element: <UpdateProfile />
      }
    ]
    
  }
])
export default route