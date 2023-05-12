import { PostsStore } from "$houdini";
import type { PageServerLoad } from "./$houdini";

export const load: PageServerLoad = async (event) => {
  const variables = {
    before: event.url.searchParams.get("before"),
    after: event.url.searchParams.get("after"),
  };
  const postsStore = new PostsStore();
  const data = await postsStore.fetch({ event, variables });
  return {
    Posts: data.data,
  };
};
