<script>
  let visible = false;
</script>

<div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
  <button
    data-collapse-toggle="navbar-toggle"
    type="button"
    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
    aria-controls="navbar-toggle"
    aria-expanded="false"
    on:click={() => (visible = !visible)}
  >
    <span class="sr-only">Avaa valikko</span>
    <svg
      class="w-5 h-5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 17 14"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M1 1h15M1 7h15M1 13h15"
      />
    </svg>
  </button>
</div>
<div
  class="{visible ? 'block' : 'hidden'} w-full md:block md:w-auto"
  id="navbar-toggle"
>
  <slot />
</div>
