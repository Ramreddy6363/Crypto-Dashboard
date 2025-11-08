import InputElements from '../Components/InputElements';
import Card from '../Components/Card';
import Spinner from '../Components/Spinner';
const HomePage = ({
  coins,
  filter,
  setFilter,
  limit,
  setLimit,
  sortBy,
  setSortBy,
  loading,
  error,
}) => {
  const filterCoin = coins
    .filter((coin) => {
      return (
        coin.name.toLowerCase().includes(filter.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(filter.toLowerCase())
      );
    })
    .slice()
    .sort((a, b) => {
      switch (sortBy) {
        case 'market_cap_desc': // Sort by market cap (high to low)
          return b.market_cap - a.market_cap;
        case 'market_cap_asc': // Sort by market cap (low to high)
          return a.market_cap - b.market_cap;

        case 'price_desc': // Sort by price (high to low)
          return b.current_price - a.current_price;

        case 'price_asc': // Sort by price (low to high)
          return a.current_price - b.current_price;

        case '24h_change_desc': // Sort by 24h price change (high to low)
          return b.price_change_percentage_24h - a.price_change_percentage_24h;

        case '24h_change_asc': // Sort by 24h price change (low to high)
          return a.price_change_percentage_24h - b.price_change_percentage_24h;

        default: // Default case (no sorting)
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-teal-950 to-orange-950 relative overflow-hidden">
      {/* Hexagonal Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(6, 182, 212, 0.1) 50px, rgba(6, 182, 212, 0.1) 51px),
          repeating-linear-gradient(60deg, transparent, transparent 50px, rgba(251, 146, 60, 0.1) 50px, rgba(251, 146, 60, 0.1) 51px),
          repeating-linear-gradient(120deg, transparent, transparent 50px, rgba(16, 185, 129, 0.1) 50px, rgba(16, 185, 129, 0.1) 51px)`,
          }}
        ></div>
      </div>

      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-cyan-400/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 border-4 border-orange-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-emerald-400/10 to-transparent rotate-12 animate-bounce-slow"></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-3 bg-gradient-to-r from-cyan-600/20 to-orange-600/20 backdrop-blur-sm border-2 border-cyan-400/40 rounded-full px-6 py-2 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm text-gray-300 font-medium">
                  Live Market Data
                </span>
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-tight mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-orange-400 drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                Crypto Dashboard
              </span>
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
              Track, analyze, and monitor your favorite cryptocurrencies with{' '}
              <span className="text-cyan-400 font-bold underline decoration-wavy decoration-cyan-400/50">
                real-time data
              </span>{' '}
              and{' '}
              <span className="text-orange-400 font-bold underline decoration-wavy decoration-orange-400/50">
                powerful insights
              </span>
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-4xl mx-auto">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-slate-900/90 border-2 border-cyan-400/50 rounded-xl p-6 transform hover:rotate-1 transition-all duration-300">
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                    {coins.length}+
                  </div>
                  <div className="text-slate-300 mt-2 font-semibold tracking-wide">
                    Cryptocurrencies
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-orange-500 rounded-xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-slate-900/90 border-2 border-emerald-400/50 rounded-xl p-6 transform hover:rotate-1 transition-all duration-300">
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-orange-400">
                    24/7
                  </div>
                  <div className="text-slate-300 mt-2 font-semibold tracking-wide">
                    Real-Time Updates
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-cyan-500 rounded-xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-slate-900/90 border-2 border-orange-400/50 rounded-xl p-6 transform hover:rotate-1 transition-all duration-300">
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-cyan-400">
                    100%
                  </div>
                  <div className="text-slate-300 mt-2 font-semibold tracking-wide">
                    Accurate Data
                  </div>
                </div>
              </div>
            </div>
          </div>

          <InputElements
            limit={limit}
            onLimitchange={setLimit}
            filter={filter}
            onFilterchange={setFilter}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />

          {loading && (
            <div className="flex justify-center items-center py-20">
              <Spinner />
            </div>
          )}

          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg text-center max-w-md mx-auto mb-4">
              ⚠️ Error: {error}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 pb-10">
            {!loading && coins.length > 0 && filterCoin.length === 0 ? (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-400 text-2xl">
                  😢 No Matching Coins Found
                </p>
                <p className="text-gray-500 mt-2">
                  Try adjusting your search filters
                </p>
              </div>
            ) : (
              filterCoin.map((coin) => (
                <Card
                  key={coin.id}
                  Id={coin.id}
                  name={coin.name}
                  symbol={coin.symbol}
                  price={coin.current_price}
                  marketCap={coin.market_cap}
                  image={coin.image}
                  priceChange24={coin.price_change_percentage_24h}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
