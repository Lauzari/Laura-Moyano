export default function ProjectCard({ project }) {
  return (
    <div className="group bg-white/5 border border-white/10 backdrop-blur-md p-0 rounded-2xl overflow-hidden hover:border-green-300/50 transition-all duration-300 shadow-xl">
      
      <div className="overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-blue-300 mb-3">
          {project.title}
        </h3>

        <p className="text-gray-350 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full text-xs text-blue-200"
            >
              {t}
            </span>
          ))}
        </div>

        
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-lg text-sm font-medium transition"
          >
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg text-sm font-medium transition"
          >
            Live Demo
          </a>
             <a
            href={project.tests}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-sm font-medium transition"
          >
            Tests
          </a>
        </div>
      </div>
    </div>
  );
}