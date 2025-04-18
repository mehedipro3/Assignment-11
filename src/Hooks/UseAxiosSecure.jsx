import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext/AuthContext";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});

const useAxiosSecure = () => {

  const { singOutUser } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.response.use(response => {
      return response;
    }, error => {

      console.log('error caught in Interceptors', error);

      if (error.status === 401 || error.status === 403) {
        console.log('Need to LogOut');
        singOutUser()
          .then(() => {
            console.log('logged out');
            navigate('/signIn');
          })
          .catch(error => console.log(error))
      }
      return Promise.reject(error);
    })
  }, [])


  return axiosInstance;
};

export default useAxiosSecure;