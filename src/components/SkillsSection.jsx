import { useState } from "react";
import { cn } from "@/lib/utils";

// Importă iconițele din react-icons
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFigma,
} from "react-icons/si";
import { DiVisualstudio,DiJqueryLogo } from "react-icons/di";
import { FaPython } from "react-icons/fa";
const skills = [
  // Frontend
  { name: "HTML/CSS", icon: <FaHtml5 />, category: "frontend" },
  { name: "JavaScript", icon: <FaJs />, category: "frontend" },
  { name: "React", icon: <FaReact />, category: "frontend" },
  { name: "TypeScript", icon: <SiTypescript />, category: "frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "frontend" },
  { name: "jQuery", icon: <DiJqueryLogo />, category: "frontend" },

  // Backend
  { name: "Node.js", icon: <FaNodeJs />, category: "backend" },
  { name: "Express", icon: <SiExpress />, category: "backend" },
  { name: "MongoDB", icon: <SiMongodb />, category: "backend" },
  { name: "PostgreSQL", icon: <SiPostgresql />, category: "backend" },
  { name: "Python", icon: <FaPython />, category: "backend" },

  // Tools
  { name: "Git/GitHub", icon: <FaGitAlt />, category: "tools" },
  { name: "Docker", icon: <FaDocker />, category: "tools" },
  { name: "Figma", icon: <SiFigma />, category: "tools" },
  { name: "VS Code",icon:<DiVisualstudio />, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover transition hover:shadow-md"
            >
              <div className="flex items-center gap-3 h-full">
                <div className="text-primary text-2xl flex items-center justify-center">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-lg text-foreground">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
