import { FunctionalComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { Film } from "../Types.ts";
export const FilmResumed: FunctionalComponent<{ film: Film }> = (props) => {
  return (
    <div class="film-resumed">
      <div class="profile">
        <img src={props.film.staticImageUrl} />
        <h4>{props.film.name}</h4>
      </div>
      <div class="details">
        <span>{props.film.description}</span>
      </div>
    </div>
  );
};
