<script lang="ts">
  import type { MenuItem } from '$lib/types/menu/menu.interface'
  import { fade } from 'svelte/transition'

  let open = false
  export let item: MenuItem
</script>

<li
  class="py-4 px-3 relative flex items-center"
  on:mouseenter={() => {
    open = true
  }}
  on:mouseleave={() => {
    open = false
  }}
>
  <a
    class="text-white hover:text-slate-900"
    href={item.url}
    target={item.target}>{item.label}</a
  >

  <!-- Submenu -->
  {#if open}
    <ul
      class="origin-top-right absolute top-full left-1/2 -translate-x-1/2 min-w-[240px] bg-white rounded-lg shadow-xl overflow-hidden z-[10]"
      transition:fade={{ duration: 200 }}
    >
      {#each item.subLink || [] as subMenu, index}
        <li>
          <a
            class="text-black hover:bg-slate-50 flex items-center px-2.5 py-3 text-[0.875rem] font-medium"
            href={subMenu.url}
            target={subMenu.target}
          >
            {subMenu.label}
          </a>
        </li>
      {/each}

      <!-- Additional submenu items... -->
    </ul>
  {/if}
</li>
