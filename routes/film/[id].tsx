import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { FilmDisplay } from "../../components/FilmDisplay.tsx";
import { Film } from "../../Types.ts";

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown>) => {
    const { id } = ctx.params;
    const response = await fetch("https://filmapi.vercel.app/api/films");
    const data = await response.json();
    const film = data.filter((f: Film) => {
      return id === f._id;
    })[0];
    return ctx.render({ film: film });
  },
};

const Page = (props: PageProps) => {
  return <FilmDisplay data={props.data.film} />;
};

export default Page;
