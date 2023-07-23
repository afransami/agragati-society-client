import React from "react";
import { FaSave } from "react-icons/fa";


const MemberDetailsForm = () => {
  return (
    <div className="overflow-x-auto my-4 space-y-4">

      {/* Country form start*/}
      <div className="w-full my-6 max-w-7xl">
        <div className="flex flex-col w-full max-w-7xl">
          <label className="text-sm" htmlFor="Label title">
            Label title
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered"
          />
        </div>
      </div>

      <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 w-full">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <label className="text-sm" htmlFor="Label title">
              Label title
            </label>
            <select className="select select-bordered w-full max-w-7xl">
              <option disabled selected>
                Choose
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col w-full max-w-7xl">
          <div className="flex flex-col">
            <label className="text-sm" htmlFor="Label title">
              Label title
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full  max-w-7xl"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col">
            <label className="text-sm" htmlFor="Label title">
              Label title
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full  max-w-7xl"
            />
          </div>
        </div>
      </div>

      <div className="lg:flex justify-between items-center gap-4 w-full">
        <div className="flex flex-col w-full max-w-7xl">
          <div className="flex flex-col">
            <label className="text-sm" htmlFor="Label title">
              Label title
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full  max-w-7xl"
            />
          </div>
        </div>
        <div className="flex flex-col w-full max-w-7xl">
          <div className="flex flex-col">
            <label className="text-sm" htmlFor="Label title">
              Label title
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full  max-w-7xl"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-7xl">
        <label className="text-sm" htmlFor="Label title">
          Label title
        </label>
        <textarea
          className="textarea textarea-bordered w-full  max-w-7xl"
          placeholder="Type here"
        ></textarea>
      </div>
      {/* Country form end*/}

      {/* Last form start*/}
      <div className="lg:flex">
        <div className="basis-[75%] border space-y-4">
          <div>
            <p>Form Title</p>
            <small>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
              officia.
            </small>
          </div>
          <div className="w-full my-6">
            <div className="flex flex-col">
              <label className="text-sm" htmlFor="Label title">
                Label title
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full  max-w-7xl"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col">
              <label className="text-sm" htmlFor="Label title">
                Label title
              </label>
              <select className="select select-bordered w-full max-w-7x">
                <option disabled selected>
                  Choose
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
          </div>

          <div className=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 w-full max-w-7xl">
            <div className="flex flex-col w-full max-w-7xl">
              <div className="flex flex-col">
                <label className="text-sm" htmlFor="Label title">
                  Label title
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full  max-w-7xl"
                />
              </div>
            </div>

            <div className="flex flex-col  w-full max-w-7xl">
              <div className="flex flex-col">
                <label className="text-sm" htmlFor="Label title">
                  Label title
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full  max-w-7xl"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full max-w-7xl">
            <label className="text-sm" htmlFor="Label title">
              Label title
            </label>
            <textarea
              className="textarea textarea-bordered w-full  max-w-7xl"
              placeholder="Type here"
            ></textarea>
          </div>
        </div>

        <div className="basis-[25%] border">
          <div>
            <p>Form Title</p>
          </div>

          <div className="w-full my-6">
            <div className="flex flex-col">
              <label className="text-sm" htmlFor="Label title">
                Label title
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full  max-w-7xl"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col">
              <label className="text-sm" htmlFor="Label title">
                Label title
              </label>
              <select className="select select-bordered w-full max-w-7x">
                <option disabled selected>
                  Choose
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col w-full max-w-7xl">
            <label className="text-sm" htmlFor="Label title">
              Label title
            </label>
            <textarea
              className="textarea textarea-bordered w-full  max-w-7xl"
              placeholder="Type here"
            ></textarea>
          </div>
        </div>
      </div>
      {/* Last form end*/}
    </div>
  );
};

export default MemberDetailsForm;