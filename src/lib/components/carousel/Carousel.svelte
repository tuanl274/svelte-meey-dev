<script lang="ts">
  import { Splide, SplideSlide } from '@splidejs/svelte-splide'
  import '@splidejs/svelte-splide/css/core'
  import { onMount } from 'svelte'
  let main: Splide
  let thumbs: SplideSlide

  export let slides

  const mainOptions = {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    gap: '1rem',
    pagination: false,
    height: '422px'
  }

  const thumbsOptions = {
    type: 'slide',
    rewind: true,
    gap: '1rem',
    pagination: false,
    fixedWidth: 110,
    fixedHeight: 70,
    cover: true,
    focus: 'center' as const,
    isNavigation: true,
    updateOnMove: true
  }

  onMount(() => {
    if (main && thumbs) {
      main.sync(thumbs.splide)
    }
  })
</script>

<div class="wrapper">
  <Splide
    options={mainOptions}
    bind:this={main}
    aria-labelledby="thumbnails-example-heading"
  >
    {#each slides as slide, index}
      <SplideSlide>
        <img
          src={slide.src}
          alt={slide.alt}
          class="rounded-lg bg-slate-500"
          fetchpriority={index == 0 ? 'high' : 'low'}
          width={737}
          height={422}
        />
      </SplideSlide>
    {/each}

    <div class="splide__arrows">
      <button class="splide__arrow splide__arrow--prev">Prev</button>
      <button class="splide__arrow splide__arrow--next">Next</button>
    </div>
  </Splide>

  <!-- <Splide options={thumbsOptions} bind:this={thumbs}>
    {#each slides as slide}
      <SplideSlide>
        <img src={slide.src} alt={slide.alt} />
      </SplideSlide>
    {/each}
  </Splide> -->
</div>
