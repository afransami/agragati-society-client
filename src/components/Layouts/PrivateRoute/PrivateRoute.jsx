import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Dna } from "react-loader-spinner";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";


const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useContext(AuthContext);
  if (loading) {
    
    return <div className="flex justify-center items-center h-1/2">
      <Dna
    visible={true}
    height="80"
    width="80"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper"  
  />
    </div>
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
