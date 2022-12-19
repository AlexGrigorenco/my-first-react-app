


import Project from '../components/project/Project'


import { projects } from '../helpers/projectList'

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          
          {projects.map((proj) =>  <Project 
          
            title={proj.title}
            key={proj.id}
            img={proj.img}
            id={proj.id} />
          )}
          
        </ul>
      </div>
    </main>
  );
};

export default Projects;
