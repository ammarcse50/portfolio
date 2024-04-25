import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import dp from "/dp.png";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <div
    
      
      className="md:flex space-y-20   md:justify-between  items-center mt-20  "
    >
      <div className="md:w-1/2 md:p-4 space-y-9 text-center md:text-left">
        <h2 className="lg:text-2xl text-3xl font-bold text-white">
          Hello, I'm <br />
          <span className="lg:text-3xl  text-3xl text-[#00eeff]">
            Mohammad Ammar Uddin
          </span>
        </h2>
        <span className="">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "WEB DEVELOPER",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "ETHICAL HACKER",
              1000,
              "GRAPHICS DESIGNER",
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="text-3xl xl:text-5xl"
            style={{
              //   fontSize: "3rem",
              fontWeight: "font-bold",
              display: "inline-block",
              color: "#00eeff",
            }}
            repeat={Infinity}
          />
        </span>

        <p className="text-gray-400">
          Fullstack web developer skilled in ReactJS, MongoDB, Express, and
          NodeJS. I am also well-versed in core concepts of competitive
          programming.
        </p>

        <div className="social flex justify-center md:justify-start gap-6 ">
          <a href="https://www.linkedin.com/in/mohammad-ammar-96b551254/">
          
            <FaLinkedin className="text-4xl text-sky-500 hover:text-[#00eeff]" />{" "}
          </a>

          <a href="https://www.facebook.com/profile.php?id=61551789883517">
          
            <FaFacebook className="text-4xl text-sky-500 hover:text-[#00eeff]" />
          </a>
          <a href="https://github.com/ammarcse50">
          
            <FaGithub className="text-4xl text-sky-500 hover:text-[#00eeff]" />
          </a>

          <a href="https://api.whatsapp.com/send?phone=8801883128299">
          
            <FaWhatsapp className="text-4xl text-sky-500 hover:text-[#00eeff]" />
          </a>
        </div>
        <div>
          <a href="/resume.pdf" download={true}>
            <button className="btn font-semibold text-xl btn-outline border-[#00eeff] transition duration-1000 text-white  hover:bg-[#00eeff]">
              Download CV
            </button>
          </a>
        </div>
      </div>
      <div className="md:w-1/3 p-5 mx-auto rounded-full">
        <img src={dp} className="rounded-lg " alt=""  />
      </div>
    </div>
  );
};

export default Header;
