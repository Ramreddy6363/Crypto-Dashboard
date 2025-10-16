import { Link } from "react-router";

const Card = ({ name, symbol, price, marketCap, image, priceChange24,Id }) => {
  return (
    <Link to={`/coin/${Id}`}>
      <div className="p-3 rounded-md bg-gray-900 text-white hover:shadow-lg hover:scale-105 transition-transform duration-300">
        <div className="flex items-center gap-4">
          <img src={image} alt={`${name} logo`} className="w-12 h-12" />
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <h4 className="text-gray-500 uppercase">{symbol}</h4>
          </div>
        </div>
        <div className="mt-2">
          <p>Price: ₹{price.toLocaleString()}</p>
          <p
            className={`${
              priceChange24 >= 0 ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {priceChange24 != null ? priceChange24.toFixed(2) : 'N/A'}%
          </p>
          <p>Market Cap: ₹{marketCap.toLocaleString()}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;