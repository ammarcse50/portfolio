import AOS from "aos";
import { SlActionRedo } from "react-icons/sl";
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
      <div className="lg:flex   p-3 lg:p-0   justify-between gap-3">
        {" "}
        <div
          data-aos="fade-up-right"
          data-aos-duration="1000"
          className="lg:w-1/2 mb-3 lg:mb-0  hover:outline hover:outline-[#00eeff] bg-gray-700 p-10 rounded-lg text-white space-y-2"
        >
          <h2 className="text-xl md:text-3xl font-semibold mb-6 text-sky-500">
            Frontend Services
          </h2>
          <div className="">
            <span className="flex items-start">
              <SlActionRedo className="mr-2 mt-1 text-sky-500" />
              Integrate third-party APIs (e.g., SMS) with Axios for seamless
              communication.
            </span>
            <span className="flex items-start">
              <SlActionRedo className="mr-2 mt-1  text-sky-500" />
              Build responsive, interactive UIs with React and Next.js.
            </span>
            <span className="flex items-start">
              <SlActionRedo className="mr-2 mt-1 text-sky-500" />
              Optimize performance with TanstackQuery and efficient state
              management.
            </span>
            <span className="flex items-start">
              <SlActionRedo className="mr-2 mt-1 text-sky-500" />
              Develop mobile-first, SEO-friendly apps using HTML, CSS, and
              JavaScript.
            </span>
          </div>
        </div>
        <div
          data-aos="fade-up-left"
          data-aos-duration="1000"
          className="lg:w-1/2 h-full w-full  hover:outline hover:outline-[#00eeff] bg-gray-700 p-10 rounded-lg text-white space-y-2"
        >
          <h2 className="text-sky-500 text-xl md:text-3xl font-semibold mb-6">
            Backend Services
          </h2>
          <div className="">
            <span className="flex items-start">
              <SlActionRedo className="mr-2 mt-1 text-sky-500" />
              Create scalable APIs and backend systems using Node.js,
              Express.js, and MongoDB.
            </span>
            <span className="flex items-start">
              <SlActionRedo className="mr-2 mt-1  text-sky-500" />
              Design and manage databases with MySQL, MariaDB, and MongoDB.
            </span>
            <span className="flex items-start">
              <SlActionRedo className="mr-2 mt-1 text-sky-500" />
              Implement secure JWT authentication and role-based access control.
            </span>
            <span className="flex items-start">
              <SlActionRedo className="mr-2 mt-1 text-sky-500" />
              Deploy applications using Docker, CapRover, and cloud services
              for continuous delivery.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
