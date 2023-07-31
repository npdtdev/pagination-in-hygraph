<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  $: ({ data: d } = data);
  $: ({
    postsConnection: { posts, pageInfo },
  } = d);
</script>

<section>
  {#if posts}
    <div class="">
      {#each posts as p}
        {@const {
          node: { excerpt, author, title, slug },
        } = p}
        <article>
          <h2>{title}</h2>
          <p>Written by {author?.name}</p>
          <p>{excerpt}</p>
          <a href={`/post/${slug}`}>Read the rest</a>
        </article>
      {/each}
    </div>
  {/if}
  <div>
    {#if pageInfo?.hasPreviousPage}
      <a href={`?before=${pageInfo?.startCursor}`}>
        <button>Previous</button>
      </a>
    {/if}
    {#if pageInfo?.hasNextPage}
      <a href={`?after=${pageInfo?.endCursor}`}>
        <button>Next</button>
      </a>
    {/if}
  </div>
</section>
