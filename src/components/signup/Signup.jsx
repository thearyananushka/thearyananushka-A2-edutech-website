import { Link } from 'react-router-dom';
import './Signup.css';

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-200 to-white flex items-center justify-center px-6 animate-fadeIn">
      <div className="bg-white rounded-xl shadow-2xl p-10 w-full max-w-md animate-scaleIn">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">Sign Up</h1>
        <p className="text-gray-600 text-center mb-6">
          Choose your role to start the registration process.
        </p>
        <div className="space-y-4">
          <Link to="/signup/student">
            <button className="w-full py-3 px-5 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 mb-3">
              Sign Up as Student
            </button>
          </Link>
          <Link to="/signup/trainer">
            <button className="w-full py-3 px-5 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300 mb-3">
              Sign Up as Trainer
            </button>
          </Link>
          <Link to="/signup/admin">
            <button className="w-full py-3 px-5 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-red-300 transition duration-300">
              Sign Up as Admin
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
