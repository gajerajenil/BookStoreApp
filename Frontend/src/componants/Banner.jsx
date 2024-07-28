import React from 'react';
import banner from "../../public/Banner.jpg";

export default function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-20"> {/* Adjust margin-top as needed */}
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, Welcome here to learn something <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deleniti ratione tenetur. Aut, consectetur eaque ex non aspernatur sit nam officia cumque officiis cum suscipit repellat.
            </p>
            <label className="input input-bordered flex items-center gap-2">
              Email
              <input type="text" className="grow" placeholder="daisy@site.com" />
            </label>
          </div>
          <button className="mt-6 btn btn-secondary">Secondary</button>
        </div>
        <div className="order-1 w-full md:w-1/2">
          <img src={banner} className="w-92 h-92" alt="" />
        </div>
      </div>
    </>
  );
}
