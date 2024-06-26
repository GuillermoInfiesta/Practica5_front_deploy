import { FunctionalComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { Film } from "../Types.ts";
export const FilmResumed: FunctionalComponent<{ film: Film }> = (props) => {
  return (
    <div
      class="film-resumed"
      onClick={() => {
        window.location.href = `/film/${props.film._id}`;
      }}
    >
      <div class="profile">
        <img src={props.film.staticImageUrl} />
        <h4>{props.film.name}</h4>
        <h5>{props.film.brand}</h5>
      </div>
      <div class="details">
        {(props.film.color && <div class="color-circle"></div>) || (
          <div class="bw-circle"></div>
        )}
      </div>
    </div>
  );
};
