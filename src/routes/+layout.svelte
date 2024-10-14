<script>
  import Carousel from '$lib/components/carousel/Carousel.svelte'
  import '../app.css'
  export let data
  console.log('......', data?.mainRoutes)
</script>

<div
  class="h-16 px-6 bg-[#156fee] justify-center items-center gap-2.5 inline-flex w-full"
>
  <div class="grow shrink basis-0 h-10 justify-between items-center flex">
    <div class="grow shrink basis-0 h-10 justify-start items-center gap-6 flex">
      <div
        class="w-[180px] h-[34.29px] pr-[0.37px] justify-center items-center flex"
      >
        <div class="w-[179.63px] h-[34.29px] relative">
          <div
            class="w-[123.61px] h-[14.70px] left-[56.02px] top-[8.56px] absolute"
          >
            <img src="Group.svg" alt="logo" />
          </div>
        </div>
      </div>
      <div class="justify-start items-start gap-1 flex">
        {#each data.mainRoutes as route}
          <div
            class="h-10 p-1 flex-col justify-center items-center gap-2 inline-flex"
          >
            <div class="px-2 justify-center items-center gap-2 inline-flex">
              <div
                class="text-center text-white text-base font-medium font-['Be Vietnam Pro'] leading-normal tracking-wide"
              >
                {route.label}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
    <div class="justify-end items-center gap-4 flex">
      <div
        class="p-0.5 bg-white/0 rounded-2xl justify-center items-center flex"
      >
        <div class="w-5 h-5 relative"></div>
      </div>
      <div class="px-3 py-2 rounded justify-center items-center gap-1 flex">
        <div
          class="text-center text-white text-base font-normal font-['Be Vietnam Pro'] leading-normal"
        >
          Đăng nhập / Đăng ký
        </div>
      </div>
      <div
        class="px-3 py-2 bg-white rounded justify-center items-center gap-1 flex"
      >
        <div class="w-6 h-6 justify-center items-center flex">
          <div class="w-6 h-6 relative"></div>
        </div>
        <div
          class="text-center text-[#156fee] text-base font-medium font-['Be Vietnam Pro'] leading-normal"
        >
          Đăng tin
        </div>
      </div>
    </div>
  </div>
</div>

<slot />

<style>
  * {
    font-family: 'Be Vietnam Pro', sans-serif !important;
  }
</style>
