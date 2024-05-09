import { FunctionalComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { Film } from "../Types.ts";
import { FilmResumed } from "./FilmResumed.tsx";
import { useEffect } from "preact/hooks";
import { brand, color, f_120, f_35, iso, name } from "../Signals.ts";

export const FilmsList: FunctionalComponent<{ films: Film[] }> = (props) => {
  const filteredFilms = props.films.filter((film) => {
    if (brand.value !== "any" && film.brand !== brand.value) return false;

    console.log(parseInt(iso.value));
    if (iso.value !== "any" && film.iso.toString() !== iso.value) {
      return false;
    }

    if (
      name.value !== "" &&
      film.name.toLowerCase().indexOf(name.value.toLowerCase()) === -1
    ) {
      return false;
    }

    if (
      color.value !== "any" &&
      ((color.value === "true" && !film.color) ||
        (color.value === "false" && film.color))
    ) {
      return false;
    }

    if (f_120.value && !film.formatOneTwenty) return false;

    if (f_35.value && !film.formatThirtyFive) return false;

    return true;
  });
  useEffect(() => {}, []);
  return (
    <div class="film-list">
      {filteredFilms.map((film: Film) => <FilmResumed film={film} />)}
    </div>
  );
};
