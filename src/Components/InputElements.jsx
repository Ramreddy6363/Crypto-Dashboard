const InputElements = ({
  limit,
  onLimitchange,
  filter,
  onFilterchange,
  sortBy,
  onSortChange,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-8">
      <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 shadow-xl">
        <div className="flex flex-col lg:flex-row items-stretch gap-4">
          {/* Search Input */}
          <div className="flex-1 relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400 group-focus-within:text-blue-400 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              value={filter}
              placeholder="Search by coin name or symbol..."
              className="w-full pl-12 pr-4 py-3.5 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
              onChange={(e) => onFilterchange(e.target.value)}
            />
          </div>

          {/* Show Limit Selector */}
          <div className="flex items-center gap-3 bg-gray-900/50 border border-gray-700/50 rounded-xl px-4 py-2 hover:border-blue-500/50 transition-all duration-300">
            <label
              htmlFor="limit"
              className="text-sm font-semibold text-gray-300 whitespace-nowrap flex items-center gap-2"
            >
              <svg
                className="w-4 h-4 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              Show:
            </label>
            <select
              value={limit}
              id="limit"
              className="bg-transparent text-white font-semibold focus:outline-none cursor-pointer"
              onChange={(e) => onLimitchange(Number(e.target.value))}
            >
              <option value="10" className="bg-gray-800">
                10
              </option>
              <option value="25" className="bg-gray-800">
                25
              </option>
              <option value="50" className="bg-gray-800">
                50
              </option>
              <option value="100" className="bg-gray-800">
                100
              </option>
            </select>
          </div>

          {/* Sort By Selector */}
          <div className="flex items-center gap-3 bg-gray-900/50 border border-gray-700/50 rounded-xl px-4 py-2 hover:border-purple-500/50 transition-all duration-300">
            <label
              htmlFor="sort"
              className="text-sm font-semibold text-gray-300 whitespace-nowrap flex items-center gap-2"
            >
              <svg
                className="w-4 h-4 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                />
              </svg>
              Sort:
            </label>
            <select
              value={sortBy}
              id="sort"
              className="bg-transparent text-white font-semibold focus:outline-none cursor-pointer pr-2"
              onChange={(e) => onSortChange(e.currentTarget.value)}
            >
              <option value="market_cap_desc" className="bg-gray-800">
                Market Cap ↓
              </option>
              <option value="market_cap_asc" className="bg-gray-800">
                Market Cap ↑
              </option>
              <option value="price_desc" className="bg-gray-800">
                Price ↓
              </option>
              <option value="price_asc" className="bg-gray-800">
                Price ↑
              </option>
              <option value="24h_change_desc" className="bg-gray-800">
                24h Change ↓
              </option>
              <option value="24h_change_asc" className="bg-gray-800">
                24h Change ↑
              </option>
            </select>
          </div>
        </div>

        {/* Active Filters Display */}
        {filter && (
          <div className="mt-4 flex items-center gap-2 text-sm">
            <span className="text-gray-400">Active filter:</span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-lg border border-blue-500/30 font-medium">
              "{filter}"
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputElements;
