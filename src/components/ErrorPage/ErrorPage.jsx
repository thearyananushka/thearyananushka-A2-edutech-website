import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
      {/* Error Image */}
      <img
        className="mt-8 w-64 lg:w-80"
        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000"
        alt="error-img"
      />

      {/* Error Heading */}
      <h1 className="mt-8 text-4xl font-bold text-green-600">Page not found</h1>

      {/* Error Description */}
      <p className="mt-4 text-lg text-gray-700">
        The page you are requesting does not exist.
      </p>

      {/* Back to Home Button */}
      <Link to="/">
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300">
          Go to HomePage
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
