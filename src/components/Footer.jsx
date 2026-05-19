import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-xl border-t border-white/10 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        
        <div>
          <h3 className="text-2xl font-bold text-green-300">MLM</h3>
          <p className="text-gray-400 text-sm mt-2">
            Construyendo software con calidad desde Rosario, Argentina.
          </p>
        </div>

        {/* Contacto/Redes */}
        <div className="flex flex-col items-center md:items-end">
         
          <div className="flex gap-6">
            <a href="https://github.com/Lauzari" target="_blank" rel="noreferrer" 
               className="text-gray-400 hover:text-white transition-colors text-3xl">
              <FaGithub />
            </a>
            <a href="https://ar.linkedin.com/in/maria-laura-moyano" target="_blank" rel="noreferrer" 
               className="text-gray-400 hover:text-blue-400 transition-colors text-3xl">
              <FaLinkedin />
            </a>
         
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 text-xs mt-12">
        © {new Date().getFullYear()} - Diseñado y desarrollado por Maria Laura Moyano
      </div>
    </footer>
  );
}