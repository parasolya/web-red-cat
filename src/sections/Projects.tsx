import ProjectsSlider from "@/components/common/ProjectsSlider";
import Title from "@/components/ui/Title";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="mb-4 md:mb-16">
          <Title firstWords="Our" secondWords="Projects" />
        </div>
        <ProjectsSlider />
      </div>
    </section>
  );
};

export default Projects;
