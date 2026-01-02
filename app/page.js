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

      
        <div className="relative mr-20 ">
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
      <div className="bg-white py-10 ">
  <h1 className="text-3xl text-blue-700 font-extrabold ml-40 mb-4 ">
    About Me
  </h1>

  <p className="ml-40 max-w-3xl text-gray-700 text-lg leading-relaxed tracking-wide font-stretch-extra-expanded font-semibold">
    I’m a passionate front-end developer focused on building clean,
    responsive, and user-friendly web applications. I enjoy turning
    ideas into real products using modern technologies like React,
    Tailwind CSS, and Git. I’m constantly learning and improving my
    skills to create efficient and visually appealing digital
    experiences.
  </p>
</div>
<div className="bg-white py-10">
  <h1 className="text-3xl text-blue-700 font-extrabold ml-40 mb-6">
    Skills
  </h1>

  <div className="ml-40 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
    
    <div className="p-6 bg-gray-50 rounded-xl shadow transition-all duration-300 ease-out
  hover:-translate-y-2 
  hover:shadow-xl 
  hover:bg-white
  hover:border-blue-500
  border border-transparent ">
      <h3 className="font-bold text-lg text-blue-700 mb-2">Frontend</h3>
      <p className="text-gray-700">
        HTML, CSS, JavaScript, React, Tailwind CSS
      </p>
    </div>

   
    <div className="p-6 bg-gray-50 rounded-xl shadow transition-all duration-300 ease-out
  hover:-translate-y-2 
  hover:shadow-xl 
  hover:bg-white
  hover:border-blue-500
  border border-transparent">
      <h3 className="font-bold text-lg text-blue-700 mb-2">Programming</h3>
      <p className="text-gray-700">
        C, C++, Python
      </p>
    </div>

   
    <div className="p-6 bg-gray-50 rounded-xl shadow transition-all duration-300 ease-out
  hover:-translate-y-2 
  hover:shadow-xl 
  hover:bg-white
  hover:border-blue-500
  border border-transparent">
      <h3 className="font-bold text-lg text-blue-700 mb-2">Python & Data</h3>
      <p className="text-gray-700">
        Pandas, NumPy, pyttsx3 (Text-to-Speech)
      </p>
    </div>

   
    <div className="p-6 bg-gray-50 rounded-xl shadow transition-all duration-300 ease-out
  hover:-translate-y-2 
  hover:shadow-xl 
  hover:bg-white
  hover:border-blue-500
  border border-transparent">
      <h3 className="font-bold text-lg text-blue-700 mb-2">Tools</h3>
      <p className="text-gray-700">
        Git, GitHub, VS Code, cursor, Replit, firebase
      </p>
    </div>

   
    <div className="p-6 bg-gray-50 rounded-xl shadow transition-all duration-300 ease-out
  hover:-translate-y-2 
  hover:shadow-xl 
  hover:bg-white
  hover:border-blue-500
  border border-transparent">
      <h3 className="font-bold text-lg text-blue-700 mb-2">Other</h3>
      <p className="text-gray-700">
        Responsive Design, Debugging, UI/UX Basics
      </p>
    </div>
  </div>
</div>

    </>
  );
}
