export default function Hero() {
  return (
  <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] text-white px-6 text-center pt-24">      
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Hi, I'm <span className="text-cyan-400">Aruna</span> 👋
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4">
        Full Stack Developer
      </h2>

      <p className="text-gray-400 max-w-2xl mb-8">
        I build scalable web applications using React, Node, PHP and modern APIs.
      </p>

      <div className="flex gap-4">
        <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition duration-300">
          View Projects
        </button>

        <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-6 py-3 rounded-lg font-semibold transition duration-300">
          Download Resume
        </button>
      </div>

    </section>
  );
}