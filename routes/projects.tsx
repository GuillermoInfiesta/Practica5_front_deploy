import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";
import { Film, Project } from "../Types.ts";
import { ProjectsPage } from "../components/ProjectsPage.tsx";

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown>) => {
    const cookies = getCookies(req.headers);
    const projects = JSON.parse(decodeURIComponent(cookies.projects));

    if (projects === null) {
      return ctx.render(null);
    }

    const res = await fetch("https://filmapi.vercel.app/api/films");
    const data = await res.json();

    const projects_info = projects.map((pr) => {
      const films = pr.film_ids.map((f_id) => {
        return data.find((ob: Film) => ob._id === f_id);
      });
      return ({ project: pr.project, films: films });
    });
    return ctx.render({ projects_info });
  },
};

const Page = (props: PageProps) => {
  return <ProjectsPage projects={props.data.projects_info} />;
};

export default Page;
