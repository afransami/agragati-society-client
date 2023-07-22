import React from "react";
import { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { saveUser } from "../../Api/Auth";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      saveUser(result.user);
      toast.success("Successfully login!");
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <div className="divider ">Social Media Login</div>
      <div className="text-center flex justify-center gap-8">
        <Link
          onClick={handleGoogleLogin}
          className="group relative inline-block overflow-hidden border-b-4 px-8 py-2"          
        >
          <span className="absolute inset-x-0 bottom-0 h-[2px] bg-orange-600 transition-all group-hover:h-full group-active:bg-orange-600"></span>

          <span className="relative hover:scale-110 text-3xl font-medium text-orange-600 transition-colors group-hover:text-white">
            <FaGoogle></FaGoogle>
          </span>
        </Link>
        <Link
          onClick={handleGoogleLogin}
          className="group relative inline-block overflow-hidden border-b-4 px-8 py-2"          
        >
          <span className="absolute inset-x-0 bottom-0 h-[2px] bg-orange-600 transition-all group-hover:h-full group-active:bg-orange-600"></span>

          <span className="relative hover:scale-110 text-3xl font-medium text-orange-600 transition-colors group-hover:text-white">
            <FaFacebook></FaFacebook>
          </span>
        </Link>
        {/* <Link
          onClick={handleGoogleLogin}
          className="group relative inline-block overflow-hidden border-b-4 px-8 py-2"
          to="/bus-reservation"
        >
          <span className="absolute inset-x-0 bottom-0 h-[2px] bg-orange-600 transition-all group-hover:h-full group-active:bg-orange-600"></span>

          <span className="relative hover:scale-110 text-3xl font-medium text-orange-400 transition-colors group-hover:text-white">
          <FaGithub></FaGithub>
          </span>
        </Link> */}
      </div>
    </div>
  );
};

export default SocialLogin;
