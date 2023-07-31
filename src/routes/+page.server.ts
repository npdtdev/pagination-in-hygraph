import { PostsStore, type Posts$input } from "$houdini";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

const NUM_ITEMS = 1;
export const load: PageServerLoad = async (event) => {
  let after = event.url.searchParams.get("after");
  let before = event.url.searchParams.get("before");
  if (after && before) {
    before = null;
  }
  const myQuery = new PostsStore();
  const variables: Posts$input = {
    after: after,
    before: before,
    first: null,
    last: null,
  };

  if (!after && !before) {
    variables.first = NUM_ITEMS;
  } else if (after) {
    variables.first = NUM_ITEMS;
  } else if (before) {
    variables.last = NUM_ITEMS;
  }

  let { data, errors } = await myQuery.fetch({
    event,
    variables,
  });
  if (errors || !data) {
    throw error(400, "Could not fetch data");
  }
  return { data };
};
