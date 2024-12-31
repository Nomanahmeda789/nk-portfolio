/**
 * @copyright 2024 Nomanahmedkhan
 * @license Apache-2.0
 */

import ProjectCard from "./ProjectCard";
const works = [
  {
    imgSrc: "/images/project-1.jpg",
    title: "Veed.io",
    tags: ["API", "GD", "Development"],
    projectLink: "https://www.veed.io/",
  },
  {
    imgSrc: "/images/project-2.jpg",
    title: "Janus-sadvisory ",
    tags: ["API", "DEV"],
    projectLink: "https://janusadvisorysolutions.com/",
  },
  {
    imgSrc: "/images/project-3.jpg",
    title: "Mydailychoice",
    tags: ["Dev", "API", "e-commerce"],
    projectLink: "https://mydailychoice.com/",
  },
  {
    imgSrc: "/images/project-4.jpg",
    title: "North East Star",
    tags: ["Web-design", "Development"],
    projectLink: "http://northestar.com/",
  },
  {
    imgSrc: "/images/project-5.jpg",
    title: "Oparko",
    tags: ["Parking", "Development"],
    projectLink: "https://oparko.com/",
  },
  {
    imgSrc: "/images/project-6.jpg",
    title: "Mlm-protec",
    tags: ["Web-design", "Development"],
    projectLink: "http://mlmprotec.com/",
  },
];
const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container">
        <h2 className="headline-2 mb-8 revel-up">My portfolio highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
          {works.map(({ imgSrc, tags, title, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              tags={tags}
              title={title}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
