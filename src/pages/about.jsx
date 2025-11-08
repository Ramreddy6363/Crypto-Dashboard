const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-teal-950 to-slate-950 p-4 sm:p-8 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-spin-slow"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header with Diamond Icon */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-4">
            <div className="text-5xl sm:text-7xl animate-bounce">💎</div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-orange-400 tracking-tight">
            ABOUT US
          </h1>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-cyan-400 via-emerald-400 to-orange-400 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {/* Card 1 - Cyan Theme */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl p-4 sm:p-8 border-2 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="text-3xl sm:text-5xl flex-shrink-0">📊</span>
                <p className="text-sm sm:text-lg leading-relaxed text-slate-200">
                  <span className="font-bold text-cyan-400">
                    Crypto Market Hub
                  </span>{' '}
                  is your ultimate platform for tracking and analyzing the
                  latest trends in the cryptocurrency market. Whether you're a
                  seasoned investor or a curious beginner, we provide you with{' '}
                  <span className="text-emerald-400 font-semibold">
                    real-time data
                  </span>{' '}
                  and insights to make informed decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 - Orange Theme */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-cyan-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl p-4 sm:p-8 border-2 border-orange-400/30 hover:border-orange-400/60 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="flex items-start gap-4">
                <span className="text-5xl flex-shrink-0">💰</span>
                <p className="text-sm sm:text-lg leading-relaxed text-slate-200">
                  Our platform offers{' '}
                  <span className="text-orange-400 font-semibold">
                    comprehensive information
                  </span>{' '}
                  on a wide range of cryptocurrencies, including current prices,
                  market capitalization, 24-hour changes, and historical data.
                  With an intuitive interface and powerful{' '}
                  <span className="text-cyan-400 font-semibold">
                    filtering and sorting
                  </span>{' '}
                  options, you can easily find exactly what you need. 🔍
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 - Emerald Theme */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-orange-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl p-4 sm:p-8 border-2 border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20">
              <div className="flex items-start gap-4">
                <span className="text-5xl flex-shrink-0">✅</span>
                <p className="text-sm sm:text-lg leading-relaxed text-slate-200">
                  We believe in empowering users with{' '}
                  <span className="text-emerald-400 font-semibold">
                    accurate and up-to-date information
                  </span>
                  . Our data is sourced from reliable APIs to ensure that you
                  always have the most recent and relevant information at your
                  fingertips.{' '}
                  <span className="text-cyan-400 font-semibold">
                    Trust and transparency
                  </span>{' '}
                  are our priorities.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 - Cyan-Orange Mix */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-orange-500 to-emerald-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl p-4 sm:p-8 border-2 border-cyan-400/30 hover:border-orange-400/60 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="flex items-start gap-4">
                <span className="text-5xl flex-shrink-0">🌟</span>
                <p className="text-sm sm:text-lg leading-relaxed text-slate-200">
                  Whether you're tracking{' '}
                  <span className="text-orange-400 font-semibold">
                    Bitcoin, Ethereum
                  </span>
                  , or any other altcoin, our platform provides a{' '}
                  <span className="text-emerald-400 font-semibold">
                    seamless experience
                  </span>{' '}
                  for monitoring the market. Stay ahead of the curve with our
                  customizable features and user-friendly design.
                </p>
              </div>
            </div>
          </div>

          {/* Card 5 - Final Call to Action */}
          <div className="relative group mt-10">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-orange-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-slate-900 via-teal-900/50 to-slate-900 backdrop-blur-xl rounded-2xl p-6 sm:p-10 border-2 border-emerald-400/50 hover:border-emerald-400/80 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/30">
              <div className="text-center">
                <span className="text-4xl sm:text-6xl block mb-4">🚀✨</span>
                <p className="text-base sm:text-xl leading-relaxed text-slate-200 mb-6">
                  Join the{' '}
                  <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-orange-400">
                    Crypto Market Hub
                  </span>{' '}
                  community today and take control of your cryptocurrency
                  journey. Explore the world of digital assets with confidence
                  and clarity, all in one place.
                </p>
                <div className="flex items-center justify-center gap-4 text-sm text-slate-400">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                    Real-time Updates
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-300"></span>
                    Accurate Data
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-700"></span>
                    User Friendly
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
