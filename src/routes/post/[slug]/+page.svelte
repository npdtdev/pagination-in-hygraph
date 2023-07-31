<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
  $: ({ data: d } = data);
  $: ({ post } = d);
</script>

<section>
  <h1>{post?.title}</h1>
  {@html post?.content.html}
</section>
