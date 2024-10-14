<script>
  import '../app.scss'

  import Carousel from '$lib/components/carousel/Carousel.svelte'
  import { fade } from 'svelte/transition'
  import MenuItem from '$lib/components/menu/MenuItem.svelte'
  export let data
  let open = false
</script>

<!-- Menu -->
<nav class="flex justify-start bg-[#156fee] h-16 px-6 items-center">
  <img src="/logo.svg" alt="logo" />
  <ul class="flex flex-wrap items-center font-medium text-base ml-6">
    {#each data.mainRoutes as route}
      <MenuItem item={route} />
    {/each}
  </ul>
</nav>

<slot />

<style>
</style>
