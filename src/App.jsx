import { Header } from "./components/Header";

import CoreSection from "./components/CoreSection";
import ExpertiseCard from "./components/ExpertiseCard";
import ProjectRow from "./components/ProjectRow";
import Footer from "./components/Footer";

export default function App() {
  const expertise = [
    {
      title: "Parcel Ground Surveys",
      icon: <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />,
    },
    { title: "Tunnel Geology", icon: <path d="M2 12h20M2 12l5-5m0 10-5-5" /> },
    {
      title: "Highway / Railway",
      icon: <path d="M16 2v4M8 2v4M3 10h18M5 14h14M7 18h10" />,
    },
    {
      title: "Dam & Reservoir",
      icon: <path d="M12 2.7l5.7 5.9-5.7 5.9-5.7-5.9zM2 22h20" />,
    },
    { title: "Hydrogeology", icon: <circle cx="12" cy="12" r="10" /> },
    { title: "Zoning Reports", icon: <path d="M3 3h18v18H3zM9 9h6v6H9z" /> },
    { title: "Drilling Works", icon: <path d="M12 5v14M5 12h14" /> },
    {
      title: "Geophysical Studies",
      icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />,
    },
  ];

  const projects = [
    {
      label: "01. Exploration",
      title: "Field Geology Studies",
      desc: "Comprehensive surface analysis and rock mass characterization.",
    },
    {
      label: "02. Extraction",
      title: "Drilling and Field Experiments",
      desc: "Precision core sampling and in-situ testing.",
    },
    {
      label: "03. Analysis",
      title: "Geophysical Studies",
      desc: "ERT and seismic refraction for subsurface imaging.",
    },
    {
      label: "04. Synthesis",
      title: "Geotechnical Design",
      desc: "Foundation and slope stability calculations.",
    },
  ];

  return (
    <div className="bg-[#ece9e3] text-[#2d2d2d]">
      <Header />

      <main className="pt-32">
        {/* CORE SECTION (yeni eklenen) */}
        <CoreSection />

        {/* EXPERTISE */}
        <section id="expertise" className="mx-auto max-w-6xl py-24">
          <div className="mb-8 flex items-end justify-between border-b border-[#4a9e8e] pb-4">
            <h2 className="text-4xl font-bold tracking-tight">
              Technical Expertise
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-4 max-[1000px]:grid-cols-2">
            {expertise.map((item, i) => (
              <ExpertiseCard key={i} title={item.title} icon={item.icon} />
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mx-auto max-w-6xl pb-32">
          <div className="mb-8 flex items-end justify-between border-b border-[#4a9e8e] pb-4">
            <h2 className="text-4xl font-bold tracking-tight">
              Operations Detail
            </h2>
          </div>

          <div>
            {projects.map((p, i) => (
              <ProjectRow key={i} {...p} index={i} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
