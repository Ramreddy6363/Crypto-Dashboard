import { Link, useParams } from 'react-router';
import { useState, useEffect } from 'react';
import Spinner from '../Components/Spinner';
import CoinChart from '../Components/CoinChart'
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
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="flex justify-center items-center mt-6">
        {loading && <Spinner />}
        {error && <div className="text-red-500">{error}</div>}
        {!loading && !error && coin && (
          <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg p-6">
      <Link
        to="/"
        className="block text-center text-blue-400 hover:text-blue-500 transition duration-300 mb-2 "
      >
        ⬅️ Back to Home
      </Link>
            <div className="flex flex-col items-center">
              <img
                src={coin.image.large}
                alt={coin.name}
                className="w-24 h-24 mb-4"
              />
              <h1 className="text-3xl font-bold mb-2">
                {coin.name} ({coin.symbol.toUpperCase()})
              </h1>
              <p className="text-gray-400 text-sm mb-4">
                {coin.description.en
                  ? `${coin.description.en.substring(0, 150)}...`
                  : 'No description available.'}
              </p>
              <div className="w-full">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Rank:</span>
                  <span className="font-bold">#{coin.market_cap_rank}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Current Price:</span>
                  <span className="font-semibold">
                    ₹{coin.market_data.current_price.inr.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Market Cap:</span>
                  <span className="font-semibold">
                    ₹{coin.market_data.market_cap.inr.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Total Supply:</span>
                  <span className="font-semibold">
                    {coin.market_data.total_supply
                      ? coin.market_data.total_supply.toLocaleString()
                      : 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">All-Time High:</span>
                  <span className="font-semibold">
                    ₹{coin.market_data.ath.inr.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">All-Time Low:</span>
                  <span className="font-semibold">
                    ₹{coin.market_data.atl.inr.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">24h Change:</span>
                  <span
                    className={`font-semibold ${
                      coin.market_data.price_change_percentage_24h >= 0
                        ? 'text-green-400'
                        : 'text-red-400'
                    }`}
                  >
                    {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                  </span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-400">Last Updated:</span>
                  <span className="font-semibold">
                    {new Date(coin.last_updated).toLocaleString()}
                  </span>
                </div>
                <CoinChart coinId={coin.id} />
                {/* Links Section */}
                <div className="mt-4 flex flex-col items-center justify-center">
                  <a
                    href={coin.links.homepage[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-400 hover:text-blue-500 transition duration-300 mb-2"
                  >
                    🌐 Official Website
                  </a>
                  <a
                    href={coin.links.blockchain_site[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-400 hover:text-blue-500 transition duration-300"
                  >
                    🔗 Blockchain Explorer
                  </a>
                </div>
                <p className="pt-2 text-justify tracking-normal">
                  {coin.categories.length > 0 && (
                    <p>
                      <b> Categories:</b>
                      {coin.categories.join(', ')}
                    </p>
                  )}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      {!loading && !error && !coin && <p>No data found</p>}
    </div>
  );
};

export default CoinDetails;
