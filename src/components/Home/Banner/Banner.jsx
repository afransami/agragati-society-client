import React from "react";
import { Link } from "react-router-dom";
import { FaClock, FaUsers, FaSlideshare, FaHandshake } from "react-icons/fa";
// import { GiThreeFriends } from "react-icons/gi";
// import banner from "../../../assets/banner1.jpg";

const Banner = () => {
  return (
    <div>
      {/* <section className=" relative bg-[url(https://img.freepik.com/free-photo/traffic-vehicle-urban-reflections-city_1112-973.jpg?w=740&t=st=1688746280~exp=1688746880~hmac=c7b0c4eb2cb49318784d471c5884476705c637fe7aefe268eb0dd4e5d4b60eab)] bg-cover lg:h-[700px] h-auto bg-center bg-no-repeat"> */}
      <section className=" relative bg-[{banner}] bg-cover h-100vh bg-center mt-12 bg-no-repeat" style={{backgroundImage:`url(${banner})`, backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        width: '100%', 
    }}>
        {/* <div className="absolute inset-0 bg-gradient-to-r w-full from-[#151515] to-[rgba(21, 21, 21, 0)]"></div> */}
        <div className="absolute inset-0 w-full bg-gradient-to-r from-[#1b1b1b] to-[rgba(21, 21, 21, 0)]"></div>

        <div className="relative -top-1/6 max-w-screen-full lg:py-32 py-24 px-4 md:px-6 container mx-auto lg:flex lg:h-screen lg:items-center lg:px-0">
          <div className="max-w-xl space-y-4 ltr:sm:text-left rtl:sm:text-right">
            <div className="text-3xl text-start font-extrabold sm:text-5xl">
              <h1 className="text-white mb-4 "> Agragati Society</h1>
              <h1 className="text-start font-extrabold text-orange-500">
              people united, benefits shared, progress achieved
              {/* For working together, mutual gain and shared decisions */}
              </h1>
            </div>

            <p className="mt-4 text-start max-w-lg sm:text-xl text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className=" mt-4 flex justify-start items-center gap-4">
              <div>
                <Link
                  className="group relative inline-block overflow-hidden border-b-4 px-2 py-2"
                  to="/login"
                >
                  <span className="absolute inset-x-0 bottom-0 h-[2px] bg-orange-500 transition-all group-hover:h-full group-active:bg-orange-500"></span>

                  <span className="relative font-medium text-orange-500 transition-colors group-hover:text-white">
                    Get Started
                  </span>
                </Link>
              </div>

              <div>
                <Link
                  className="group relative inline-block overflow-hidden border-b-4 px-2 py-2"
                  to="/login"
                >
                  <span className="absolute inset-x-0 bottom-0 h-[2px] bg-orange-500 transition-all group-hover:h-full group-active:bg-orange-500"></span>

                  <span className="relative font-medium text-orange-500 transition-colors group-hover:text-white">
                    Get Started
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font relative -top-20">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-10 rounded-lg bg-slate-800 text-white flex flex-col justify-center items-center">
                <FaUsers className="text-5xl text-orange-500"></FaUsers>
                <h2 className="title-font font-medium text-3xl text-white ">
                  20
                </h2>
                <p className="leading-relaxed">Members</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-10 rounded-lg bg-slate-800 text-white flex flex-col justify-center items-center">
                <FaSlideshare className="text-5xl text-orange-500"></FaSlideshare>
                <h2 className="title-font font-medium text-3xl text-white">
                  1 : 1
                </h2>
                <p className="leading-relaxed">Equality</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-10 rounded-lg bg-slate-800 text-white flex flex-col justify-center items-center">
                <FaClock className="text-5xl text-orange-500"></FaClock>
                <h2 className="title-font font-medium text-3xl text-white">
                  1 <span className="text-sm">Meeting</span>
                </h2>
                <p className="leading-relaxed">Monthly</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-10 rounded-lg bg-slate-800 text-white flex flex-col justify-center items-center">
                <FaHandshake className="text-5xl text-orange-500"></FaHandshake>
                <h2 className="title-font font-medium text-3xl text-white  ">
                  24/7
                </h2>
                <p className="leading-relaxed">Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
