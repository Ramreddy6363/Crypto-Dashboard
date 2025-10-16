import InputElements from '../Components/InputElements';
import Navbar from '../Components/Navbar';
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
    <div>
      <Navbar />
      <InputElements
        limit={limit}
        onLimitchange={setLimit}
        filter={filter}
        onFilterchange={setFilter}
        sortBy={sortBy}
        onSortChange={setSortBy}

      />
      {loading && <Spinner />}
      {error && <p className="text-center text-red-500">Error: {error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {!loading && coins.length > 0 && filterCoin.length === 0 ? (
          <p className="text-center text-white col-span-full">
            No Matching Coins
          </p>
        ) : (
          filterCoin.map((coin) => (
            <Card
              key={coin.id}
              Id = {coin.id}
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
  );
};

export default HomePage;
