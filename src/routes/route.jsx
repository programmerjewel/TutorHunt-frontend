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
        path: '/find-tutors/:category',
        element: <TutorsByLanguage/>,
      },
      {
        path: '/my-tutors',
        element: <MyTutors/>,
      },
      {
        path: '/booked-tutors',
        element: <BookedTutors/>,
      },
      {
        path: '/update-tutor/:id',
        element: <UpdateTutor/>,
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