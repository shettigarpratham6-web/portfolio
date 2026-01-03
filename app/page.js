import React from "react";

export default function Home() {
  return (
    <>
    
      <nav className="w-full h-14 bg-gray-950/90 backdrop-blur-md flex items-center justify-between px-10 shadow-lg fixed top-0 z-50">
        <h1 className="text-2xl font-extrabold text-white tracking-wide">
          Portfolio<span className="text-blue-500">.</span>
        </h1>

        <ul className="hidden md:flex gap-10 text-white font-bold text-sm uppercase tracking-wider">
          <li>
            <a href="#home" className="hover:text-blue-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>
          </li>
        </ul>
      </nav>

    
      <main
        id="home"
        className="min-h-screen flex items-center justify-between px-20 pt-24 bg-gradient-to-br from-white via-slate-50 to-slate-200"
      >
        <section className="flex flex-col justify-center space-y-8 max-w-xl ml-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
            Hi, I’m <span className="text-blue-500">Pratham</span>
          </h1>

          <p className="text-lg text-gray-600">
            Web Developer • React • Next.js
            <br />
            Building clean & scalable web experiences
          </p>

          <button className="px-8 py-3 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition">
            View My Work
          </button>
        </section>

        <div className="relative mr-20">
          <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 p-1 animate-float">
            <div className="w-full h-full rounded-full overflow-hidden bg-white">
              <img
                src="/Pratham image.jpeg"
                alt="Pratham"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>

     
      <section id="about" className="bg-white py-16">
        <h1 className="text-3xl text-blue-700 font-extrabold ml-40 mb-6">
          About Me
        </h1>

        <p className="ml-40 max-w-3xl text-gray-700 text-lg">
          I’m a passionate front-end developer focused on building clean,
          responsive, and user-friendly web applications using React,
          Tailwind CSS, and Git.
        </p>
      </section>

    
      <section
        id="skills"
        className="bg-gradient-to-b from-white to-slate-100 py-16"
      >
        <h1 className="text-3xl text-blue-700 font-extrabold ml-40 mb-10">
          Skills
        </h1>

        <div className="ml-40 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          {[
            ["Frontend", "HTML, CSS, JavaScript, React, Tailwind CSS"],
            ["Programming", "C, C++, Python"],
            ["Python & Data", "Pandas, NumPy, pyttsx3"],
            ["Tools", "Git, GitHub, VS Code, Firebase"],
            ["Other", "Responsive Design, Debugging, UI/UX Basics"],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition"
            >
              <h3 className="font-bold text-lg text-blue-700 mb-2">
                {title}
              </h3>
              <p className="text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
