<script>
  export let label;
  export let href;
  export let current = false;
</script>

{#if current}
  <li>
    <a
      href={`/${href}`}
      class="block py-2 px-3 md:p-0 text-white bg-purple-600 rounded md:bg-transparent md:text-purple-700"
      aria-current="page">{label}</a
    >
  </li>
{:else}
  <li>
    <a
      href={`/${href}`}
      class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700"
      >{label}</a
    >
  </li>
{/if}
