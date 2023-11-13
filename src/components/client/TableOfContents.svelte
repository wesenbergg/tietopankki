<script>
  export let toc;
</script>

<details
  class="lg:hidden fixed w-full max-md:ml-8 md:ml-64 bg-white top-16 pt-2 z-10"
>
  <summary>Yhteenveto</summary>
  {#each toc as content}
    <a
      href={`#${content.slug}`}
      class={`block text-purple-600 hover:underline pl-${content.depth * 2}`}
      >{content.text}</a
    >
  {/each}
</details>

<aside class="max-lg:hidden top-24">
  <nav>
    <ul>
      {#each toc as content}
        <li>
          <a
            href={`#${content.slug}`}
            class={`text-purple-600 hover:underline pl-2 border-purple-500 hover:border-l-2`}
            >{content.text}</a
          >
        </li>
      {/each}
    </ul>
  </nav>
</aside>

<style>
  aside {
    width: 16rem;
    position: fixed;
    right: 0;
    padding: 0;
  }
</style>
