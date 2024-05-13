import { FunctionComponent } from "preact";
import { Project } from "../Types.ts";
import { useState } from "preact/hooks";
import jscookie from "npm:js-cookie@3.0.5";
export const RemoveFilmsModal: FunctionComponent<{ projects: Project[] }> = (
  props,
) => {
  const [project, setProject] = useState<string>("");
  const [film, setFilm] = useState<string>("");

  const show_modal = () => {
    const mod = document.getElementById("rem-modal");
    mod.style.display = "block";
  };

  const remove_film = () => {
    console.log("estamos eliminando film");
    console.log(props.projects);
    const cookie = props.projects.map((p) => {
      const film_ids = p.films.filter((f) =>
        !(f._id === film && p.project === project)
      ).map((f) => f._id);
      return { project: p.project, film_ids: film_ids };
    });
    console.log(cookie);

    jscookie.set(
      "projects",
      JSON.stringify(cookie),
      { expires: 99999, path: "/" },
    );

    window.location.reload();
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
          <button onClick={remove_film}>Delete</button>
        </div>
      </div>
    </div>
  );
};
