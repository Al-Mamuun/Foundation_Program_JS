
import { X, MapPin, Search, Navigation } from "lucide-react";

const LocationModel = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm px-4">

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-3xl bg-white shadow-2xl border border-slate-100 overflow-hidden">

        {/* Header */}
        <div className="flex justify-between items-start p-6 pb-4">

          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <MapPin size={21} />
              </div>

              <h2 className="text-xl font-bold text-slate-800">
                Where are you today?
              </h2>
            </div>

            <p className="text-sm text-slate-500 ml-12">
              Enter your location to check the weather.
            </p>
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all duration-200 hover:bg-red-500 hover:text-white cursor-pointer"
          >
            <X size={19} strokeWidth={2} />
          </button>

        </div>

        {/* Body */}
        <div className="px-6 pb-6">

          {/* Location Input */}
          <div className="relative">
            <MapPin
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Enter city or location..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* Search Button */}
          <button
            type="button"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 py-3 text-sm font-semibold text-white shadow-md shadow-blue-200 transition-all duration-200 hover:bg-blue-600 hover:shadow-lg active:scale-[0.98] cursor-pointer"
          >
            <Search size={18} />
            Check Weather
          </button>

          {/* Divider */}
          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200"></div>

            <span className="text-xs text-slate-400">
              OR
            </span>

            <div className="h-px flex-1 bg-slate-200"></div>
          </div>

          {/* Current Location */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 py-3 text-sm font-semibold text-blue-600 transition-all duration-200 hover:bg-blue-100 active:scale-[0.98] cursor-pointer"
          >
            <Navigation size={17} />
            Use My Current Location
          </button>

          {/* Footer Text */}
          <p className="mt-4 text-center text-xs text-slate-400">
            📍 We use your location only to provide weather information.
          </p>

        </div>
      </div>
    </div>
  );
};

export default LocationModel;

