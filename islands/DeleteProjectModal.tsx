import { FunctionComponent } from "preact";
import { Project } from "../Types.ts";
import { useState } from "preact/hooks";
import jscookie from "npm:js-cookie@3.0.5";

export const DeleteProjectModal: FunctionComponent<{ projects: Project[] }> = (
  props,
) => {
  const [project, setProject] = useState<string>("");
  const [valid, setValid] = useState<boolean>(false);

  const show_modal = () => {
    const mod = document.getElementById("del-modal");
    mod.style.display = "block";
  };
  const delete_project = () => {
    const newProjects = props.projects.filter((pr) => pr.project !== project);
    const cookie = newProjects.map((pr) => {
      const film_ids = pr.films.map((f) => f._id);
      return { project: pr.project, film_ids: film_ids };
    });

    jscookie.set(
      "projects",
      JSON.stringify(cookie),
      { expires: 99999, path: "/" },
    );

    window.location.reload();
  };
  return (
    <div>
      <button onClick={show_modal}>Delete Project</button>
      <div
        id="del-modal"
        class="modal"
        onClick={(event) => {
          const mod = document.getElementById("del-modal");
          if (event.target === mod) {
            mod.style.display = "none";
          }
        }}
      >
        <div class="delete-project">
          <h2>Remove a Project</h2>
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
          <input
            placeholder={`Type "${project}" to confirm`}
            onInput={(e) => {
              if (e.currentTarget.value === project) {
                setValid(true);
              } else {
                setValid(false);
              }
            }}
          />
          <button disabled={!valid} onClick={delete_project}>Delete</button>
        </div>
      </div>
    </div>
  );
};
