import { Link } from "react-router";
import type { Project } from "../Types/common";

interface ProjectCard {
  project: Project;
}
export const ProjectCard = ({ project }: ProjectCard) => {
  return (
    <div className="md:max-w-[300px]  items-center flex flex-col mb-5">
      <Link
        to={`/project?project=${project.id}`}
        className="md:max-w-[300px] hover-effect rounded-md max-h-[200px] flex flex-shrink-0 h-full w-full overflow-hidden "
      >
        <img
          src={project.image.src}
          alt={project.image.alt}
          className="w-full h-full object-cover"
        />
      </Link>
      <p className="text-xl py-2">{project.name}</p>
      <p className="text-sm border-y-[1px] border-leiDevBlue py-1">
        {project.shortText}
      </p>
    </div>
  );
};
