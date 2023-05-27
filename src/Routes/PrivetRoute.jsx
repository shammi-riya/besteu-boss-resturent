import { useContext } from 'react';
import { AuthContext } from '../Provider/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user,loaders} = useContext(AuthContext);
    const location = useLocation()

 if(loaders){
    return <div>Loder.............</div>
 }

 if(user){
    return children
 }
    return  <Navigate to="/login" state={{from:location}} replace></Navigate>
        
 

    
};

export default PrivetRoute;