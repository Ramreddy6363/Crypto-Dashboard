import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import Header from './Components/Header';
import NotFoundPage from './Components/NotFounPage';
import CoinDetails from './pages/coinDetails';
const API_URL = import.meta.env.VITE_API_KEY;

const App = () => {
  const [Coins, setCoins] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState(null);
  const [Limit, setLimit] = useState(10);
  const [Filter, setFilter] = useState('');
  const [SortBy, setSortBy] = useState('market_cap_desc');

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(
          `${API_URL}&order=market_cap_desc&per_page=${Limit}&page=1&sparkline=false`
        );
        if (!res.ok) {
          throw new Error('Failed to fetch the data');
        }
        const data = await res.json();
        setCoins(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
  }, [Limit]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              coins={Coins}
              filter={Filter}
              setFilter={setFilter}
              limit={Limit}
              setLimit={setLimit}
              sortBy={SortBy}
              setSortBy={setSortBy}
              loading={Loading}
              error={Error}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
