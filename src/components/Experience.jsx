import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const experiences = [
    {
      company: "Freelance Full Stack & E-Commerce Developer",
      duration: "Dec 2024 – Present",
      projects: [
        {
          title: "Moksha Boutique – Headless Shopify Storefront",
          stack: ["React.js", "Shopify API", "GraphQL", "Tailwind", "Netlify"],
          points: [
            "Developing headless e-commerce app using React & Shopify Storefront API.",
            "Implemented real-time product & inventory updates with GraphQL.",
            "Built reusable components using Hooks & Context API.",
            "Integrated secure checkout and CI/CD deployment."
          ]
        },
        {
          title: "Invoice & Client Management System",
          stack: ["Laravel", "MySQL", "Blade", "DomPDF"],
          points: [
            "Built invoicing platform with client & project management.",
            "Implemented PDF export and automated email delivery.",
            "Designed scalable financial database schema."
          ]
        },
        {
          title: "Precious Metals Live Price Tracker",
          stack: ["React (TS)", "Node.js", "Express", "D3.js", "MySQL"],
          points: [
            "Developed real-time financial dashboard.",
            "Integrated Metals-API for live price updates.",
            "Built interactive charts with D3.js."
          ]
        }
      ]
    },
    {
      company: "Charter Communications (via Tandym Group)",
      duration: "Feb 2022 – Dec 2024",
      projects: [
        {
          title: "Budgetary Quote System",
          stack: ["PHP", "Vue.js", "JavaScript", "MySQL", "GitLab CI/CD"],
          points: [
            "Built full-stack cost estimation platform.",
            "Integrated REST APIs for pricing workflows.",
            "Improved performance by 30% via query optimization.",
            "Maintained 98% production uptime."
          ]
        },
        {
          title: "Infrastructure Request Portal",
          stack: ["Angular", "PHP", "JWT", "Tailwind", "REST APIs"],
          points: [
            "Developed real-time request tracking system.",
            "Implemented RBAC and secure authentication.",
            "Reduced manual workflow effort by 35%."
          ]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 border-b border-gray-800 pb-4">
          Professional Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-2xl p-6 bg-gray-900 shadow-lg"
            >
              {/* Header */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400">
                    {exp.company}
                  </h3>
                  <p className="text-gray-400">{exp.duration}</p>
                </div>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Collapsible Content */}
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  openIndex === index ? "max-h-[2000px] mt-6" : "max-h-0"
                }`}
              >
                <div className="space-y-8">
                  {exp.projects.map((project, pIndex) => (
                    <div key={pIndex}>
                      <h4 className="text-lg font-semibold mb-3">
                        {project.title}
                      </h4>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.stack.map((tech, tIndex) => (
                          <span
                            key={tIndex}
                            className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Bullet Points */}
                      <ul className="list-disc pl-6 space-y-2 text-gray-300">
                        {project.points.map((point, ptIndex) => (
                          <li key={ptIndex}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}