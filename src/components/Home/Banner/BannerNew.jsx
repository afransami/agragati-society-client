import React from 'react';

const BannerNew = () => {
    return (
        <section className="bg-slate-800 text-white">
  <div
    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div className="mx-auto max-w-3xl text-center">
      <h1
        // className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
        className="my-4 bg-clip-text font-extrabold text-white "
      ><span className='text-3xl sm:text-5xl font-Montserrat '><span className=' text-orange-500 text-7xl underline'>A</span>gragati <span className=' text-orange-500 text-7xl underline'>S</span>ociety</span> <br /><br />

        <span className="text-xl sm:text-3xl mt-4 font-semibold font-Montserrat"> People united, Benefits shared, <br /> Progress achieved </span>
      </h1>

   

{/* Base */}

<div className='flex justify-center items-center gap-0'>
<a
  className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
  href="/download"
>
  <span
    className="absolute inset-0 border border-orange-500 group-active:border-orange-500"
  ></span>
  <span
    className="block border border-orange-500 bg-orange-500 px-12 py-3 transition-transform active:border-orange-500 active:bg-orange-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
  >
    Contact Us
  </span>
</a>

<a
  className="group relative inline-block text-sm font-medium text-orange-600 focus:outline-none focus:ring active:text-orange-500"
  href="/download"
>
  <span className="absolute inset-0 border border-current"></span>
  <span
    className="block border border-current bg-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
  >
    Know More
  </span>
</a>
</div>



      {/* <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/get-started"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="/about"
        >
          Learn More
        </a>
      </div> */}
    </div>
  </div>
</section>
    );
};

export default BannerNew;