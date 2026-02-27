export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0f172a] text-white flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-cyan-400">
            About Me
          </h2>

          <p className="text-gray-300 mb-4">
            I am a Full Stack web Developer with experience building scalable
            web applications and conversion-focused online stores using 
            React, Node.js, PHP,WordPress, Shopify, and Zoho Commerce and MySQL.

          </p>

          <p className="text-gray-400">
            I enjoy building clean user interfaces, designing backend APIs,
            and solving real-world problems through technology.
          </p>
        </div>

        {/* Right Side Card */}
        <div className="bg-[#1e293b] p-8 rounded-2xl shadow-lg border border-gray-800">
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
            Quick Facts
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>✔ 5+ Years Web Development</li>
            <li>✔ React & Modern JavaScript</li>
            <li>✔ WordPress Development,Shopify,ZOHO</li>
            <li>✔ Backend with Node & PHP</li>
            <li>✔ Database: MySQL & Supabase</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

