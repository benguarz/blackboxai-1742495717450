import React from 'react';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-indigo-600">Logo</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md">Home</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md">About</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md">Services</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Welcome to Our</span>
            <span className="block text-indigo-600">Modern Website</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Experience the perfect blend of design and functionality. Built with React and styled with Tailwind CSS.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Get Started
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-indigo-500 text-3xl mb-4">
                <i className="fas fa-rocket"></i>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Fast Performance</h3>
              <p className="mt-2 text-gray-500">Optimized for speed and efficiency.</p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-indigo-500 text-3xl mb-4">
                <i className="fas fa-paint-brush"></i>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Modern Design</h3>
              <p className="mt-2 text-gray-500">Beautiful and responsive interface.</p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-indigo-500 text-3xl mb-4">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Secure</h3>
              <p className="mt-2 text-gray-500">Built with security in mind.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>&copy; 2023 Your Company. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;