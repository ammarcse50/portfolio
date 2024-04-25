import React from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const Services = () => {
  return (
    <div name="services" className="pt-32 ">
      <h2 className="text-center text-4xl mb-10 font-semibold text-sky-500">
        My Services
      </h2>
      <span>
        <hr className="mb-6" />
      </span>
      <div className="lg:flex   p-3 lg:p-0   justify-between gap-3">
        {" "}
        <div className="lg:w-1/2 mb-3 lg:mb-0  hover:outline hover:outline-[#00eeff] bg-gray-700 p-5 rounded-t-lg space-y-2">
          <h2 className="text-3xl font-semibold mb-6 text-sky-500">
            Frontend Services
          </h2>

          <span className="flex items-center text-white">
            <VscDebugBreakpointLog className="text-sky-500" />
            <h4>User Interface Design.</h4>
          </span>
          <span className="flex items-center text-white">
            <VscDebugBreakpointLog className="text-sky-500 mb-6 sm:mb-0 mt-6 sm:mt-0" />
            <h4>Responsive web design for all devices.</h4>
          </span>
          <span className="flex items-center text-white">
            <VscDebugBreakpointLog className="text-sky-500" />
            <h4>Component-based Architecture.</h4>
          </span>
          <span className="flex items-center text-white">
            <VscDebugBreakpointLog className="text-sky-500 mb-6 sm:mb-0 md:mb-6 " />
            <h4>
              Performance Optimization using <br />
              latest technologies.
            </h4>
          </span>
          <span className="flex items-center text-white">
            <VscDebugBreakpointLog className="text-sky-500 mb-12 md:mb-0 mt-6 sm:mt-0 md:mb-5 " />
            <h4>
              Ensuring consistent performance <br />
             on Cross-browser Compatibility.
            </h4>
          </span>
          <span className="flex items-center text-white">
            <VscDebugBreakpointLog className="text-sky-500" />
            <h4>Accessibility</h4>
          </span>
        </div>
        <div className="lg:w-1/2 h-full w-full  hover:outline hover:outline-[#00eeff] bg-gray-700 p-5 rounded-t-lg space-y-2">
          <h2 className="text-sky-500 text-3xl font-semibold mb-6">
            Backend Services
          </h2>

          <span className="flex text-white">
            <VscDebugBreakpointLog className="text-sky-500  mt-1" />
            Restful api development and ensuring good <br /> communication
            through frontend and backend.
          </span>
          <span className="flex items-center text-white">
            <VscDebugBreakpointLog className="text-sky-500 " />
            <h4>Database design and implementation.</h4>
          </span>
          <span className="flex items-center text-white">
            <VscDebugBreakpointLog className="text-sky-500 " />
            <h4>Server-side logic implementation.</h4>
          </span>
          <span className="flex items-center text-white">
            <VscDebugBreakpointLog className="text-sky-500  mb-6" />
            <h4>
              Authentication & authorization & <br /> implementing security by
              pentesting web{" "}
            </h4>
          </span>
          <span className="flex items-center text-white">
            <VscDebugBreakpointLog className="text-sky-500 " />
            <h4>Data security ensuring environment variables .</h4>
          </span>
          <span className="flex items-center text-white">
            <VscDebugBreakpointLog className="text-sky-500 mb-6" />
            <h4>
              Scalability and performance optimization
              <br /> implementing raw code
            </h4>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services;
