import { SlActionRedo } from "react-icons/sl";

const Experience = () => {
  return (
    <div name="experience" className="">
      <div>
        <h2 className="font-bold xl:text-4xl pt-32 text-sky-500 text-center mb-4">
          Experience
        </h2>
        {/* <span>
          <hr className="mb-6" />
        </span> */}
        <div className="mx-auto md:w-9/12  bg-gray-700   p-10 rounded-lg text-white">
          <div className="flex items-center justify-between">
            {" "}
            <h2 className="font-bold md:text-xl">@Digital Lab</h2>
            <p>Chittagong Bangladesh</p>
          </div>
          <div className="flex items-center justify-between mb-4">
            {" "}
            <h2 className="md:text-xl italic">Trainee Jr. Software Engineer</h2>
            <p className="p-2 md:p-0">January 2025 – March 2025 </p>
          </div>
          <div className="">
            <span className="flex items-start">
              <SlActionRedo className="mr-2 mt-1 text-sky-500" />
              Engineered scalable web apps with Next.js, Prisma, and Redis, optimizing queries and caching for high performance.
            </span>
            <span className="flex items-start">
              <SlActionRedo className="mr-2 mt-1  text-sky-500" />
              Integrated SMS APIs and built an async SMS Scheduler with DB locking, reducing message delivery conflicts by 90%.
            </span>
            <span className="flex items-start">
              <SlActionRedo className="mr-2 mt-1 text-sky-500" />
              Gained deep expertise in RDBMS, focusing on transactions, concurrency, and data integrity across full-stack applications.

            </span>
            <span className="flex items-start">
              <SlActionRedo className="mr-2 mt-1 text-sky-500" />
              Deployed and maintained apps using Docker, CapRover, and cloud/Linux environments, cutting deployment time by 50%.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
