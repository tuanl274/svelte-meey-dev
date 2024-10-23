<script lang="ts">
  import { Splide, SplideSlide } from '@splidejs/svelte-splide'
  import '@splidejs/svelte-splide/css/core'
  import { onMount } from 'svelte'
  let main: Splide
  let thumbs: SplideSlide

  export let slides: any[]
  export let hasThumbnail = true
  export let height = 422

  const mainOptions = {
    type: slides?.length > 1 ? 'loop' : 'slide',
    perPage: 1,
    perMove: 1,
    gap: '1rem',
    pagination: false,
    height: `${height}px`
  }

  const thumbsOptions = {
    type: 'slide',
    rewind: true,
    gap: '1rem',
    pagination: false,
    perPage: 4,
    fixedHeight: 118,
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
          width={737}
          height={422}
          fetchpriority={index === 0 ? 'high' : 'low'}
          loading={index === 0 ? undefined : 'lazy'}
        />
      </SplideSlide>
    {/each}

    <div class="splide__arrows">
      <button class="splide__arrow splide__arrow--prev">Prev</button>
      <button class="splide__arrow splide__arrow--next">Next</button>
    </div>
  </Splide>

  {#if hasThumbnail && slides.length > 1}
    <Splide options={thumbsOptions} bind:this={thumbs} class="mt-4">
      {#each slides as slide, index}
        <SplideSlide>
          <img src={slide.src} alt={slide.alt} loading="lazy" />
        </SplideSlide>
      {/each}

      <div class="splide__arrows">
        <button class="splide__arrow splide__arrow--prev">Prev</button>
        <button class="splide__arrow splide__arrow--next">Next</button>
      </div>
    </Splide>
  {/if}
</div>
