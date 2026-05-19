import { useState, useRef, useEffect } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Projects() {
  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  // Efecto para centrar cuando se abre "Sobre mí"
  useEffect(() => {
    if (showAbout && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [showAbout]);

  // centrar cuando se abren los proyectos
  useEffect(() => {
    if (showProjects && projectsRef.current) {
      // timeout para que la animación de apertura termine antes de scrollear
      setTimeout(() => {
        projectsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [showProjects]);

  return (
    <section className="mt-0 py-10 px-6 max-w-6xl mx-auto">
      
   
      <div className="mb-6" ref={aboutRef}>
        <button 
          onClick={() => setShowAbout(!showAbout)}
          className="w-full flex justify-between items-center bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-xl hover:bg-white/10 transition-all shadow-lg"
        >
          <h2 className="text-3xl font-bold text-green-300">Sobre mí</h2>
          {showAbout ? <FaChevronUp className="text-green-300" /> : <FaChevronDown className="text-green-300" />}
        </button>

        {showAbout && (
          <div className="mt-4 p-6 bg-white/5 rounded-xl border border-white/5 animate-fadeIn">
            <p className="text-gray-408 text-xl leading-relaxed max-w-3xl">
             Soy una apasionada del desarrollo y el testing. Mi enfoque combina la creación de 
              aplicaciones robustas con un pensamiento crítico orientado a la calidad (QA), 
              asegurando que cada línea de código no solo funcione, sino que brinde la mejor experiencia al usuario.
            </p>
          </div>
        )}
      </div>

      
      <div className="mb-6" ref={projectsRef}>
        <button 
          onClick={() => setShowProjects(!showProjects)}
          className="w-full flex justify-between items-center bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-xl hover:bg-white/10 transition-all shadow-lg"
        >
          <h2 className="text-3xl font-bold text-green-300">Proyectos principales</h2>
          {showProjects ? <FaChevronUp className="text-green-300" /> : <FaChevronDown className="text-green-300" />}
        </button>

        {showProjects && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10 animate-fadeIn">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}