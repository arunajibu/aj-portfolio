import rentalImg from "../assets/rental1.png";
import preciousImg from "../assets/precious metal.png";
import portfolioImg from "../assets/aj-portfolio.png";
import covidImg from "../assets/covid-stat.png";
const projects = [
  {
    title: "Rental Booking App",
    description:
      "Dynamic Rental Property booking system with date blocking, admin dashboard and Supabase integration.",
    tech: ["React", "Supabase", "CSS"],
    image: rentalImg,
    live: "https://pgrentalbooking.netlify.app/",
    github: "https://github.com/arunajibu/pg-booking-app",
  },
  {
    title: "Price Dashboard",
    description:
      "Interactive dashboard with filters, charts and backend API integration.",
    tech: ["React", "Node.js", "MySQL"],
    image: preciousImg,
    live: "https://mokshaliveprice.netlify.app/",
    github: "https://github.com/arunajibu/precious-metals-app",
  },
    {
    title: "Portfolio Website",
    description:
      "A modern portfolio built with React",
    tech: ["React", "Tailwind CSS"],
    image: portfolioImg,
    live: "https://mokshaliveprice.netlify.app/",
    github: "https://github.com/arunajibu/precious-metals-app",
  },
      {
    title: "Covid Stats Dashboard",
    description:
      "A dashboard showing covid stats with charts and filters",
    tech: ["React", "CSS"],
    image: covidImg,
    live: "https://arunajibu.github.io/covid-statistics/",
    github: "https://github.com/arunajibu/covid-statistics",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#0f172a] text-white py-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="groupbg-[#1e293b] rounded-2xl overflow-hidden border border-gray-800 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              {/* Image Placeholder */}
              <div className="h-52 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                ) : (
                  <div className="h-full bg-gradient-to-br from-cyan-500/20 to-blue-700/20 flex items-center justify-center relative">
                    <div className="text-5xl font-bold text-cyan-400 opacity-30">
                      {project.title.charAt(0)}
                    </div>
                    <div className="absolute bottom-4 right-4 text-xs text-gray-400">
                      Preview Coming Soon
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-cyan-400">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg font-medium transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-4 py-2 rounded-lg font-medium transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}