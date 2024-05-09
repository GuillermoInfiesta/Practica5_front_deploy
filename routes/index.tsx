import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { FilmsList } from "../islands/FilmsList.tsx";
import { Film } from "../Types.ts";
import { Searchbar } from "../islands/Searchbar.tsx";
import { Filters } from "../Types.ts";

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown>) => {
    const response = await fetch("https://filmapi.vercel.app/api/films");
    const data = await response.json();
    const brands = Array.from(
      new Set(data.map((film: Film) => {
        return film.brand;
      })),
    );
    const ISO = Array.from(
      new Set(data.map((film: Film) => {
        return film.iso;
      })),
    );

    const filters: Filters = {
      brands: brands.concat("any"),
      ISO: ISO.concat("any"),
    };
    return ctx.render({ films: data, filters: filters });
  },
};

export default function Home(props: PageProps) {
  return (
    <div>
      <Searchbar filters={props.data.filters} />
      <FilmsList films={props.data.films} />
    </div>
  );
}
