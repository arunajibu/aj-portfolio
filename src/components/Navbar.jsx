export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0f172a]/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Name */}
        <h1 className="text-xl font-bold text-cyan-400">
          Aruna Vasanth
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <li>
            <a href="#home" className="hover:text-cyan-400 transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-cyan-400 transition duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-cyan-400 transition duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-400 transition duration-300">
              Contact
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}