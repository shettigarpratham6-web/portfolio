import React from "react";

export default function Home() {
  return (
    <>
     
      <nav className="w-full h-14 bg-gray-950 flex items-center justify-between px-8">
        <h1 className="text-2xl font-extrabold text-white">
          Portfolio<span className="text-blue-500">.</span>
        </h1>

        <ul className="flex gap-8 text-white font-extrabold mr-20">
          <li className="cursor-pointer hover:text-blue-400 transition">
            Home
          </li>
          <li className="cursor-pointer hover:text-blue-400 transition">
            About
          </li>
          <li className="cursor-pointer hover:text-blue-400 transition">
            Skills
          </li>
        </ul>
      </nav>

      
      <main className="min-h-screen flex items-center justify-between px-20 bg-gradient-to-br from-white via-slate-50 to-slate-100">
        
    
        <section className="flex flex-col justify-center space-y-6 max-w-xl ml-20">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Hi, I’m{" "}
            <span className="text-blue-500 drop-shadow-sm">
              Pratham
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-500">
            Web Developer • React • Next.js  
            <br />
            Building clean & scalable web experiences
          </p>

          <div className="flex gap-4 pt-2">
            <button className="px-8 py-3 bg-blue-500 text-white rounded-xl shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300">
              View My Work
            </button>

            <button className="px-8 py-3 border border-blue-500 text-blue-500 rounded-xl hover:bg-blue-50 transition-all duration-300">
              Contact Me
            </button>
          </div>
        </section>

      
        <div className="relative mr-20">
          <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 p-1 shadow-2xl animate-float">
            <div className="w-full h-full rounded-full overflow-hidden bg-white">
              <img
                src="/Pratham image.jpeg"
                alt="Pratham"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

      </main>
    </>
  );
}
