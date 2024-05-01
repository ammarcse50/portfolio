const ProjectCard = ({ data }) => {
  const { img, title, desc, link1, link2 } = data;
  return (
    <div className="card card-compact border  xl:p-3 bg-base-100 shadow-xl hover:shadow-lg hover:shadow-[#00eeff] ">
      <figure>
        <img src={data.img} className="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.title}</h2>
        <p className="text-lg font-semibold">{data.desc}</p>
        <div className=" flex justify-between">
          <a href={link1}>
            <button className="btn font-semibold hover:shadow-xl hover:shadow-[#00eeff] text-xl btn-outline border-[#00eeff] transition duration-1000 text-white  hover:bg-[#00eeff]">Demo</button>
          </a>
          <a href={link2}>
            <button className="btn font-semibold hover:shadow-xl hover:shadow-[#00eeff] text-xl btn-outline border-[#00eeff] transition duration-1000 text-white  hover:bg-[#00eeff]">Code</button>
          </a>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default ProjectCard;
