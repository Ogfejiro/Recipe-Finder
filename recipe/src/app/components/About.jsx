import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="min-h-screen  bg-green-100 px-20 pt-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* Emoji Section */}
        <div className="flex-shrink-0 flex justify-center">
          <img
            src="https://em-content.zobj.net/thumbs/240/apple/354/thinking-face_1f914.png"
            alt="Thinking Emoji"
            className="w-40 h-40 md:w-56 md:h-56 drop-shadow-2xl animate-[bounce_3s_ease-in-out_infinite]"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 leading-snug">
            Thinking about what to cook?
          </h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            At <span className="font-semibold text-green-600">AL-F</span>, we
            take the stress out of meal planning. Get recipes that match your
            diet—no allergies, no worries, just delicious food made easy.
          </p>
          <Link href="/recipes">
            <button className="px-7 py-3 rounded-2xl bg-green-700 text-white font-bold shadow-md hover:scale-105 transition transform hover:shadow-lg animate-[pulse_3s_ease-in-out_infinite]">
              Try Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
