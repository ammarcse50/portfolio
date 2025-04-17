import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import dp from "/ammar.png";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Header = () => {
  return (
    <div
      name="home"
      className="md:flex space-y-20   md:justify-between  items-center pt-20 mb-10  "
    >
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="md:w-1/2 md:p-4 space-y-9 text-center md:text-left"
      >
        <h2 className="lg:text-2xl text-3xl pt-4 font-bold text-white">
          Hello, I'm <br />
          <span className="lg:text-3xl  text-3xl text-[#00eeff]">
            Mohammad Ammar Uddin
          </span>
        </h2>
        <span className="">
          <TypeAnimation
        sequence={[
          "I build things for the web.",
          1000,
          "Full-Stack Developer",
          1000,
          "MERN Stack Developer",
          1000,
          "Backend Developer",
          1000,
        ]}
        
            wrapper="span"
            speed={50}
            className="text-3xl xl:text-4xl"
            style={{
              //   fontSize: "3rem",
              fontWeight: "font-bold",
              display: "inline-block",
              color: "#00eeff",
            }}
            repeat={Infinity}
          />
        </span>

        <p className="text-gray-400 p-4 md:p-0 text-[15px] md:text-lg">
        Junior Software Engineer | Full-Stack Developer | Problem Solver
        Motivated and detail-oriented Junior Software Engineer with 3+ months of hands-on experience in full-stack web development. Proficient in C/C++, JavaScript, TypeScript, and Python, with a strong foundation in modern frameworks and technologies. Adept at building reliable, scalable, and maintainable web applications. Driven by a deep passion for solving complex problems and continuously improving as a developer.
          <a
            href="https://www.linkedin.com/in/mohammad-ammar-uddin"
            className="text-sky-500"
          >
            Learn More
          </a>
        </p>

        <div className="social flex justify-center md:justify-start gap-6 ">
          <a
            className=""
            href="https://www.linkedin.com/in/mohammad-ammar-uddin"
          >
            <FaLinkedin className="text-4xl text-sky-500 hover:text-[#00eeff] hover:shadow-xl hover:shadow-[#00eeff] " />{" "}
          </a>

          <a href="https://www.facebook.com/profile.php?id=61551789883517">
            <FaFacebook className="text-4xl text-sky-500 hover:text-[#00eeff] hover:shadow-xl hover:shadow-[#00eeff]" />
          </a>
          <a href="https://github.com/ammarcse50">
            <FaGithub className="text-4xl text-sky-500 hover:text-[#00eeff] hover:shadow-xl hover:shadow-[#00eeff]" />
          </a>

          <a href="https://api.whatsapp.com/send?phone=8801883128299">
            <FaWhatsapp className="text-4xl text-sky-500 hover:text-[#00eeff] hover:shadow-xl hover:shadow-[#00eeff]" />
          </a>
        </div>
        <a className="block lg:hidden" href="/Mohammad_Ammar_Uddin_FullStackDeveloper.pdf" download={true}>
        <button className="btn font-semibold hover:shadow-xl hover:shadow-[#00eeff] text-xl btn-outline border-[#00eeff] transition duration-1000 text-white  hover:bg-[#00eeff]">
          Resume
        </button>
      </a>

      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        className="md:w-1/3 p-5 mx-auto "
      >
        <img src={dp} className="rounded-full" alt="" />
      </div>
    </div>
  );
};

export default Header;
