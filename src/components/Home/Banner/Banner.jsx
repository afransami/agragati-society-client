import React from "react";
import { Link } from "react-router-dom";
import { FaClock, FaBusAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { MdWifiCalling3 } from "react-icons/md";
import banner from "../../../assets/banner1.jpg";

const Banner = () => {
  return (
    <div>
      {/* <section className=" relative bg-[url(https://img.freepik.com/free-photo/traffic-vehicle-urban-reflections-city_1112-973.jpg?w=740&t=st=1688746280~exp=1688746880~hmac=c7b0c4eb2cb49318784d471c5884476705c637fe7aefe268eb0dd4e5d4b60eab)] bg-cover lg:h-[700px] h-auto bg-center bg-no-repeat"> */}
      <section className=" relative bg-[{banner}] bg-cover lg:h-[800px] h-auto bg-center bg-no-repeat" style={{backgroundImage:`url(${banner})`,backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        // height: '500px', 
        width: '100%', 
    }}>
        {/* <div className="absolute inset-0 bg-gradient-to-r w-full from-[#151515] to-[rgba(21, 21, 21, 0)]"></div> */}
        <div className="absolute inset-0  w-full bg-gradient-to-r from-[#1b1b1b] to-[rgba(21, 21, 21, 0)]"></div>

        <div className="relative -top-1/6 max-w-screen-xl py-32 px-4 sm:px-6 mx-auto lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl space-y-4 ltr:sm:text-left rtl:sm:text-right">
            <div className="text-3xl text-start font-extrabold sm:text-5xl">
              <h1 className="text-white mb-4 "> Agragati Society</h1>
              <h1 className="block text-start font-extrabold text-orange-500">
              people united, benefits shared, progress achieved
              {/* For working together, mutual gain and shared decisions */}
              </h1>
            </div>

            <p className="mt-4 text-start max-w-lg sm:text-xl/relaxed text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className=" mt-4 flex justify-start items-center gap-4">
              <div>
                <Link
                  className="group relative inline-block overflow-hidden border-b-4 px-8 py-2"
                  to="/"
                >
                  <span className="absolute inset-x-0 bottom-0 h-[2px] bg-orange-600 transition-all group-hover:h-full group-active:bg-orange-600"></span>

                  <span className="relative font-medium text-orange-400 transition-colors group-hover:text-white">
                    Get Started
                  </span>
                </Link>
              </div>

              <div>
                <Link
                  className="group relative inline-block overflow-hidden border-b-4 px-8 py-2"
                  to="/"
                >
                  <span className="absolute inset-x-0 bottom-0 h-[2px] bg-orange-600 transition-all group-hover:h-full group-active:bg-orange-600"></span>

                  <span className="relative font-medium text-orange-400 transition-colors group-hover:text-white">
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
              <div className="border-2 border-gray-200 px-4 py-10 rounded-lg bg-gray-900 text-white flex flex-col justify-center items-center">
                <ImLocation2 className="text-5xl text-orange-500"></ImLocation2>
                <h2 className="title-font font-medium text-3xl text-white ">
                  46
                </h2>
                <p className="leading-relaxed">Stop Places</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-10 rounded-lg bg-gray-900 text-white flex flex-col justify-center items-center">
                <MdWifiCalling3 className="text-5xl text-orange-500"></MdWifiCalling3>
                <h2 className="title-font font-medium text-3xl text-white">
                  1.3K
                </h2>
                <p className="leading-relaxed">Tourist</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-10 rounded-lg bg-gray-900 text-white flex flex-col justify-center items-center">
                <FaClock className="text-5xl text-orange-500"></FaClock>
                <h2 className="title-font font-medium text-3xl text-white">
                  30
                </h2>
                <p className="leading-relaxed">Daily Trip</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-10 rounded-lg bg-gray-900 text-white flex flex-col justify-center items-center">
                <FaBusAlt className="text-5xl text-orange-500"></FaBusAlt>
                <h2 className="title-font font-medium text-3xl text-white  ">
                  1
                </h2>
                <p className="leading-relaxed">Per Hour</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
