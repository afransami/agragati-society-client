import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import loginAnim from "../../../../src/assets/animation_lkdxzuck.json";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    signIn(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      toast.success('Successfully login!')
      reset();
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="login-bg hero min-h-screen  ">
      <Helmet>
        <title>Agragati Society | Login</title>
      </Helmet>
      <div className=" grid lg:grid-cols-2 w-auto items-center ">
        <Player
          autoplay
          loop
          src={loginAnim}
          // style={{ height: '300px', width: '300px' }}
          className="w-auto"
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
        <div className="card flex-shrink-0 shadow-xl">
          <h1 className="text-4xl p-5 font-bold text-orange-600">Login!</h1>
          <span className="divider"></span>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  {/* <span className="label-text">Email</span> */}
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                  {...register("email", { required: true })}
                  className="border-b border-orange-600 focus:outline-none bg-transparent"
                />
                {errors.email && (
                  <span className="text-orange-700">This field is requiorange</span>
                )}
              </div>
              <div className="form-control relative ">
                <label className="label ">
                  {/* <span>Password</span> */}
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password", {
                    required: true,
                  })}
                  className="border-b border-orange-600 focus:outline-none bg-transparent"
                />
                <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute top-2 right-4 text-gray-400"
                  >
                    {showConfirmPassword ? (
                      <FaEye className="w-5 h-5"></FaEye>
                    ) : (
                      <FaEyeSlash className="w-5 h-5"></FaEyeSlash>
                    )}
                  </button>

                {errors.password?.type === "required" && (
                  <p className="text-orange-700" role="alert">
                    password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-orange-700" role="alert">
                    password must be 6 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-orange-700" role="alert">
                    password must be at least 1 uppercase or letter case
                  </p>
                )}
              </div>

              {/* <p className="font-bold text-orange-500 text-xl"></p> */}
              <div className="form-control mt-6 ">
              <button className="group relative inline-block overflow-hidden border-b-4 px-8 py-2 text-center">
                  <span className="absolute inset-x-0 bottom-0 h-[2px] bg-orange-600 transition-all group-hover:h-full group-active:bg-orange-600"></span>

                  <input
                    className="relative text-xl font-medium text-orange-600 transition-colors group-hover:text-white"
                    type="submit"
                    value="Login"
                  ></input>
                </button>
              </div>
              {/* <SocialLogin></SocialLogin> */}
              <p className="text-center mt-5 font-semibold">
                New to অগ্রগতি সোসাইটি ? Please contact
                <Link className="font-bold text-xl" to="https://www.facebook.com/afransami" target="blank">
                  <span className="text-orange-600"> Admin</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
