import React from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import { toast } from "react-hot-toast";
import { saveMemberPayments } from "../../../Api/Auth";


const MemberPaymentsForm = () => {
    
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

 
  const onSubmit = (data) => {
    const name = data.name;
    const email = data.email;
    const taka = parseFloat(data.taka);
    const date = data.date;
    
    const dataTotal = { name, email, taka, date };
    
    console.log(dataTotal);
    saveMemberPayments(dataTotal)
    reset()
    toast.success('Members Payments Uploaded Successfully!')
  };

  return (
    <div className="hero min-h-screen mx-auto container">
      <Helmet>
        <title>Agragati Society | Member's Payments Form</title>
      </Helmet>
      <div className="grid grid-cols-1 lg:w-1/2">
        <div className="bg-slate-800 card flex-shrink-0 shadow-xl">
          <h1 className="text-4xl p-5 font-bold text-orange-500">
            Member's Payments Form
          </h1>
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
                  {...register("taka", { required: true })}
                  className="border-b border-orange-500 focus:outline-none bg-transparent"
                />
                {errors.taka && (
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
                {errors.date && (
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

export default MemberPaymentsForm;
