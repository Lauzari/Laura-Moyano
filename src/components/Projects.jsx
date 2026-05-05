import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
    
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-green-300 mb-6">
          Sobre mí
        </h2>
        <p className="text-gray-300 text-xl leading-relaxed max-w-3xl">
          Soy una apasionada del desarrollo y el testing. Mi enfoque combina la creación de 
          aplicaciones robustas con un pensamiento crítico orientado a la calidad (QA), 
          asegurando que cada línea de código no solo funcione, sino que brinde la mejor experiencia al usuario.
        </p>
      </div>

      
      <h2 className="text-4xl font-bold text-green-300 mb-10">
        Proyectos principales 
      </h2>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}