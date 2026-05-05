import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="py-20 px-10">
      <h2 className="text-4xl font-bold text-green-300 mb-10">
        Proyectos principales
      </h2>

      <div className="grid md:grid-cols-1 gap-16">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}