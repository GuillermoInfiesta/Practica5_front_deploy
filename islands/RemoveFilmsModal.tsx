import { FunctionComponent } from "preact";
import { Project } from "../Types.ts";
import { useState } from "preact/hooks";
export const RemoveFilmsModal: FunctionComponent<{ projects: Project[] }> = (
  props,
) => {
  const [project, setProject] = useState<string>("");
  const [film, setFilm] = useState<string>("");

  const show_modal = () => {
    const mod = document.getElementById("rem-modal");
    mod.style.display = "block";
  };

  const delete_project = () => {
  };
  return (
    <div>
      <button onClick={show_modal}>Edit Project</button>
      <div
        id="rem-modal"
        class="modal"
        onClick={(event) => {
          const mod = document.getElementById("rem-modal");
          if (event.target === mod) {
            mod.style.display = "none";
          }
        }}
      >
        <div class="rem-films">
          <h2>Remove Films</h2>
          <span>Select the project</span>
          <select
            value={project}
            onInput={(e) => {
              setProject(e.currentTarget.value);
            }}
          >
            {props.projects.map((pr) => (
              <option value={pr.project}>{pr.project}</option>
            ))}
          </select>
          <select
            value={film}
            onInput={(e) => {
              setFilm(e.currentTarget.value);
            }}
          >
            {props.projects.find((p) => p.project === project)?.films.map(
              (f) => <option value={f._id}>{f.name}</option>,
            )}
          </select>
          <button onClick={delete_project}>Delete</button>
        </div>
      </div>
    </div>
  );
};
