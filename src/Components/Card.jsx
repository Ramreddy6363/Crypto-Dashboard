import { Link } from 'react-router';

const Card = ({ name, symbol, price, marketCap, image, priceChange24, Id }) => {
  return (
    <Link to={`/coin/${Id}`}>
      <div className="group relative p-5 rounded-2xl bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-lg text-white shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/60 cursor-pointer overflow-hidden">
        {/* Animated background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all duration-300"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative">
              <img
                src={image}
                alt={`${name} logo`}
                className="w-14 h-14 rounded-full ring-2 ring-gray-700 group-hover:ring-blue-500 transition-all duration-300"
              />
              {/* Pulse effect on image */}
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md group-hover:animate-pulse"></div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                {name}
              </h3>
              <h4 className="text-gray-400 uppercase text-sm font-semibold tracking-wider">
                {symbol}
              </h4>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center p-2 rounded-lg bg-gray-800/50 group-hover:bg-gray-800/80 transition-colors duration-300">
              <span className="text-xs text-gray-400 font-medium">Price</span>
              <span className="text-sm font-bold text-white">
                ₹{price.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between items-center p-2 rounded-lg bg-gray-800/50 group-hover:bg-gray-800/80 transition-colors duration-300">
              <span className="text-xs text-gray-400 font-medium">
                24h Change
              </span>
              <span
                className={`text-sm font-bold flex items-center gap-1 ${
                  priceChange24 >= 0 ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {priceChange24 >= 0 ? '↗' : '↘'}
                {priceChange24 != null
                  ? Math.abs(priceChange24).toFixed(2)
                  : 'N/A'}
                %
              </span>
            </div>

            <div className="flex justify-between items-center p-2 rounded-lg bg-gray-800/50 group-hover:bg-gray-800/80 transition-colors duration-300">
              <span className="text-xs text-gray-400 font-medium">
                Market Cap
              </span>
              <span className="text-sm font-bold text-white">
                ₹{(marketCap / 1e9).toFixed(2)}B
              </span>
            </div>
          </div>

          {/* View Details Button on Hover */}
          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-full text-center py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold">
              View Details →
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
