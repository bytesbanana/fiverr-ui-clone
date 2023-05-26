'use client'
import React, { PropsWithChildren } from "react";
import { Navbar } from "@/components/navbar";

const Hero = () => {
  return (
    <div className="flex h-[680px] justify-center bg-green-800">
      <Navbar />
      <section className="flex w-full max-w-7xl flex-row items-center">
        <div className="flex max-w-[650px] flex-col gap-4">
          <h1 className="w-full text-white">
            <span className="font-semibold text-5xl">
              Find the right <i className="font-light font-serif">freelance service,</i> right away
            </span>
          </h1>
          <div className="flex w-full flex-row">
            <input
              type="text"
              className="flex-1 rounded-md rounded-r-none p-3 px-2"
              placeholder="Search for any service..."
            />
            <button className="rounded-md rounded-l-none bg-green-500 p-3 text-white">
              Search
            </button>
          </div>
          <div className="flex items-center gap-2 text-white">
            <h3>Popular:</h3>
            <ul className="flex gap-3">
              <li className="cursor-pointer rounded-full border border-white px-3 py-1 text-sm transition duration-200 ease-in-out hover:bg-slate-100 hover:text-slate-700">
                Website Design
              </li>
              <li className="cursor-pointer rounded-full border border-white px-3 py-1 text-sm transition duration-200 ease-in-out hover:bg-slate-100 hover:text-slate-700">
                {" "}
                WordPress
              </li>
              <li className="cursor-pointer rounded-full border border-white px-3 py-1 text-sm transition duration-200 ease-in-out hover:bg-slate-100 hover:text-slate-700">
                Logo Design
              </li>
              <li className="cursor-pointer rounded-full border border-white px-3 py-1 text-sm transition duration-200 ease-in-out hover:bg-slate-100 hover:text-slate-700">
                AI Services
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
