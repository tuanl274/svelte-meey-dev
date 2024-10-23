<script>
  import ArticleListing from '$lib/components/articles/ArticleListing.svelte'
  const mediaSlides = [
    {
      src: 'https://image.meeyland.com/meeyland/images/2024/10/10/z5914938049056b0e52f474fb368f5c0f8db1a51c2dcdc-1728544185262-590104.jpg?rt=fill&w=286&h=192&q=100&dpr=1&g=ce&wmo=0.8&wmg=sowe&wmx=16&wmy=16&wms=0.25&s=jFfffOQEi4ynD6cSBEUYgH7QPctcDUYVwQgc6R48Wbk',
      alt: 'ảnh 1'
    },
    {
      src: 'https://image.meeyland.com/meeyland/images/2024/10/10/z5914938004320e683c684ebd5295d87522254f7988322-1-1728544201237-946294.jpg?rt=fill&w=286&h=192&q=100&dpr=1&g=ce&wmo=0.8&wmg=sowe&wmx=16&wmy=16&wms=0.25&s=77qMFEG3PMl0DQVH_KFwjb1IjkDe9ZJiOIbwLNUHOGs',
      alt: 'ảnh 2'
    }
  ]
  export let data
  const articles = data.articles.slice(0, 20)
</script>

<div class="layout grid grid-cols-12">
  <div class="col-span-8">
    <h1>Mua bán nhà đất 2024</h1>
    <!-- Card  -->
    <div class="flex flex-col space-y-6">
      {#each articles as article}
        <ArticleListing {article} />
      {/each}
    </div>
  </div>
</div>
