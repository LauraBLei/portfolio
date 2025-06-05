import { ProjectCard } from "../components/projectCard";
import { schoolProjects } from "../projects/schoolProjects";

export const HomePage = () => {
  return (
    <div className="font-primary text-leiDevBlue">
      <h1 className="text-3xl mt-20 ml-5">Welcome to my portfolio!</h1>
      <h2 className="text-8xl mb-30 mt-10 ml-5">I'm Laura Lei!</h2>
      <section>
        <h3 className="text-2xl px-5 w-full border-b-1">Noroff projects:</h3>
        <div className="flex flex-wrap justify-evenly w-full gap-5 h-full p-2 md:p-5">
          {schoolProjects.projectData.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};
