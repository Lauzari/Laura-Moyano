export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
       <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-cyan-800 to-green-900"></div>

      <svg
        className="absolute bottom-0 w-full opacity-20 animate-pulse pointer-events-none"
        viewBox="0 0 1440 320"
      >
        <path
          fill="white"
          fillOpacity="1"
          d="M0,192L80,176C160,160,320,128,480,144C640,160,800,224,960,224C1120,224,1280,160,1360,128L1440,96V320H0Z"
        ></path>
      </svg>
    </div>
  );
}