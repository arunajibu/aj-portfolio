export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#0b1220] text-white flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">
          Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {/* Frontend */}
          <div className="bg-[#1e293b] p-8 rounded-2xl border border-gray-800 hover:border-cyan-400 transition duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
              Frontend
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>React.js</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5 & CSS3</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-[#1e293b] p-8 rounded-2xl border border-gray-800 hover:border-cyan-400 transition duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
              Backend
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>PHP</li>
              <li>REST APIs</li>
            </ul>
          </div>
          {/* Backend */}
          <div className="bg-[#1e293b] p-8 rounded-2xl border border-gray-800 hover:border-cyan-400 transition duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
              E-Commerce
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>Shopify</li>
              <li>Zoho Commerce</li>
              <li>WordPress</li>
  
            </ul>
          </div>
          {/* Tools & Database */}
          <div className="bg-[#1e293b] p-8 rounded-2xl border border-gray-800 hover:border-cyan-400 transition duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
              Tools & Database
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>MySQL</li>
              <li>Supabase</li>
              <li>Git & GitHub</li>
              <li>VS Code</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}