import { useContext } from 'react';
import AuthContext from '../Context/AuthContext/AuthContext';
import Loading from '../Context/Loading'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
  const {loading,user}=useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if(loading){
    return <Loading></Loading>
  }

  if(user && user?.email) {
      return children;
  }
  return  <Navigate to={"/singIn"} state={location?.pathname}></Navigate>;
};

export default PrivateRouter;