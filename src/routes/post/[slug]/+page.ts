import { load_Post } from "$houdini";
import type { PageLoad } from "./$houdini";

export const load: PageLoad = async (event) => {
  const variables = {
    slug: event.params.slug,
  };
  return {
    ...(await load_Post({ event, variables })),
  };
};
