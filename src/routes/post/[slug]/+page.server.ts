import { PostStore } from "$houdini";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

const NUM_ITEMS = 8;
export const load: PageServerLoad = async (event) => {
  const slug = event.params.slug;
  let after = event.url.searchParams.get("after");
  let before = event.url.searchParams.get("end");
  if (after && before) {
    after = null;
  }
  const myQuery = new PostStore();
  const { data, errors } = await myQuery.fetch({
    event,
    variables: {
      slug: slug,
    },
  });
  if (errors || !data?.post) {
    throw error(404, "Could not fetch data");
  }
  return { data };
};
