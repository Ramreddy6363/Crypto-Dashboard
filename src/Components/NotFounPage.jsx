import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="text-center space-y-6 animate-bounce">
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          404
        </h1>
        <div className="text-6xl">😢</div>
      </div>
      <p className="text-2xl mb-8 mt-6 text-gray-300">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition duration-300 transform hover:scale-110 shadow-lg"
      >
        🏠 Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
