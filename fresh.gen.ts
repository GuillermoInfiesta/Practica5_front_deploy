// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $film_id_ from "./routes/film/[id].tsx";
import * as $index from "./routes/index.tsx";
import * as $projects from "./routes/projects.tsx";
import * as $AddFilmModal from "./islands/AddFilmModal.tsx";
import * as $Counter from "./islands/Counter.tsx";
import * as $DeleteProjectModal from "./islands/DeleteProjectModal.tsx";
import * as $FilmDisplay from "./islands/FilmDisplay.tsx";
import * as $FilmResumed from "./islands/FilmResumed.tsx";
import * as $FilmsList from "./islands/FilmsList.tsx";
import * as $RemoveFilmsModal from "./islands/RemoveFilmsModal.tsx";
import * as $Searchbar from "./islands/Searchbar.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/film/[id].tsx": $film_id_,
    "./routes/index.tsx": $index,
    "./routes/projects.tsx": $projects,
  },
  islands: {
    "./islands/AddFilmModal.tsx": $AddFilmModal,
    "./islands/Counter.tsx": $Counter,
    "./islands/DeleteProjectModal.tsx": $DeleteProjectModal,
    "./islands/FilmDisplay.tsx": $FilmDisplay,
    "./islands/FilmResumed.tsx": $FilmResumed,
    "./islands/FilmsList.tsx": $FilmsList,
    "./islands/RemoveFilmsModal.tsx": $RemoveFilmsModal,
    "./islands/Searchbar.tsx": $Searchbar,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
