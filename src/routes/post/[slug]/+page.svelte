<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
  $: ({ Post } = data);
</script>

<section>
  <h1>Client Page Load</h1>
  <div>
    {#if $Post.fetching}
      <button aria-busy="true" class="secondary" />
    {:else if $Post.errors}
      <div>Error</div>
    {:else}
      <div>
        {#if $Post.data?.post}
          {@const { title, author, content } = $Post.data.post}
          <h1>{title}</h1>
          <p>Written by {author?.name}</p>
          {@html content.html}
        {/if}
      </div>
    {/if}
  </div>
</section>
