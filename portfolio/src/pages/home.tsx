import { ProjectCard } from "../components/projectCard";
import { schoolProjects } from "../projects/schoolProjects";

export const HomePage = () => {
  return (
    <div className="font-primary text-leiDevBlue">
      <h1 className="text-xl ml-2 md:text-3xl md:mt-20 md:ml-5">
        Welcome to my portfolio!
      </h1>
      <h2 className="text-3xl md:text-8xl mb-10 md:mb-30 ml-2 mt-10 md:ml-5">
        I'm Laura Lei!
      </h2>
      <section>
        <h3 className="text-xl md:text-2xl px-5 w-full border-b-1">
          Noroff projects:
        </h3>
        <div className="flex flex-wrap justify-evenly w-full gap-5 h-full p-2 md:p-5">
          {schoolProjects.projectData.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};
