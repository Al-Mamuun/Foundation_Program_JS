// import { useState } from "react";
// import LocationModel from "../components/LocationModel";

// const Home = () => {
//   const [Click, setClick] = useState(false);
//   console.log(Click);
//   return (
//     <div className="flex-1 flex flex-col justify-center items-center text-center">
//       <h1 className="text-6xl text-blue-300 font-extrabold">
//         NextLevel <span className="text-blue-400">Weather</span>
//       </h1>
//       <p className="p-4 text-gray-400">
//         Check your weather today in next level.
//       </p>

//       <div>
//         <button
//           type="button"
//           onClick={() => {
//             setClick("Clicked");
//           }}
//           className="text-lg font-medium hover:scale-105 transition-all delay-75 bg-blue-500 p-2 rounded-4xl text-whitespace-nowrap text-gray-100"
//         >
//           Check Weather
//         </button>
//       </div>
//       {Click && <LocationModel onClose = {() => setClick(false)} />}
//     </div>
//   );
// };


// export default Home;

import { useState } from "react";
import LocationModel from "../components/LocationModel";

const Home = () => {
  const [Click, setClick] = useState(false);

  return (
    <div className="relative flex-1 min-h-full flex flex-col justify-center items-center text-center px-4 py-10 overflow-hidden  from-sky-50 via-white to-blue-100">

      {/* Background Decorations */}
      <div className="absolute top-10 left-5 md:left-20 w-52 h-52 bg-blue-300/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-5 right-5 md:right-20 w-64 h-64 bg-cyan-300/20 rounded-full blur-3xl"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl">

        {/* Weather Icon */}
        <div className="mb-5 text-6xl md:text-7xl drop-shadow-md">
          🌤️
        </div>

        {/* Small Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full bg-white/70 border border-blue-100 shadow-sm backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-sm font-medium text-slate-600">
            Live Weather Updates
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-slate-800">
          NextLevel{" "}
          <span className="text-blue-500">
            Weather
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto mt-5 text-slate-500 text-base sm:text-lg md:text-xl leading-relaxed">
          Check the weather around you with a simple,
          fast and beautiful experience.
        </p>

        {/* Button */}
        <button
          type="button"
          onClick={() => {
            setClick(true);
          }}
          className="mt-8 px-8 py-3.5 rounded-full bg-blue-500 text-white text-base sm:text-lg font-semibold shadow-lg shadow-blue-400/30 hover:bg-blue-600 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          🌍 Check Weather
        </button>

        {/* Small Text */}
        <p className="mt-4 text-sm text-slate-400">
          📍 Find your location & discover the weather
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 max-w-3xl mx-auto">

          {/* Card 1 */}
          <div className="bg-white/70 backdrop-blur-sm border border-white rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl mb-2">🌡️</div>

            <h3 className="font-semibold text-slate-700">
              Temperature
            </h3>

            <p className="text-sm text-slate-400 mt-1">
              Get current temperature
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/70 backdrop-blur-sm border border-white rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl mb-2">💧</div>

            <h3 className="font-semibold text-slate-700">
              Humidity
            </h3>

            <p className="text-sm text-slate-400 mt-1">
              Check humidity levels
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/70 backdrop-blur-sm border border-white rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl mb-2">🌦️</div>

            <h3 className="font-semibold text-slate-700">
              Forecast
            </h3>

            <p className="text-sm text-slate-400 mt-1">
              Explore weather forecast
            </p>
          </div>

        </div>

        {/* Bottom Info */}
        <div className="mt-8 flex flex-wrap justify-center gap-5 text-xs sm:text-sm text-slate-400">
          <span>⚡ Fast</span>
          <span>•</span>
          <span>📍 Location Based</span>
          <span>•</span>
          <span>☁️ Weather Data</span>
        </div>

      </div>

      {/* Modal */}
      {Click && (
        <LocationModel
          onClose={() => setClick(false)}
        />
      )}

    </div>
  );
};

export default Home;

