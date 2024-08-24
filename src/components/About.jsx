import { BiLogoNetlify, BiLogoTailwindCss } from "react-icons/bi";
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  FaBootstrap,
  FaChrome,
  FaGithub,
  FaNode,
  FaNodeJs,
  FaReact,
  FaRobot,
} from "react-icons/fa";
import {
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoNpm,
} from "react-icons/io";

import { IoLogoFirebase} from "react-icons/io5";
import { SiAdobephotoshop, SiMongodb } from "react-icons/si";
import { TbBrandJavascript, TbBrandVscode } from "react-icons/tb";
import { FiFigma } from "react-icons/fi";

import { DiLinux } from "react-icons/di";
AOS.init();
const About = () => {


  return (
    <div name="about" className="pt-32 mb-10">
      <h2 className="text-center text-4xl mb-10 font-semibold text-sky-500">
        About Me
      </h2>
      <div data-aos="fade-right" data-aos-duration="1000" className="md:flex justify-between ">
        <div className="md:w-1/2 text-center md:text-left md:mr-10 p-5 xl:p-0">
          <h2 className="lg:text-3xl text-2xl pb-1 font-semibold text-white">
            Mohammad Ammar Uddin
          </h2>
          <h4 className="lg:text-xl font-semi text-white">MERN DEVELOPER</h4>
          <span>
            <hr className="pb-5" />
          </span>
          <p className="text-white md:text-left ">
            I'm Mohammad Ammar Uddin, a full-stack web developer skilled in
            ReactJS, MongoDB, Express, and NodeJS. Passionate about crafting
            responsive web solutions tailored to diverse business needs, I excel
            in frontend development with ReactJS and backend architecture with
            MongoDB, Express, and NodeJS. With a foundation in competitive
            programming and a commitment to staying updated with industry
            trends, I bring problem-solving prowess and innovation to every
            project. Let's collaborate to bring ideas to life through technology
            and creativity!
          </p>
        </div>

        <div data-aos="fade-left" data-aos-duration="1000"  className="md:w-1/2 pt-10 md:pt-0 md:text-left text-center lg:p-5 xl:p-0 md:p-0">
          <h2 className="lg:text-3xl text-2xl pb-1 font-semibold text-white pb-8">
            Education
          </h2>

          <span>
            <hr className="pb-5" />
          </span>
          <p className="text-white md:text-left">
            B.Sc Honours (Graduating Soon) in Computer Science & Engineering <br />
            International Islamic University Chittagong
          </p>
        </div>
      </div>

      {/* TEXT END  */}

      <div  className="pt-20 lg:p-4 ">
        <h2 className="lg:text-3xl text-center text-2xl pb-1 font-semibold text-white pb-8">
          SKILLS
        </h2>

        <div data-aos="fade-up" data-aos-duration="1000" className="lg:flex justify-between  grid grid-cols-2  gap-x-20 lg:gap-x-0 ml-20  md:ml-44 lg:ml-0  gap-3 pt-2">
          <div data-aos="flip-left">
            {" "}
            <IoLogoHtml5 className="text-sky-400 animate-bounce" size={50} />
            <span className="pl-1 font-semibold">HTML</span>
          </div>
          <div>
            {" "}
            <IoLogoCss3 className="text-sky-400 animate-bounce" size={50} />
            <span className="pl-1 font-semibold ">CSS3</span>
          </div>
          <div className="">
            {" "}
            <BiLogoTailwindCss className="text-sky-400 animate-bounce" size={50} />
            <span className="font-semibold">Tailwind CSS</span>
          </div>
          <div>
            {" "}
            <FaBootstrap className="text-sky-400 animate-bounce" size={50} />
            <span className=" font-semibold">Bootstrap</span>
          </div>
          <div>
            {" "}
            <TbBrandJavascript className="text-sky-400 animate-bounce" size={50} />
            <span className="font-semibold">JavaScript</span>
          </div>
          <div>
            {" "}
            <IoLogoJavascript className="text-sky-400 animate-bounce" size={50} />
            <span className="font-semibold">ES6</span>
          </div>
          <div>
            {" "}
            <FaReact className="text-sky-400 animate-bounce" size={50} />
            <span className=" font-semibold">ReactJS</span>
          </div>
          <div>
            {" "}
            <IoLogoFirebase className="text-sky-400 animate-bounce" size={50} />
            <span className=" font-semibold">Firebase</span>
          </div>
          <div>
            {" "}
            <FaNodeJs className="text-sky-400 animate-bounce" size={50} />
            <span className=" font-semibold">Express</span>
          </div>
          <div>
            {" "}
            <SiMongodb className="text-sky-400 animate-bounce" size={50} />
            <span className=" font-semibold">MongoDB</span>
          </div>
          <div>
            {" "}
            <FaNode className="text-sky-400 animate-bounce" size={50} />
            <span className=" font-semibold ">NodeJS</span>
          </div>
          <div>
            {" "}
            <DiLinux className="text-sky-400 animate-bounce" size={50} />
            <span className=" font-semibold ">Linux</span>
          </div>
        </div>

        {/* skills ended  */}

        {/* TOOLS  */}

        <div  className="pt-10">
          <h2 className="lg:text-3xl text-center text-2xl pt-8 font-semibold text-white pb-8">
            TOOLS
          </h2>
          <div data-aos="fade-down" data-aos-duration="1000" className="lg:flex justify-around grid grid-cols-2 gap-4 p-3 pt-4 pb-3">
            <div className="bg-gray-700 rounded-xl p-3 flex flex-col items-center justify-center hover:shadow-lg hover:shadow-[#00eeff] hover:outline hover:outline-[#00eeff]">
              {" "}
              <TbBrandVscode size={40} className="animate-pulse text-[#00eeef] " />
              <span>VS Code</span>
            </div>
            <div className="bg-gray-700 rounded-xl p-3 flex flex-col items-center justify-center hover:shadow-lg hover:shadow-[#00eeff]  hover:outline hover:outline-[#00eeff]">
              {" "}
              <FaChrome size={40} className="animate-pulse text-[#00eeef] " />
              <span>Chrome</span>
            </div>
            <div className="bg-gray-700 rounded-xl p-3 flex flex-col items-center justify-center  hover:shadow-lg hover:shadow-[#00eeff] hover:outline hover:outline-[#00eeff]">
              {" "}
              <FaGithub size={40} className="animate-pulse text-[#00eeef] " />
              <span>Github</span>
            </div>
            <div className="bg-gray-700 rounded-xl p-3 flex flex-col items-center justify-center hover:shadow-lg hover:shadow-[#00eeff] hover:outline hover:outline-[#00eeff]">
              {" "}
              <FiFigma size={40} className="animate-pulse text-[#00eeef] " />
              <span>Figma</span>
            </div>
            <div className="bg-gray-700 rounded-xl p-3 flex flex-col items-center justify-center hover:shadow-lg hover:shadow-[#00eeff]  hover:outline hover:outline-[#00eeff]">
              {" "}
              <IoLogoNpm size={40} className="animate-pulse text-[#00eeef] " />
              <span>NPM</span>
            </div>
            <div className="bg-gray-700 rounded-xl p-3 flex flex-col items-center justify-center hover:shadow-lg hover:shadow-[#00eeff] hover:outline hover:outline-[#00eeff]">
              {" "}
              <SiAdobephotoshop size={40} className="animate-pulse text-[#00eeef] " />
              <span>Photoshop</span>
            </div>
            <div className="bg-gray-700 rounded-xl p-3 flex flex-col items-center justify-center hover:shadow-lg hover:shadow-[#00eeff] hover:outline hover:outline-[#00eeff]">
              {" "}
              <FaRobot size={40} className="animate-pulse text-[#00eeef] " />
              <span>Ai</span>
            </div>
         
            <div className="bg-gray-700 rounded-xl p-3 flex flex-col items-center justify-center hover:shadow-lg hover:shadow-[#00eeff]  hover:outline hover:outline-[#00eeff]">
              {" "}
              <BiLogoNetlify  size={40} className="animate-pulse text-[#00eeef] " />
              <span>Netlify</span>
            </div>
            <div className="bg-gray-700 rounded-xl p-3 flex flex-col items-center justify-center hover:shadow-lg hover:shadow-[#00eeff]  hover:outline hover:outline-[#00eeff]">
              {" "}
              <DiLinux  size={40} className="animate-pulse text-[#00eeef] " />
              <span>Linux</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
