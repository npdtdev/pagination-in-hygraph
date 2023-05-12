import { load_Posts } from "$houdini";
import type { PageLoad } from "./$houdini";

export const load: PageLoad = async (event) => {
  const variables = {
    before: event.url.searchParams.get("before"),
    after: event.url.searchParams.get("after"),
  };
  return {
    ...(await load_Posts({ event, variables })),
  };
};
