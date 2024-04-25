import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    fetch("project.json")
      .then((res) => res.json())
      .then((data) => setPortfolios(data));
  }, []);
  return (
    <div name="portfolio" className="pt-32 mb-10">
      <h2 className="text-center text-4xl mb-10 font-semibold text-sky-500">
        Portfolio
      </h2>
      <div className="projects p-5 grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {portfolios.map((data) => (
          <ProjectCard data={data} key={data.id}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
