
import AOS from "aos";
AOS.init();
const Services = () => {

  return (
    <div name="services" className="pt-32 p-4">
      <h2 className="text-center text-4xl mb-10 font-semibold text-sky-500">
        My Services
      </h2>

      <span>
        <hr className="mb-6" />
      </span>
      <div  className="lg:flex   p-3 lg:p-0   justify-between gap-3">
        {" "}
        <div data-aos="fade-up-right" data-aos-duration="1000" className="lg:w-1/2 mb-3 lg:mb-0  hover:outline hover:outline-[#00eeff] bg-gray-700 p-5 rounded-t-lg space-y-2">
          <h2 className="text-3xl font-semibold mb-6 text-sky-500">
            Frontend Services
          </h2>

          <div className="flex items-center text-white">
            <svg
              className="text-sky-500"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
            </svg>

            <h4>User Interface Design.</h4>
          </div>
          <div className="flex   text-white">
            <svg
              className="text-sky-500 mt-1"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
            </svg>
            Responsive web design for <br /> all devices.
          </div>
          <div className="flex  text-white">
            <svg
              className="text-sky-500 mt-1"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
            </svg>
            <h4>Component-based Architecture.</h4>
          </div>
          <div className="flex  text-white">
            <svg
              className="text-sky-500 mt-1"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
            </svg>
            <h4>
              Performance Optimization using <br />
              latest technologies.
            </h4>
          </div>
          <div className="flex  text-white">
            <svg
              className="text-sky-500 mt-1"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
            </svg>
            <h4>
              Ensuring consistent performance <br />
              on Cross-browser Compatibility.
            </h4>
          </div>
          <div className="flex items-center text-white">
            <svg
              className="text-sky-500"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
            </svg>
            <h4>Accessibility</h4>
          </div>
        </div>
        <div data-aos="fade-up-left" data-aos-duration="1000" className="lg:w-1/2 h-full w-full  hover:outline hover:outline-[#00eeff] bg-gray-700 p-5 rounded-t-lg space-y-2">
          <h2 className="text-sky-500 text-3xl font-semibold mb-6">
            Backend Services
          </h2>

          <div className="flex inline-block  text-white">
            <svg
              className="text-sky-500 mt-1"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
            </svg>
            <span className="">
              Restful api development .
            </span>
          </div>
          <div className="flex inline-block text-white">
            <svg
              className="text-sky-500 mt-1"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
            </svg>
            <span className="">
             Ensuring good communication.
            </span>
          </div>
          <div className="flex  text-white">
          <svg className="text-sky-500 mt-1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path></svg>
            <span className="">Database design and implementation.</span>
          </div>
          <div className="flex  text-white">
          <svg className="text-sky-500 mt-1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path></svg>
            <span>Server-side logic implementation.</span>
          </div>
          <div className="flex  text-white">
          <svg className="text-sky-500 mt-1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path></svg>
            <span>
              Authentication & authorization & <br /> implementing security by
              pentesting web{" "}
            </span>
          </div>
          <div className="flex  text-white">
          <svg className="text-sky-500 mt-1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path></svg>
            <span>Data security ensuring environment variables .</span>
          </div>
          <div className="flex  text-white">
          <svg className="text-sky-500 mt-1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path></svg>
            <span>
              Scalability and performance optimization
              <br /> implementing raw code
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
