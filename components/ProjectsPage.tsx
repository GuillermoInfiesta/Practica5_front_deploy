import { FunctionComponent } from "preact";
import { Project } from "../Types.ts";
import { DeleteProjectModal } from "../islands/DeleteProjectModal.tsx";
import { RemoveFilmsModal } from "../islands/RemoveFilmsModal.tsx";

export const ProjectsPage: FunctionComponent<{ projects: Project[] }> = (
  props,
) => {
  console.log(props.projects);
  return (
    <div class="projects-page">
      <div class="projects-resume">
        <h2>Projects</h2>
        <div class="flex flex-col">
          {props.projects.map((p: Project) => (
            <a href={`#${p.project}`}>{p.project}</a>
          ))}
        </div>
      </div>
      <div class="projects-details">
        <DeleteProjectModal projects={props.projects} />
        <RemoveFilmsModal projects={props.projects} />
        {props.projects.map((p: Project) => (
          <div id={p.project} class="project-display">
            <div class="project-title">
              <h3>{p.project}</h3>
              <div>
                <button>Edit</button>
                <button>Borrar</button>
              </div>
            </div>
            <div class="project-films">
              {p.films.map((f) => (
                <div class="flex">
                  <img src={f.staticImageUrl} />
                  <h4>{f.name}</h4>
                  <h6>{f.brand}</h6>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
