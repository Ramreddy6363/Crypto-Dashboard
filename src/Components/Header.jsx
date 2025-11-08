import { Link, useLocation } from 'react-router';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="relative border-b-2 border-cyan-500/30 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-[0_4px_20px_rgba(6,182,212,0.3)]">
      {/* Animated dots pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-3 right-1/3 w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-2 left-1/2 w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
      </div>

      <nav className="container mx-auto px-6 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo with unique design */}
          <Link to="/" className="flex items-center gap-3 group relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-orange-500 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
              <div className="relative bg-slate-900 rounded-full p-2 border-2 border-cyan-400 group-hover:border-orange-400 transition-colors duration-300">
                <span className="text-2xl">�</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-orange-400 group-hover:from-orange-400 group-hover:to-cyan-400 transition-all duration-500">
                CRYPTO
              </span>
              <span className="text-xs font-bold text-slate-400 tracking-widest -mt-1">
                MARKET HUB
              </span>
            </div>
          </Link>

          {/* Navigation with different style */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className={`group relative px-6 py-2.5 font-bold uppercase tracking-wide text-sm transition-all duration-300 ${
                isActive('/')
                  ? 'text-slate-900'
                  : 'text-cyan-300 hover:text-orange-300'
              }`}
            >
              {isActive('/') && (
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-emerald-400 to-orange-400 rounded-lg transform -skew-x-12"></div>
              )}
              <span className="relative flex items-center gap-2">
                <span
                  className={`text-lg ${
                    isActive('/')
                      ? ''
                      : 'group-hover:rotate-12 transition-transform'
                  }`}
                >
                  🏠
                </span>
                Home
              </span>
            </Link>

            <Link
              to="/about"
              className={`group relative px-6 py-2.5 font-bold uppercase tracking-wide text-sm transition-all duration-300 ${
                isActive('/about')
                  ? 'text-slate-900'
                  : 'text-cyan-300 hover:text-orange-300'
              }`}
            >
              {isActive('/about') && (
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-emerald-400 to-cyan-400 rounded-lg transform -skew-x-12"></div>
              )}
              <span className="relative flex items-center gap-2">
                <span
                  className={`text-lg ${
                    isActive('/about')
                      ? ''
                      : 'group-hover:rotate-12 transition-transform'
                  }`}
                >
                  ℹ️
                </span>
                About
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
