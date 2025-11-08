import { Link, useParams } from 'react-router';
import { useState, useEffect } from 'react';
import Spinner from '../Components/Spinner';
import CoinChart from '../Components/CoinChart';
const API_URL = import.meta.env.VITE_COIN_API_KEY;

const CoinDetails = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const res = await fetch(`${API_URL}/${id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch the data');
        }
        const data = await res.json();
        setCoin(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCoin();
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-teal-950 to-slate-950 text-white p-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="flex justify-center items-center mt-6 relative z-10">
        {loading && <Spinner />}
        {error && (
          <div className="text-red-500 text-center text-xl bg-red-900/20 border border-red-500/50 rounded-xl p-6 backdrop-blur-lg">
            {error}
          </div>
        )}
        {!loading && !error && coin && (
          <div className="max-w-4xl w-full">
            {/* Back Button */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition duration-300 mb-6 group"
            >
              <span className="text-2xl group-hover:-translate-x-2 transition-transform duration-300">
                ⬅️
              </span>
              <span className="font-semibold">Back to Home</span>
            </Link>

            {/* Main Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-emerald-500 to-orange-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl border-2 border-cyan-400/30 overflow-hidden">
                {/* Header Section with Coin Image */}
                <div className="bg-gradient-to-r from-cyan-900/30 via-emerald-900/30 to-orange-900/30 p-8 border-b border-cyan-400/20">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full blur-lg opacity-50 animate-pulse"></div>
                      <img
                        src={coin.image.large}
                        alt={coin.name}
                        className="relative w-32 h-32 rounded-full border-4 border-cyan-400/50"
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h1 className="text-5xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-orange-400">
                        {coin.name}
                      </h1>
                      <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                        <span className="text-2xl font-bold text-slate-300 uppercase tracking-wider">
                          {coin.symbol}
                        </span>
                        <span className="px-4 py-1 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-400/50 rounded-full text-cyan-400 font-bold">
                          Rank #{coin.market_cap_rank}
                        </span>
                      </div>
                      {coin.description.en && (
                        <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                          {coin.description.en.substring(0, 200)}...
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Price and Stats Section */}
                <div className="p-8">
                  {/* Current Price - Featured */}
                  <div className="mb-8 text-center">
                    <div className="text-sm text-slate-400 uppercase tracking-widest mb-2">
                      Current Price
                    </div>
                    <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-2">
                      ₹{coin.market_data.current_price.inr.toLocaleString()}
                    </div>
                    <div
                      className={`inline-flex items-center gap-2 text-2xl font-bold px-6 py-2 rounded-full ${
                        coin.market_data.price_change_percentage_24h >= 0
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-400/50'
                          : 'bg-red-500/20 text-red-400 border border-red-400/50'
                      }`}
                    >
                      {coin.market_data.price_change_percentage_24h >= 0
                        ? '📈'
                        : '📉'}
                      {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {/* Market Cap */}
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <div className="relative bg-slate-800/50 border border-cyan-400/30 rounded-xl p-5 hover:border-cyan-400/60 transition-all">
                        <div className="text-sm text-slate-400 uppercase tracking-wider mb-1">
                          Market Cap
                        </div>
                        <div className="text-2xl font-bold text-cyan-400">
                          ₹{coin.market_data.market_cap.inr.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    {/* Total Supply */}
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-orange-500/20 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <div className="relative bg-slate-800/50 border border-emerald-400/30 rounded-xl p-5 hover:border-emerald-400/60 transition-all">
                        <div className="text-sm text-slate-400 uppercase tracking-wider mb-1">
                          Total Supply
                        </div>
                        <div className="text-2xl font-bold text-emerald-400">
                          {coin.market_data.total_supply
                            ? coin.market_data.total_supply.toLocaleString()
                            : 'N/A'}
                        </div>
                      </div>
                    </div>

                    {/* All-Time High */}
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-cyan-500/20 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <div className="relative bg-slate-800/50 border border-orange-400/30 rounded-xl p-5 hover:border-orange-400/60 transition-all">
                        <div className="text-sm text-slate-400 uppercase tracking-wider mb-1">
                          All-Time High
                        </div>
                        <div className="text-2xl font-bold text-orange-400">
                          ₹{coin.market_data.ath.inr.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    {/* All-Time Low */}
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <div className="relative bg-slate-800/50 border border-cyan-400/30 rounded-xl p-5 hover:border-cyan-400/60 transition-all">
                        <div className="text-sm text-slate-400 uppercase tracking-wider mb-1">
                          All-Time Low
                        </div>
                        <div className="text-2xl font-bold text-cyan-400">
                          ₹{coin.market_data.atl.inr.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chart Section */}
                  <div className="mb-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-orange-500/10 rounded-xl blur-lg"></div>
                      <div className="relative bg-slate-800/50 border border-cyan-400/20 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-4">
                          📊 Price Chart (7 Days)
                        </h3>
                        <CoinChart coinId={coin.id} />
                      </div>
                    </div>
                  </div>

                  {/* Categories */}
                  {coin.categories.length > 0 && (
                    <div className="mb-6">
                      <div className="text-sm text-slate-400 uppercase tracking-wider mb-3">
                        Categories
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {coin.categories.map((category, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-semibold hover:border-cyan-400/60 transition-colors"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Links Section */}
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-6 border-t border-slate-700">
                    <a
                      href={coin.links.homepage[0]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-400/50 rounded-xl hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform">
                        🌐
                      </span>
                      <span className="font-semibold text-cyan-400">
                        Official Website
                      </span>
                    </a>
                    <a
                      href={coin.links.blockchain_site[0]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-orange-500/20 border border-emerald-400/50 rounded-xl hover:border-emerald-400 transition-all hover:shadow-lg hover:shadow-emerald-500/20"
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform">
                        🔗
                      </span>
                      <span className="font-semibold text-emerald-400">
                        Blockchain Explorer
                      </span>
                    </a>
                  </div>

                  {/* Last Updated */}
                  <div className="text-center mt-6 text-sm text-slate-500">
                    Last updated: {new Date(coin.last_updated).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {!loading && !error && !coin && (
        <div className="text-center text-slate-400 text-xl">
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl p-8 backdrop-blur-lg inline-block">
            No data found
          </div>
        </div>
      )}
    </div>
  );
};

export default CoinDetails;
