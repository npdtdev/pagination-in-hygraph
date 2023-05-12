<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
  $: ({ Posts } = data);
</script>

<section>
  <h1>Client Page Load</h1>
  <div>
    {#if $Posts.fetching}
      <button aria-busy="true" class="secondary" />
    {:else if $Posts.errors}
      <div>Err</div>
    {:else}
      <div class="grid">
        {#each $Posts.data?.postsConnection.post ?? [] as p}
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
    {#if $Posts.data?.postsConnection.pageInfo.hasPreviousPage}
      <a href={`?before=${$Posts.data.postsConnection.pageInfo.startCursor}`}>
        <button>Previous</button>
      </a>
    {/if}
    {#if $Posts.data?.postsConnection.pageInfo.hasNextPage}
      <a href={`?after=${$Posts.data.postsConnection.pageInfo.endCursor}`}>
        <button>Next</button>
      </a>
    {/if}
  </div>
</section>
