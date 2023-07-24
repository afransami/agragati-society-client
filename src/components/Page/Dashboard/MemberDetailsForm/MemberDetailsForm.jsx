import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { useForm } from "react-hook-form";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { saveUser } from "../../../Api/Auth";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";


const MemberDetailsForm = () => {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, setLoading, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            toast.success("Signup successful");
            saveUser(result.user);
            reset();
            navigate(from, { replace: true });
          })
          .catch((error) => {
            setLoading(false);
            console.log(error.message);
            toast.error(error.message);
          });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
        toast.error(error.message);
      });
  };

  return (
    <div className="hero min-h-screen mx-auto container">
      <Helmet>
        <title>Agragati Society | Member's Form</title>
      </Helmet>
      <div className="grid grid-cols-1 lg:w-1/2">      
        <div className="bg-slate-700 card flex-shrink-0 bg-gray-100 shadow-xl">
          <h1 className="text-4xl p-5 font-bold text-orange-500">Member's Form</h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-slate-100 rounded card-body space-y-8">
              <div className="form-control">
                
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name")}
                  {...register("name", { required: true })}
                  className="border-b border-orange-500 focus:outline-none bg-transparent"
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                
                <input
                  type="email"
                  placeholder="Email"                  
                  {...register("email", { required: true })}
                  className="border-b border-orange-500 focus:outline-none bg-transparent"
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
              
                <input
                  type="number"
                  placeholder="Taka"
                  {...register("number", { required: true })}
                  className="border-b border-orange-500 focus:outline-none bg-transparent"
                />
                {errors.number && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div className="form-control">
              
                <input
                  type="date"
                  placeholder="Date"
                  {...register("date", { required: true })}
                  className="border-b border-orange-500 focus:outline-none bg-transparent"
                />
                {errors.number && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>             

              <div className="form-control mt-6 ">
              <button className="group relative inline-block overflow-hidden border-b-4 px-8 py-2 text-center">
                  <span className="absolute inset-x-0 bottom-0 h-[2px] bg-orange-500 transition-all group-hover:h-full group-active:bg-orange-500"></span>

                  <input
                    className="relative text-xl font-medium text-orange-500 transition-colors group-hover:text-white"
                    type="submit"
                    value="Submit"
                  ></input>
                </button>
              </div>
             
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default MemberDetailsForm;
