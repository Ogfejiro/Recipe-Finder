import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 px-8 pt-20">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full">
        {/* Text Section */}
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Welcome to <span className="text-green-600">Alisha Recipe-Finder</span>
          </h1>
          <p className="text-lg font-bold">
            Hello 👋 — here we save you the stress of searching for recipes to cook.
          </p>
          <p className="text-gray-600">
            Browse, explore, and find the perfect meal in seconds.
          </p>
        </div>

        {/* Image Section with Glassmorphism */}
        <div className="flex-1">
          <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-lg border border-white/30 overflow-hidden">
            <img
              src="/spag.jpg" // replace with your image path
              alt="Delicious food"
              className="w-full h-[300px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
