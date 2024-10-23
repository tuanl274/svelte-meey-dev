<script>
  import Carousel from '../carousel/Carousel.svelte'

  export let mediaSlides
</script>

<article class="overflow-hidden p-[2px] relative rounded animation-electron">
  <a
    draggable="false"
    class="flex gap-x-4 relative rounded bg-white transition-all duration-300 hover:shadow-top-divide group/article overflow-hidden"
    href="/ban-can-ho-chung-cu-thai-binh-thai-binh-i1422/302003859"
    ><div class="w-[286px]">
      <Carousel slides={mediaSlides} hasThumbnail={false} height={192} />
    </div>
    <div class="flex flex-1 flex-col py-3 pr-4 min-w-0">
      <div draggable="false" class="flex-1">
        <div class="flex items-center justify-between gap-x-2 mb-2">
          <h3
            class="break-word hover:text-primary-600 transition-all text-secondary-900 line-clamp-2 meey-sub-18m tracking-009"
            title="Căn chung cư cao cấp Eden Garden, thành phố Thái Bình, 2 ngủ, 2 vệ sinh, 75,4m2, chỉ từ 750 triệu"
          >
            Căn chung cư cao cấp Eden Garden, thành phố Thái Bình, 2 ngủ, 2 vệ
            sinh, 75,4m2, chỉ từ 750 triệu
          </h3>
          <div
            class="flex items-center justify-end flex-shrink-0 gap-x-2 flex-row"
          >
            <div
              class="bg-primary-800 rounded-full meey-caption-12m text-white flex items-center justify-center w-8 h-8 md:w-9 md:h-9"
            >
              6
            </div>
          </div>
        </div>
        <div class="flex items-start gap-x-6 mb-2">
          <div
            class="meey-body-14r text-secondary-600 flex items-center space-x-1 flex-shrink-0"
          >
            <i class="ml-location-b text-secondary-400 text-base leading-4"></i>
            <div class="meey-body-14r line-clamp-1">
              Tp. Thái Bình, T. Thái Bình
            </div>
          </div>
          <div class="flex items-center gap-x-1 flex-shrink-0">
            <i class="ml-clock-b text-secondary-400 text-base leading-4"
            ></i><span class="meey-body-14r text-secondary-600"
              >2 ngày trước</span
            >
          </div>
        </div>
        <div class="flex items-end gap-x-6">
          <div class="flex flex-row items-end space-x-1">
            <div
              class="full-tablet:text-base text-fs-20 font-medium text-error-600"
            >
              Thương lượng
            </div>
            <div
              class="meey-caption-12r text-secondary-600 full-tablet:mb-0.5 mb-1"
            ></div>
          </div>
          <div class="flex items-center space-x-2">
            <div class="flex items-end">
              <i class="text-base mr-1 text-secondary-400 ml-format-square-b"
              ></i><span
                class="line-clamp-1 meey-body-14r text-secondary-600"
                title="75.4 m²">75.4 m²</span
              >
            </div>
            <div class="flex items-end">
              <i class="text-base mr-1 text-secondary-400 ml-bed-single-b"
              ></i><span
                class="line-clamp-1 meey-body-14r text-secondary-600"
                title="2">2</span
              >
            </div>
            <div class="flex items-end">
              <i class="text-base mr-1 text-secondary-400 ml-bathtub-b"
              ></i><span
                class="line-clamp-1 meey-body-14r text-secondary-600"
                title="2">2</span
              >
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex items-center justify-between w-full border-t border-[rgba(228,231,236,0.5)] pt-2 gap-2 mt-1"
      >
        <div class="flex items-center flex-1 min-w-0">
          <div class="relative">
            <div
              class="flex flex-[0_0_auto] rounded-full w-9 h-9 object-cover bg-secondary-200 text-secondary-500 justify-center items-center content-center text-avatar-md !w-10 !h-10"
            >
              HL
            </div>
          </div>
          <div class="flex-1 overflow-hidden ml-2">
            <div
              class="break-all w-full overflow-hidden text-ellipsis whitespace-nowrap text-fs-14"
            >
              Hà Long
            </div>
            <div class="mt-1 w-full text-fs-12 text-grey-500">Môi giới</div>
          </div>
        </div>
        <div class="flex items-center space-x-2 flex-grow-0 w-[133px] h-[32px]">
          <button
            class="meey-button meey-button-large meey-button-solid whitespace-nowrap !text-fs-14 w-[133px] h-[32px] !px-0 justify-center"
            type="button">092 7... Hiện số</button
          >
        </div>
      </div>
    </div></a
  >
</article>
