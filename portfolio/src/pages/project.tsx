import { useSearchParams } from "react-router-dom";
import { schoolProjects } from "../projects/schoolProjects";
import { DescriptionCrop } from "../components/textCrop";
import { Copy } from "lucide-react";
import { useState } from "react";

export const ProjectPage = () => {
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get("project");
  const school = schoolProjects.projectData;
  const project = school.find((p) => p.id === projectId);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    const url = `${window.location.origin}/project?project=${projectId}`;

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000); // Reset after 5 seconds
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="text-leiDevBlue max-w-[1440px] font-primary flex gap-5 flex-wrap">
      <div className=" max-h-[300px] md:max-h-[600px] w-full h-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={project?.image.src}
          alt={project?.image.src}
        />
      </div>
      <div className="w-full px-2 md:px-5 flex flex-col gap-5">
        <div className="flex justify-between">
          <p className="text-2xl">{project?.name}</p>
          <button
            onClick={handleCopyLink}
            className={`hover-effect transition-colors duration-300 ${
              copied ? "text-green-500" : "text-leiDevBlue"
            }`}
            aria-label="Copy project link"
          >
            <Copy />
          </button>
        </div>
        <div>
          <h2 className="text-xl">Description</h2>
          <p className="border-y-1 py-2">
            <DescriptionCrop
              text={project ? project.text : "Description coming soon"}
              limitNumber={300}
            />
          </p>
        </div>
        <div>
          <h2 className="text-xl">Fixes:</h2>
          <p className="border-y-1 py-2">
            <DescriptionCrop
              text={project?.fix ? project.fix : "No fixes have been made"}
              limitNumber={300}
            />
          </p>
        </div>
        <div className="my-2">
          <h2 className="font-semibold">Dev Tools</h2>
          <div className="border-[1px] border-leiDevBlue rounded-md py-2 flex justify-evenly flex-wrap gap-5">
            {project?.["web development tools"].map((tool) => (
              <p className="text-lg font-semibold" key={tool}>
                {tool}
              </p>
            ))}
          </div>
        </div>
        `
        <div className="flex w-full">
          <a
            href={project?.["repo-link"]}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md text-center bg-leiDevBlue text-MatteBlack font-semibold shadow-md py-2 flex-1 hover-effect"
          >
            Repository
          </a>
          <a
            href={project?.["livepage-link"]}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md text-center  bg-leiDevBlue text-MatteBlack font-semibold shadow-md py-2 flex-1 hover-effect"
          >
            Live Pages
          </a>
        </div>
        `
      </div>
    </div>
  );
};
