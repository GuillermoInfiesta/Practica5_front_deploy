import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { FilmDisplay } from "../../islands/FilmDisplay.tsx";
import { Film } from "../../Types.ts";
import { getCookies } from "$std/http/cookie.ts";
import jscookie from "npm:js-cookie@3.0.5";

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown>) => {
    const { id } = ctx.params;
    const cookies = getCookies(req.headers);
    const response = await fetch("https://filmapi.vercel.app/api/films");
    const data = await response.json();
    const film = data.filter((f: Film) => {
      return id === f._id;
    })[0];
    if (!cookies.projects) {
      return ctx.render({ film: film, cookie_data: [] });
    }
    const projects = JSON.parse(decodeURIComponent(cookies.projects));
    return ctx.render({ film: film, cookie_data: projects });
  },
};

const Page = (props: PageProps) => {
  return (
    <FilmDisplay
      data={props.data.film}
      cookies={props.data.cookie_data}
    />
  );
};

export default Page;
