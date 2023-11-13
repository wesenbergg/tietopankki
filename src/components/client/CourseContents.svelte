<script lang="ts">
  export let chapters;

  const findSubChapters = (id: string) =>
    chapters?.filter((c) => c.depth === 2 && c.slug.includes(id));
</script>

<aside class="max-md:hidden top-24">
  <nav>
    <ol>
      {#each chapters as content}
        {#if content.depth === 1}
          <li>
            <a
              href={`/${content.collection}/${content.slug}`}
              class={`block text-purple-600 hover:underline pl-2 border-purple-500 hover:border-l-2`}
              >{content.data.title}</a
            >
            <ul>
              {#each findSubChapters(content.slug) as cont}
                <li>
                  <a
                    href={`/${cont.collection}/${cont.slug}`}
                    class={`flex w-full text-purple-600 hover:underline pl-2 border-purple-500 hover:border-l-2`}
                    >{cont.data.title}</a
                  >
                </li>
              {/each}
            </ul>
          </li>
        {/if}
      {/each}
    </ol>
  </nav>
</aside>

<style>
  aside {
    width: 16rem;
    position: fixed;
    left: 0;
    padding: 0;
  }
  ul,
  ol {
    padding-left: 1.5rem;
  }
</style>
