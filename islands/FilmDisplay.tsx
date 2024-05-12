import { FunctionComponent } from "preact";
import { Film } from "../Types.ts";
import { AddFilmModal } from "./AddFilmModal.tsx";

export const FilmDisplay: FunctionComponent<
  { data: Film; cookies: { project: string; film_ids: string[] }[] }
> = (
  props,
) => {
  const showModal = () => {
    const mod = document.getElementById("add-modal");
    mod.style.display = "block";
  };

  return (
    <div class="film-page">
      <div class="film-image">
        <img
          src={props.data.staticImageUrl}
          alt={`${props.data.name}'s film image`}
        />
      </div>
      <div class="film-data">
        <div class="title">
          <h2>{props.data.name}</h2>
          <h4>{props.data.brand}</h4>
          <button onClick={showModal}>Add to project</button>
        </div>
        <div class="details">
          <div class="info">
            <label>ISO</label>
            <p>{props.data.iso}</p>
          </div>
          <div class="info">
            <label>Formats</label>
            <p>
              {props.data.formatOneTwenty && `120mm `}
              {props.data.formatThirtyFive && `35mm`}
            </p>
          </div>
          <div class="info">
            <label>Color</label>
            <p>{props.data.color && `Color Film` || `Black and white`}</p>
          </div>
          <div class="info">
            <label>Process</label>
            <p>{props.data.process}</p>
          </div>
          <div class="info">
            <label>Description</label>
            <p>{props.data.description}</p>
          </div>
          <div class="info">
            <label>Features</label>
            <div class="features">
              {props.data.keyFeatures.map((ft) => <p class="ft">{ft.feature}
              </p>)}
            </div>
          </div>
        </div>
      </div>
      <AddFilmModal projects={props.cookies} film_id={props.data._id} />
    </div>
  );
};
