import AnimatedBackground from "./components/AnimatedBackground";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="text-white font-sans">
      <AnimatedBackground />
         <section className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold text-green-300">
          Maria Laura Moyano
        </h1>

        <h2 className="text-2xl mt-4 font-bold text-blue-300">
          Full Stack Developer
          -
          Software Tester
        </h2>
      </section>
      <Projects />
     
     

      <Footer />
    </div>
  );
}


export default App;