<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  $: ({ Posts } = data);
  $: posts = Posts?.postsConnection.post;
  $: pageInfo = Posts?.postsConnection.pageInfo;
</script>

<section>
  <h1>Server Page Load</h1>
  <div>
    {#if posts}
      <div class="grid">
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
  </div>
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
