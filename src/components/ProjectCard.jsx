import { useState } from "react";

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="bg-white/10 backdrop-blur-lg p-6 rounded-xl cursor-pointer hover:scale-105 transition"
    >
      <h3 className="text-2xl font-bold text-blue-300">
        {project.title}
      </h3>

      {open && (
        <div className="mt-4">
          <img
            src={project.image}
            className="rounded-lg mb-4"
          />

          <p className="text-white">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-3">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="bg-blue-500/30 px-2 py-1 rounded text-white"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mt-4">
            <a
              href={project.github}
              className="bg-green-400 hover:bg-green-600 text-white px-3 py-1 rounded transition"
            >
              GitHub
            </a>

            <a
              href={project.demo}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition"
            >
              Live Demo
            </a>
          </div>
        </div>
      )}
    </div>
  );
}