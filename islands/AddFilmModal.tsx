import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import jscookie from "npm:js-cookie@3.0.5";

export const AddFilmModal: FunctionComponent<
  { projects: { project: string; film_ids: string[] }[]; film_id: string }
> = (props) => {
  const [existingProject, setExistingProject] = useState<string>("");
  const [newProject, setNewProject] = useState<string>("");

  const add = () => {
    const projects = props.projects;
    const project = projects.find((p) => p.project === existingProject);
    const exists =
      project.film_ids.findIndex((p) => p === props.film_id) !== -1;
    if (exists) {
      console.log("ya existe en la lista"); //Poner mensaje en pantalla
      return;
    }
    project.film_ids.push(props.film_id);
    //console.log(projects);
    jscookie.set(
      "projects",
      JSON.stringify(projects),
      { expires: 99999, path: "/" },
    );
    window.location.reload();
  };
  const create_add = () => {
    const projects = props.projects;
    const project = projects.find((p) => p.project === newProject);
    if (project) {
      console.log("El proyecto ya existe"); //Poner mensaje en pantalla
      return;
    }
    projects.push({ project: newProject, film_ids: [props.film_id] });
    jscookie.set(
      "projects",
      JSON.stringify(projects),
      { expires: 99999, path: "/" },
    );
    window.location.reload();
  };
  return (
    <div
      id="add-modal"
      class="modal"
      onClick={(event) => {
        const mod = document.getElementById("add-modal");
        if (event.target === mod) {
          mod.style.display = "none";
        }
      }}
    >
      <div class="add-film">
        <h2>Add a film</h2>
        <div class="flex flex-col gap-8">
          <div class="input-box">
            <span>Add to an existing project</span>
            <div class="a">
              <select
                value={existingProject}
                onInput={(e) => {
                  setExistingProject(e.currentTarget.value);
                }}
              >
                {props.projects.filter((pr) =>
                  pr.film_ids.indexOf(props.film_id) === -1
                )
                  .map((pr) => <option value={pr.project}>{pr.project}
                  </option>)}
              </select>
              <button disabled={existingProject === ""} onClick={add}>
                Add
              </button>
            </div>
          </div>
          <div class="input-box">
            <span>Add to new project</span>
            <div class="a">
              <input
                placeholder="Project name"
                type="text"
                onInput={(e) => {
                  setNewProject(e.currentTarget.value);
                }}
              />
              <button
                disabled={newProject === "" || newProject.indexOf(" ") !== -1}
                onClick={create_add}
              >
                Create + add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
