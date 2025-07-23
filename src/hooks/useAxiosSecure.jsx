import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/Auth/AuthContext';

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

const useAxiosSecure = () => {
  //logut function from authcontext
  const { logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  
  useEffect(()=>{
    axiosSecure.interceptors.response.use(
      (res) => {return res},
      async (error) =>{
        if(error.response.status === 401 || error.response.status === 403){
          //logout user
          logoutUser();
          //then navigate user to login page
          navigate('/login')
        }
      }
    )
  }, [logoutUser, navigate])

  return axiosSecure;
};

export default useAxiosSecure;