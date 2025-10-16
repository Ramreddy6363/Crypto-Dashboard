const InputElements = ({
  limit,
  onLimitchange,
  filter,
  onFilterchange,
  sortBy,
  onSortChange,
}) => {
  return (
    <div className="text-white my-5 mx-3 p-2 flex items-center flex-wrap  gap-4 ">
      <input
        type="text"
        value={filter}
        placeholder="Filter coin by name or symbol"
        className="bg-gray-800 p-2 w-full sm:w-full md:w-1/2 rounded-md focus:border-white"
        onChange={(e) => onFilterchange(e.target.value)}
      />
      <div className="flex items-center gap-2">
        <label htmlFor="limit" className="font-semibold">
          Show:
        </label>
        <select
          value={limit}
          id="limit"
          className="px-2 py-1 bg-gray-600 rounded-md"
          onChange={(e) => onLimitchange(Number(e.target.value))}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor="sort" className="font-semibold">
          Sort-By:
        </label>
        <select
          value={sortBy}
          id="sort"
          className="px-2 py-1 bg-gray-600 rounded-md"
          onChange={(e) => onSortChange(e.currentTarget.value)}
        >
          <option value="market_cap_desc">Market Cap (High to Low)</option>
          <option value="market_cap_asc">Market Cap (Low to High)</option>
          <option value="price_desc">Price (High to Low)</option>
          <option value="price_asc">Price (Low to High)</option>
          <option value="change_desc">24h Change (High to Low)</option>
          <option value="change_asc">24h Change (Low to High)</option>
        </select>
      </div>
    </div>
  );
};

export default InputElements