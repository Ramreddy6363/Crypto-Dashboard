const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-12">
      {/* Animated Diamond Icon */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-emerald-500 to-orange-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
        <div className="relative text-8xl animate-bounce">💎</div>
      </div>

      {/* Multi-colored Spinner Rings */}
      <div className="relative w-24 h-24">
        {/* Outer Ring - Cyan */}
        <div className="absolute inset-0 border-8 border-transparent border-t-cyan-400 border-r-cyan-400 rounded-full animate-spin"></div>

        {/* Middle Ring - Emerald */}
        <div
          className="absolute inset-2 border-8 border-transparent border-t-emerald-400 border-r-emerald-400 rounded-full animate-spin"
          style={{ animationDirection: 'reverse', animationDuration: '1s' }}
        ></div>

        {/* Inner Ring - Orange */}
        <div
          className="absolute inset-4 border-8 border-transparent border-t-orange-400 border-r-orange-400 rounded-full animate-spin"
          style={{ animationDuration: '0.7s' }}
        ></div>
      </div>

      {/* Loading Text */}
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-orange-400 animate-pulse">
          Loading...
        </h3>
        <div className="flex gap-2">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></span>
          <span
            className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"
            style={{ animationDelay: '0.1s' }}
          ></span>
          <span
            className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"
            style={{ animationDelay: '0.2s' }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
