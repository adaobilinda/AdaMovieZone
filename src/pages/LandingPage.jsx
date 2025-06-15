import React from "react";
import { Link } from "react-router-dom";
import * as SC from "../../style";
import logo from "/logo.png";
import two from "/images/two.jpg";
import three from "/images/three.webp";
import four from "/images/four.jpg";


export default function LandingPage() {
  return (
    <SC.Main className="min-h-screen flex flex-col items-center justify-center bg-background text-white">
      <section className="flex flex-col items-center justify-center text-center py-15 px-6 ">
        <h1 className="flex text-4xl md:text-6xl font-bold mb-4">
          Welcome to Ada Movie Zone
          <img src={logo} alt="" className="h-20" />

        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-8">
          This is where you'll find the trending movie.
        </p>
        <Link
          to="/log_in"
          className="bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Sign Up Now
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-2 px-6 md:px-12 h-[40vh]">
        <div className="grid md:grid-cols-3 gap-8 text-center h-full">
          <div className="bg-red-900/20 rounded-xl border border-red-700 shadow overflow-hidden">
            <img src={four} alt="" className="h-[100%] w-[100%] object-cover" />
          </div>
          <div className="bg-red-900/20 rounded-xl border border-red-700 shadow overflow-hidden">
            <img src={two} alt="" className="h-[100%] w-[100%] object-cover"/>
          </div>
          <div className="bg-red-900/20 rounded-xl border border-red-700 shadow overflow-hidden">
            <img src={three} alt="" className="h-[100%] w-[100%] object-cover" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 mt-auto">
        &copy; {new Date().getFullYear()} Ada Movie Zone. All rights reserved.
      </footer>
    </SC.Main>
  );
}
