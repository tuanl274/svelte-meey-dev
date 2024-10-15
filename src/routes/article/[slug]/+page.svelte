<script lang="ts">
  import type { PageData } from './$types'
  import Carousel from '$lib/components/carousel/Carousel.svelte'
  import { browser } from '$app/environment'

  export let data: PageData
  const article = data.article
</script>

<div class="bg-[#F2F4F7] w-full h-full">
  <div class="layout grid grid-cols-12 gap-6">
    <div class="col-span-12 flex items-center">
      <div class="flex-grow">
        <!-- <p class="text-[#667085] text-sm font-normal leading-snug mt-6">
          Trang chủ / Hà Nội / Mua bán đất nền dự án
        </p> -->
        <h1
          class="self-stretch text-[#101828] text-2xl font-medium leading-loose mt-6"
        >
          {article.title}
        </h1>
        <p class="text-[#475467] text-base font-normal leading-normal">
          Ngày đăng: 10/04/2021
        </p>
      </div>
      <div class="h-9 justify-end items-center gap-2 flex">
        <div class="flex-col justify-center items-end inline-flex">
          <div
            class="text-right text-[#475467] text-sm font-medium leading-snug tracking-wide"
          >
            Xuất sắc
          </div>
        </div>
        <div
          class="w-9 h-9 p-2 bg-[#1849a9] rounded-[999px] flex-col justify-center items-center gap-0.5 inline-flex"
        >
          <div class="flex-col justify-start items-end flex">
            <div class="text-right text-white text-xs font-medium leading-none">
              {Math.floor(article.totalPoint)}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-span-7 flex flex-col space-y-6">
      <!-- Gallery -->
      <!-- <div>
        <div class="w-full h-[422px] mb-4 rounded-lg">
          <img
            fetchpriority="high"
            loading="eager"
            src={data.largeImage}
            alt="img-alt"
            width={737}
            height={422}
            class="rounded-lg"
          />
        </div>
        <div class="flex space-x-4">
          {#each [1, 2, 3, 4] as item}
            <div class="w-full h-[118px] rounded">
              <img
                fetchpriority="high"
                loading="eager"
                src={data.smallImage}
                alt="img-alt"
                width={172}
                height={118}
                class="rounded"
              />
            </div>
          {/each}
        </div>
      </div> -->
      <Carousel slides={data.slides} />
      <!-- Mô tả tin đăng -->
      <div class="rounded-lg bg-[#fff] p-6 text-secondary-800" id="information">
        <h5 class="text-fs-20 mb-4 font-medium">Mô tả tin đăng</h5>
        <div class="text-fs-14 mb-3 break-word article-description">
          <div class="text-grey-900 text-fs-14 leading-normal cursor-pointer">
            <div class="[&amp;>p]:leading-normal leading-normal text-grey-900">
              {@html article.description}

              <div
                class="inline-flex items-center text-primary-600 text-fs-14 font-medium cursor-pointer justify-center"
              >
                <span>Thu gọn</span><i class="text-fs-12 ml-1 ml-arrow-up"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="flex space-x-3 items-start">
          <p class="text-fs-14 text-grey-900">Liên hệ:</p>
          <div class="flex flex-col space-y-3">
            <div class="flex text-fs-14 items-center">
              <span class="mr-2 text-fs-14 text-grey-900">SĐT 1</span>
              <div
                class="flex space-x-1.5 items-center pl-2 bg-secondary-100 rounded"
              >
                <span class="text-primary-700 text-fs-14">096 511 ****</span
                ><button
                  class="meey-button meey-button-small meey-button-solid !py-[3px] !px-3 !bg-primary-600"
                  ><span class="text-fs-12 px-1 font-normal">Hiện số</span
                  ></button
                >
              </div>
            </div>
            <div class="flex text-fs-14 items-center">
              <span class="mr-2 text-fs-14 text-grey-900">SĐT 2</span>
              <div
                class="flex space-x-1.5 items-center pl-2 bg-secondary-100 rounded"
              >
                <span class="text-primary-700 text-fs-14">092 615 ****</span
                ><button
                  class="meey-button meey-button-small meey-button-solid !py-[3px] !px-3 !bg-primary-600"
                  ><span class="text-fs-12 px-1 font-normal">Hiện số</span
                  ></button
                >
              </div>
            </div>
          </div>
        </div>
        <h5 class="mt-8 mb-4 font-medium text-fs-20 text-secondary-800">
          Thông tin chi tiết
        </h5>
        <div
          class="grid grid-cols-2 gap-6 transition-all overflow-hidden duration-500"
        >
          <div class="col-span-2">
            <div class="flex items-start">
              <span
                class="text-fs-14 font-normal text-secondary-500 flex-shrink-0 w-[140px]"
                >Mức độ giao dịch</span
              ><span
                class="text-base font-medium leading-6 text-secondary-900 flex-grow"
                >Càng sớm càng tốt</span
              >
            </div>
          </div>
          <div class="col-span-2">
            <div class="flex items-start">
              <span
                class="text-fs-14 font-normal text-secondary-500 flex-shrink-0 w-[140px]"
                >Ưu điểm BĐS</span
              ><span
                class="text-base font-medium leading-6 text-secondary-900 flex-grow"
                >Dân trí cao</span
              >
            </div>
          </div>
        </div>
      </div>

      <div class="rounded-lg bg-[#fff] p-6 text-secondary-800">
        <h3 class="text-fs-20 mb-4 font-medium">Vị trí bản đồ</h3>
        <div class="h-[300px] w-full rounded-lg z-[100]">
          {#if browser}
            <iframe
              title="map sdk"
              name="map iframe"
              class="gmap_iframe"
              width="100%"
              height={'300px'}
              src="https://maps.google.com/maps?width=840&height=420&hl=en&q=21.0240383,105.8026258&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            >
            </iframe>
          {/if}
        </div>
      </div>

      <!-- Bat dong sn tuong tu -->
      <div class="bg-[#fff] p-6 text-secondary-900 flex flex-col mt-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="meey-heading-5m leading-none">Bất động sản tương tự</h2>
          <a
            href="/ban-can-ho-chung-cu-bac-tu-liem-ha-noi-i1432?category=5deb722db4367252525c1d00&amp;locations=%5B%7B%22city%22%3A%225e5501caeb80a7245175dddb%22%2C%22district%22%3A%225e5501caeb80a7245175de35%22%7D%5D&amp;totalPrices[]=4725000000_8775000000&amp;typeOfHouses[]=65eeb3cf01dfc72e1912edb2"
            ><span class="text-primary-600 meey-sub-14m"
              >Xem <!-- -->452<!-- -->+ tin đăng</span
            ></a
          >
        </div>
        <a
          class="text-fs-14 rounded-lg font-medium tracking-007 hover:shadow-top-filter"
          title="Bán gấp căn hộ 4 phòng ngủ chung cư An Bình city – khu đô thị Thành phố Giao lưu"
          href="/ban-can-ho-chung-cu-bac-tu-liem-ha-noi-i1432/301909028"
          ><div class="flex items-start space-x-3 h-full">
            <div class="w-[200px] flex-shrink-0 rounded-lg h-full">
              <div class="relative h-full h-full rounded-sm">
                <div class="lazyload-wrapper">
                  <img
                    class="object-cover w-full h-full rounded-sm"
                    alt="Bán gấp căn hộ 4 phòng ngủ chung cư An Bình city – khu đô thị Thành phố Giao lưu"
                    width="200"
                    height="133"
                    fetchpriority="low"
                    src="https://image.meeyland.com/meeyland/images/2024/10/12/f8dfdf1553984737bcd89300e3d9015b-1728730494972-626351.jpg?rt=fill&amp;w=200&amp;h=133&amp;q=100&amp;dpr=1&amp;g=ce&amp;wmo=0.8&amp;wmg=sowe&amp;wmx=16&amp;wmy=16&amp;wms=0.25&amp;s=kJDQXPIBclLeI-PZr4QDuWShiqMStEb_hyCiSyNCr7w"
                  />
                </div>
                <div
                  class="absolute w-full -bottom-6 flex items-center justify-center mb-10"
                >
                  <button
                    class="inline-block mx-1 rounded-full flex-shrink-0 bg-white h-2 w-2"
                    aria-label="dot"
                  ></button>
                </div>
                <div
                  class="!absolute sm:top-2 sm:right-2 top-1 right-1 z-[2] w-6 h-6"
                >
                  <div>
                    <div
                      class="cursor-pointer rounded-full w-6 h-6 flex items-center justify-center transition-all duration-300 bg-secondary-100 text-secondary-600"
                    >
                      <i
                        class="ml-heart-b transition-all duration-500 text-base !leading-none text-secondary-600"
                      ></i>
                    </div>
                  </div>
                </div>
                <div
                  class="absolute flex items-center space-x-2 top-1 left-1"
                ></div>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-y-1 pl-0 w-full">
              <div class="flex items-center justify-between gap-x-2 w-full">
                <h3
                  class="text-fs-14 font-medium tracking-007 break-word line-clamp-2 line-clamp-1"
                >
                  Bán gấp căn hộ 4 phòng ngủ chung cư An Bình city – khu đô thị
                  Thành phố Giao lưu
                </h3>
                <div
                  class="flex items-center justify-end flex-shrink-0 gap-x-2 flex-row"
                >
                  <div
                    class="bg-primary-800 rounded-full meey-caption-12m text-white flex items-center justify-center w-8 h-8 md:w-9 md:h-9"
                  >
                    5.8
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-x-1 flex-shrink-0">
                <i class="ml-clock-b text-secondary-400 text-base leading-4"
                ></i><span class="meey-body-14r text-secondary-600"
                  >1 tiếng trước</span
                >
              </div>
              <div
                class="meey-body-14r text-secondary-600 flex items-center space-x-1 flex-shrink-0"
              >
                <i class="ml-location-b text-secondary-400 text-base leading-4"
                ></i>
                <div class="meey-body-14r line-clamp-1">
                  Q. Bắc Từ Liêm, Tp. Hà Nội
                </div>
              </div>
              <div class="flex gap-x-6">
                <div class="flex flex-row items-end space-x-1">
                  <div
                    class="full-tablet:text-base text-fs-20 font-medium text-error-600"
                  >
                    6,2 tỷ
                  </div>
                  <div
                    class="meey-caption-12r text-secondary-600 full-tablet:mb-0.5 mb-1"
                  >
                    68,89 tr/m²
                  </div>
                </div>
                <div class="flex items-center space-x-2">
                  <div class="flex items-end">
                    <i
                      class="text-base mr-1 text-secondary-400 ml-format-square-b"
                    ></i><span
                      class="line-clamp-1 meey-body-14r text-secondary-600"
                      title="90 m²">90 m²</span
                    >
                  </div>
                  <div class="flex items-end">
                    <i class="text-base mr-1 text-secondary-400 ml-bed-single-b"
                    ></i><span
                      class="line-clamp-1 meey-body-14r text-secondary-600"
                      title="3">3</span
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
          </div></a
        ><a
          class="text-fs-14 rounded-lg font-medium tracking-007 hover:shadow-top-filter mt-6"
          title="Bán căn hộ 3 phòng ngủ chung cư Ngoại Giao Đoàn quận Bắc Từ Liêm"
          href="/ban-can-ho-chung-cu-bac-tu-liem-ha-noi-i1432/301907497"
          ><div class="flex items-start space-x-3 h-full">
            <div class="w-[200px] flex-shrink-0 rounded-lg h-full">
              <div class="relative h-full h-full rounded-sm">
                <div class="lazyload-wrapper">
                  <img
                    class="object-cover w-full h-full rounded-sm"
                    alt="Bán căn hộ 3 phòng ngủ chung cư Ngoại Giao Đoàn quận Bắc Từ Liêm"
                    width="200"
                    height="133"
                    fetchpriority="low"
                    src="https://image.meeyland.com/meeyland/images/2024/10/12/picbancanho4ngu153m2tangtrungviewthoangfulldocosodotoae4ciputra202378115219-1728722549054-547051.jpg?rt=fill&amp;w=200&amp;h=133&amp;q=100&amp;dpr=1&amp;g=ce&amp;wmo=0.8&amp;wmg=sowe&amp;wmx=16&amp;wmy=16&amp;wms=0.25&amp;s=zfMODRS7Sgvbd2X7T06rhpf3IGnK_ndWRYj535LuUEs"
                  />
                </div>
                <div
                  class="absolute w-full -bottom-6 flex items-center justify-center mb-10"
                >
                  <button
                    class="inline-block mx-1 rounded-full flex-shrink-0 bg-white h-2 w-2"
                    aria-label="dot"
                  ></button>
                </div>
                <div
                  class="!absolute sm:top-2 sm:right-2 top-1 right-1 z-[2] w-6 h-6"
                >
                  <div>
                    <div
                      class="cursor-pointer rounded-full w-6 h-6 flex items-center justify-center transition-all duration-300 bg-secondary-100 text-secondary-600"
                    >
                      <i
                        class="ml-heart-b transition-all duration-500 text-base !leading-none text-secondary-600"
                      ></i>
                    </div>
                  </div>
                </div>
                <div
                  class="absolute flex items-center space-x-2 top-1 left-1"
                ></div>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-y-1 pl-0 w-full">
              <div class="flex items-center justify-between gap-x-2 w-full">
                <h3
                  class="text-fs-14 font-medium tracking-007 break-word line-clamp-2 line-clamp-1"
                >
                  Bán căn hộ 3 phòng ngủ chung cư Ngoại Giao Đoàn quận Bắc Từ
                  Liêm
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
              <div class="flex items-center gap-x-1 flex-shrink-0">
                <i class="ml-clock-b text-secondary-400 text-base leading-4"
                ></i><span class="meey-body-14r text-secondary-600"
                  >1 tiếng trước</span
                >
              </div>
              <div
                class="meey-body-14r text-secondary-600 flex items-center space-x-1 flex-shrink-0"
              >
                <i class="ml-location-b text-secondary-400 text-base leading-4"
                ></i>
                <div class="meey-body-14r line-clamp-1">
                  Q. Bắc Từ Liêm, Tp. Hà Nội
                </div>
              </div>
              <div class="flex gap-x-6">
                <div class="flex flex-row items-end space-x-1">
                  <div
                    class="full-tablet:text-base text-fs-20 font-medium text-error-600"
                  >
                    7 tỷ
                  </div>
                  <div
                    class="meey-caption-12r text-secondary-600 full-tablet:mb-0.5 mb-1"
                  >
                    68,63 tr/m²
                  </div>
                </div>
                <div class="flex items-center space-x-2">
                  <div class="flex items-end">
                    <i
                      class="text-base mr-1 text-secondary-400 ml-format-square-b"
                    ></i><span
                      class="line-clamp-1 meey-body-14r text-secondary-600"
                      title="102 m²">102 m²</span
                    >
                  </div>
                  <div class="flex items-end">
                    <i class="text-base mr-1 text-secondary-400 ml-bed-single-b"
                    ></i><span
                      class="line-clamp-1 meey-body-14r text-secondary-600"
                      title="3">3</span
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
          </div></a
        ><a
          class="text-fs-14 rounded-lg font-medium tracking-007 hover:shadow-top-filter mt-6"
          title="Bán căn góc chung cư khu đô thị Goldmark City 136 Hồ Tùng Mậu 104m2, 3 ngủ, 2 vệ sinh, 2 ban công, full nội thất"
          href="/ban-can-ho-chung-cu-bac-tu-liem-ha-noi-i1432/301424782"
          ><div class="flex items-start space-x-3 h-full">
            <div class="w-[200px] flex-shrink-0 rounded-lg h-full">
              <div class="relative h-full h-full rounded-sm">
                <div class="lazyload-wrapper">
                  <img
                    class="object-cover w-full h-full rounded-sm"
                    alt="Bán căn góc chung cư khu đô thị Goldmark City 136 Hồ Tùng Mậu 104m2, 3 ngủ, 2 vệ sinh, 2 ban công, full nội thất"
                    width="200"
                    height="133"
                    fetchpriority="low"
                    src="https://image.meeyland.com/meeyland/images/2024/09/01/z578843447078908d407ab96117c499638c9694dfebf43-1725206169735-211822.jpg?rt=fill&amp;w=200&amp;h=133&amp;q=100&amp;dpr=1&amp;g=ce&amp;wmo=0.8&amp;wmg=sowe&amp;wmx=16&amp;wmy=16&amp;wms=0.25&amp;s=scFz6mWh-38N7d-J38zWlTWDlt1eObbLynJSgQHUCko"
                  />
                </div>
                <div
                  class="absolute w-full -bottom-6 flex items-center justify-center mb-10"
                >
                  <button
                    class="inline-block mx-1 rounded-full flex-shrink-0 bg-white h-2 w-2"
                    aria-label="dot"
                  ></button><button
                    class="inline-block mx-1 rounded-full flex-shrink-0 bg-white opacity-50 h-1 w-1"
                    aria-label="dot"
                  ></button><button
                    class="inline-block mx-1 rounded-full flex-shrink-0 bg-white opacity-50 h-1 w-1"
                    aria-label="dot"
                  ></button><button
                    class="inline-block mx-1 rounded-full flex-shrink-0 bg-white opacity-50 h-1 w-1"
                    aria-label="dot"
                  ></button><button
                    class="inline-block mx-1 rounded-full flex-shrink-0 bg-white opacity-50 h-1 w-1"
                    aria-label="dot"
                  ></button><button
                    class="inline-block mx-1 rounded-full flex-shrink-0 bg-white opacity-50 h-1 w-1"
                    aria-label="dot"
                  ></button><button
                    class="inline-block mx-1 rounded-full flex-shrink-0 bg-white opacity-50 h-1 w-1"
                    aria-label="dot"
                  ></button><button
                    class="inline-block mx-1 rounded-full flex-shrink-0 bg-white opacity-50 h-1 w-1"
                    aria-label="dot"
                  ></button><button
                    class="inline-block mx-1 rounded-full flex-shrink-0 bg-white opacity-50 h-1 w-1"
                    aria-label="dot"
                  ></button><button
                    class="inline-block mx-1 rounded-full flex-shrink-0 bg-white opacity-50 h-1 w-1"
                    aria-label="dot"
                  ></button>
                </div>
                <div
                  class="!absolute sm:top-2 sm:right-2 top-1 right-1 z-[2] w-6 h-6"
                >
                  <div>
                    <div
                      class="cursor-pointer rounded-full w-6 h-6 flex items-center justify-center transition-all duration-300 bg-secondary-100 text-secondary-600"
                    >
                      <i
                        class="ml-heart-b transition-all duration-500 text-base !leading-none text-secondary-600"
                      ></i>
                    </div>
                  </div>
                </div>
                <div
                  class="absolute flex items-center space-x-2 top-1 left-1"
                ></div>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-y-1 pl-0 w-full">
              <div class="flex items-center justify-between gap-x-2 w-full">
                <h3
                  class="text-fs-14 font-medium tracking-007 break-word line-clamp-2 line-clamp-1"
                >
                  Bán căn góc chung cư khu đô thị Goldmark City 136 Hồ Tùng Mậu
                  104m2, 3 ngủ, 2 vệ sinh, 2 ban công, full nội thất
                </h3>
                <div
                  class="flex items-center justify-end flex-shrink-0 gap-x-2 flex-row"
                >
                  <div
                    class="bg-primary-800 rounded-full meey-caption-12m text-white flex items-center justify-center w-8 h-8 md:w-9 md:h-9"
                  >
                    7.1
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-x-1 flex-shrink-0">
                <i class="ml-clock-b text-secondary-400 text-base leading-4"
                ></i><span class="meey-body-14r text-secondary-600"
                  >2 tiếng trước</span
                >
              </div>
              <div
                class="meey-body-14r text-secondary-600 flex items-center space-x-1 flex-shrink-0"
              >
                <i class="ml-location-b text-secondary-400 text-base leading-4"
                ></i>
                <div class="meey-body-14r line-clamp-1">
                  Q. Bắc Từ Liêm, Tp. Hà Nội
                </div>
              </div>
              <div class="flex gap-x-6">
                <div class="flex flex-row items-end space-x-1">
                  <div
                    class="full-tablet:text-base text-fs-20 font-medium text-error-600"
                  >
                    7,2 tỷ
                  </div>
                  <div
                    class="meey-caption-12r text-secondary-600 full-tablet:mb-0.5 mb-1"
                  >
                    69,23 tr/m²
                  </div>
                </div>
                <div class="flex items-center space-x-2">
                  <div class="flex items-end">
                    <i
                      class="text-base mr-1 text-secondary-400 ml-format-square-b"
                    ></i><span
                      class="line-clamp-1 meey-body-14r text-secondary-600"
                      title="104 m²">104 m²</span
                    >
                  </div>
                  <div class="flex items-end">
                    <i class="text-base mr-1 text-secondary-400 ml-bed-single-b"
                    ></i><span
                      class="line-clamp-1 meey-body-14r text-secondary-600"
                      title="3">3</span
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
          </div></a
        ><a
          class="text-fs-14 rounded-lg font-medium tracking-007 hover:shadow-top-filter mt-6"
          title="Bán căn hộ chung cư Ngoại Giao Đoàn – 3 phòng ngủ"
          href="/ban-can-ho-chung-cu-bac-tu-liem-ha-noi-i1432/301895743"
          ><div class="flex items-start space-x-3 h-full">
            <div class="w-[200px] flex-shrink-0 rounded-lg h-full">
              <div class="relative h-full h-full rounded-sm">
                <div class="lazyload-wrapper">
                  <img
                    class="object-cover w-full h-full rounded-sm"
                    alt="Bán căn hộ chung cư Ngoại Giao Đoàn – 3 phòng ngủ"
                    width="200"
                    height="133"
                    fetchpriority="low"
                    src="https://image.meeyland.com/meeyland/images/2024/10/11/chungcuhnp2803100319-1728635549006-196116.jpg?rt=fill&amp;w=200&amp;h=133&amp;q=100&amp;dpr=1&amp;g=ce&amp;wmo=0.8&amp;wmg=sowe&amp;wmx=16&amp;wmy=16&amp;wms=0.25&amp;s=OzawLPrFcQDINgCOEb5pbE5GILFzlmm0P-ljxQny5oo"
                  />
                </div>
                <div
                  class="absolute w-full -bottom-6 flex items-center justify-center mb-10"
                >
                  <button
                    class="inline-block mx-1 rounded-full flex-shrink-0 bg-white h-2 w-2"
                    aria-label="dot"
                  ></button>
                </div>
                <div
                  class="!absolute sm:top-2 sm:right-2 top-1 right-1 z-[2] w-6 h-6"
                >
                  <div>
                    <div
                      class="cursor-pointer rounded-full w-6 h-6 flex items-center justify-center transition-all duration-300 bg-secondary-100 text-secondary-600"
                    >
                      <i
                        class="ml-heart-b transition-all duration-500 text-base !leading-none text-secondary-600"
                      ></i>
                    </div>
                  </div>
                </div>
                <div
                  class="absolute flex items-center space-x-2 top-1 left-1"
                ></div>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-y-1 pl-0 w-full">
              <div class="flex items-center justify-between gap-x-2 w-full">
                <h3
                  class="text-fs-14 font-medium tracking-007 break-word line-clamp-2 line-clamp-1"
                >
                  Bán căn hộ chung cư Ngoại Giao Đoàn – 3 phòng ngủ
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
              <div class="flex items-center gap-x-1 flex-shrink-0">
                <i class="ml-clock-b text-secondary-400 text-base leading-4"
                ></i><span class="meey-body-14r text-secondary-600"
                  >2 ngày trước</span
                >
              </div>
              <div
                class="meey-body-14r text-secondary-600 flex items-center space-x-1 flex-shrink-0"
              >
                <i class="ml-location-b text-secondary-400 text-base leading-4"
                ></i>
                <div class="meey-body-14r line-clamp-1">
                  Q. Bắc Từ Liêm, Tp. Hà Nội
                </div>
              </div>
              <div class="flex gap-x-6">
                <div class="flex flex-row items-end space-x-1">
                  <div
                    class="full-tablet:text-base text-fs-20 font-medium text-error-600"
                  >
                    7 tỷ
                  </div>
                  <div
                    class="meey-caption-12r text-secondary-600 full-tablet:mb-0.5 mb-1"
                  >
                    68,63 tr/m²
                  </div>
                </div>
                <div class="flex items-center space-x-2">
                  <div class="flex items-end">
                    <i
                      class="text-base mr-1 text-secondary-400 ml-format-square-b"
                    ></i><span
                      class="line-clamp-1 meey-body-14r text-secondary-600"
                      title="102 m²">102 m²</span
                    >
                  </div>
                  <div class="flex items-end">
                    <i class="text-base mr-1 text-secondary-400 ml-bed-single-b"
                    ></i><span
                      class="line-clamp-1 meey-body-14r text-secondary-600"
                      title="3">3</span
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
          </div></a
        ><a
          class="text-fs-14 rounded-lg font-medium tracking-007 hover:shadow-top-filter mt-6"
          title="Bán căn hộ chung cư An Bình City quận Bắc Từ Liêm, 114m2, giá tốt nhất khu"
          href="/ban-can-ho-chung-cu-bac-tu-liem-ha-noi-i1432/301895520"
          ><div class="flex items-start space-x-3 h-full">
            <div class="w-[200px] flex-shrink-0 rounded-lg h-full">
              <div class="relative h-full h-full rounded-sm">
                <div class="lazyload-wrapper">
                  <img
                    class="object-cover w-full h-full rounded-sm"
                    alt="Bán căn hộ chung cư An Bình City quận Bắc Từ Liêm, 114m2, giá tốt nhất khu"
                    width="200"
                    height="133"
                    fetchpriority="low"
                    src="https://image.meeyland.com/meeyland/images/2024/10/11/1-1728631700664-880820.jpg?rt=fill&amp;w=200&amp;h=133&amp;q=100&amp;dpr=1&amp;g=ce&amp;wmo=0.8&amp;wmg=sowe&amp;wmx=16&amp;wmy=16&amp;wms=0.25&amp;s=ZMTt_W6hKT2G7vXRDlUalw3eE7IGGoPZdPnwR7vKMUw"
                  />
                </div>
                <div
                  class="absolute w-full -bottom-6 flex items-center justify-center mb-10"
                >
                  <button
                    class="inline-block mx-1 rounded-full flex-shrink-0 bg-white h-2 w-2"
                    aria-label="dot"
                  ></button>
                </div>
                <div
                  class="!absolute sm:top-2 sm:right-2 top-1 right-1 z-[2] w-6 h-6"
                >
                  <div>
                    <div
                      class="cursor-pointer rounded-full w-6 h-6 flex items-center justify-center transition-all duration-300 bg-secondary-100 text-secondary-600"
                    >
                      <i
                        class="ml-heart-b transition-all duration-500 text-base !leading-none text-secondary-600"
                      ></i>
                    </div>
                  </div>
                </div>
                <div
                  class="absolute flex items-center space-x-2 top-1 left-1"
                ></div>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-y-1 pl-0 w-full">
              <div class="flex items-center justify-between gap-x-2 w-full">
                <h3
                  class="text-fs-14 font-medium tracking-007 break-word line-clamp-2 line-clamp-1"
                >
                  Bán căn hộ chung cư An Bình City quận Bắc Từ Liêm, 114m2, giá
                  tốt nhất khu
                </h3>
                <div
                  class="flex items-center justify-end flex-shrink-0 gap-x-2 flex-row"
                >
                  <div
                    class="bg-primary-800 rounded-full meey-caption-12m text-white flex items-center justify-center w-8 h-8 md:w-9 md:h-9"
                  >
                    5.6
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-x-1 flex-shrink-0">
                <i class="ml-clock-b text-secondary-400 text-base leading-4"
                ></i><span class="meey-body-14r text-secondary-600"
                  >2 ngày trước</span
                >
              </div>
              <div
                class="meey-body-14r text-secondary-600 flex items-center space-x-1 flex-shrink-0"
              >
                <i class="ml-location-b text-secondary-400 text-base leading-4"
                ></i>
                <div class="meey-body-14r line-clamp-1">
                  Q. Bắc Từ Liêm, Tp. Hà Nội
                </div>
              </div>
              <div class="flex gap-x-6">
                <div class="flex flex-row items-end space-x-1">
                  <div
                    class="full-tablet:text-base text-fs-20 font-medium text-error-600"
                  >
                    8 tỷ
                  </div>
                  <div
                    class="meey-caption-12r text-secondary-600 full-tablet:mb-0.5 mb-1"
                  >
                    70,18 tr/m²
                  </div>
                </div>
                <div class="flex items-center space-x-2">
                  <div class="flex items-end">
                    <i
                      class="text-base mr-1 text-secondary-400 ml-format-square-b"
                    ></i><span
                      class="line-clamp-1 meey-body-14r text-secondary-600"
                      title="114 m²">114 m²</span
                    >
                  </div>
                  <div class="flex items-end">
                    <i class="text-base mr-1 text-secondary-400 ml-bed-single-b"
                    ></i><span
                      class="line-clamp-1 meey-body-14r text-secondary-600"
                      title="3">3</span
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
          </div></a
        >
      </div>
    </div>

    <!-- Right content -->
    <div class="col-span-5 miniTablet:hidden flex flex-col space-y-6">
      <div class="rounded-lg bg-[#fff] p-6 flex flex-col">
        <div
          class="flex miniTablet:flex-row flex-col gap-4 w-full miniTablet:items-baseline"
        >
          <div class="col-span-6 flex space-x-4 flex-wrap items-end shrink-0">
            <h2
              class="text-fs-36 leading-none font-medium w-fit text-error-600"
            >
              6,75 tỷ
            </h2>
          </div>
          <div class="w-full flex items-center gap-4 flex-wrap">
            <div class="flex items-center gap-2">
              <i class="ml ml-bed-single-b text-fs-24 text-grey-400"></i><span
                class="text-fs-14 font-medium">3 PN, 2 WC</span
              >
            </div>
            <div class="flex items-center gap-2">
              <i class="ml ml-format-square-b text-grey-400 text-fs-24"
              ></i><span class="text-fs-14 font-medium">95 m²</span>
            </div>
            <div class="flex items-center gap-2">
              <i class="ml ml-dollar-circle-b text-grey-400 text-fs-24"
              ></i><span class="text-fs-14 font-medium">71,05 triệu/m²</span>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <div
            class="text-fs-14 text-grey-700 font-medium miniTablet:mb-2 mb-3"
          >
            Thông tin của bất động sản
          </div>
          <div
            class="bg-grey-100 rounded-sm px-1 py-0.5 flex items-center gap-1 mb-3 w-fit"
          >
            <i class="ml ml-description-b text-fs-20 text-grey-600"></i><span
              class="text-grey-600 text-fs-14 line-clamp-1"
              >Giấy CN QSDĐ - Sổ đỏ - Sổ hồng</span
            >
          </div>
          <div class="grid grid-cols-12 gap-4 items-center mb-2">
            <div
              class="text-fs-14 text-grey-500 font-normal miniTablet:col-span-2 col-span-3"
            >
              Loại BĐS
            </div>
            <div
              class="text-fs-14 font-medium miniTablet:col-span-10 col-span-9 text-grey-900"
            >
              Căn hộ chung cư
            </div>
          </div>
          <div class="grid grid-cols-12 gap-4 items-center mb-2">
            <div
              class="text-fs-14 text-grey-500 font-normal miniTablet:col-span-2 col-span-3"
            >
              Đường rộng
            </div>
            <div
              class="text-fs-14 font-medium miniTablet:col-span-10 col-span-9 text-grey-900"
            >
              Mặt phố - Mặt đường
            </div>
          </div>
          <div class="grid grid-cols-12 gap-4">
            <div
              class="text-fs-14 text-grey-500 font-normal miniTablet:col-span-2 col-span-3"
            >
              Địa chỉ
            </div>
            <div
              class="flex items-center gap-1 miniTablet:col-span-10 col-span-9 cursor-pointer"
            >
              <div class="text-fs-14 font-medium text-primary-600 line-clamp-1">
                Chung cư CT3 Nghĩa Đô, Đ. Hoàng Quốc Việt, P. Cổ Nhuế 1, Q. Bắc
                Từ Liêm, Tp. Hà Nội
              </div>
              <i
                class="ml ml-location-b text-fs-20 text-primary-500 h-5 flex items-center"
              ></i>
            </div>
          </div>
        </div>
      </div>
      <div class="rounded-lg bg-[#fff] px-6 py-4 flex items-center">
        <div class="flex items-center flex-1 min-w-0 mr-4">
          <div class="flex items-center rounded-full object-cover mr-3">
            <div class="relative">
              <div class="lazyload-wrapper w-full h-full overflow-hidden">
                <img
                  alt="Kiên Trung"
                  class="flex-[0_0_auto] rounded-full w-9 h-9 object-cover"
                  width="57"
                  height="57"
                  fetchpriority="high"
                  src="https://lh3.googleusercontent.com/a/ACg8ocLiT2eOsELyZ4V7864sOjbKluaqVcn8KPvSFajKLBiQ=s96-c"
                />
              </div>
            </div>
          </div>
          <div class="flex-1 min-w-0">
            <p class="meey-sub-16m text-black-800 mb-1 line-clamp-1">
              Kiên Trung
            </p>
            <p class="text-fs-12 text-[#3538CD]">Chính chủ</p>
          </div>
        </div>
        <div class="flex flex-shrink-0 gap-2">
          <button
            class="meey-button meey-button-small meey-button-solid w-fit h-8 !px-3 flex items-center justify-center"
            type="button"
          >
            <span class="text-fs-16 leading-6 text-white"
              ><div class="flex items-center gap-1">
                094 636...<i class="ml ml-eye text-white text-fs-20"></i>
              </div></span
            >
          </button>
        </div>
      </div>
      <div class="rounded-lg bg-[#fff] p-6 text-secondary-900 flex flex-col">
        <div class="flex justify-between items-center mb-4">
          <h2 class="meey-heading-5m">Bất động sản cùng dự án</h2>
        </div>
        <a
          class="text-fs-14 rounded-lg font-medium tracking-007 hover:shadow-top-filter"
          title="Bán căn hộ chung cư đường Hoàng Quốc Việt – 95m2 - 3 phòng ngủ - giáp Starlake"
          href="/ban-can-ho-chung-cu-bac-tu-liem-ha-noi-i1432/301884142"
          ><div class="flex items-start space-x-3 h-full">
            <div class="w-[200px] flex-shrink-0 rounded-lg h-full">
              <div class="relative h-full rounded-sm">
                <div class="keen-slider hidden-scrollbar w-full h-full">
                  <div
                    class="keen-slider__slide w-full relative h-full"
                    style="
                        min-width: 200px;
                        max-width: 200px;
                        transform: translate3d(0px, 0px, 0px);
                      "
                  >
                    <div class="lazyload-wrapper">
                      <img
                        class="object-cover w-full h-full rounded-sm"
                        alt="Bán căn hộ chung cư đường Hoàng Quốc Việt – 95m2 - 3 phòng ngủ - giáp Starlake"
                        width="200"
                        height="133"
                        fetchpriority="high"
                        src="https://image.meeyland.com/meeyland/images/2024/10/10/7436gksyga5ugpydpy2yvonq-1728543547770-972479.jpg?rt=fill&w=200&h=133&q=100&dpr=1&g=ce&wmo=0.8&wmg=sowe&wmx=16&wmy=16&wms=0.25&s=kvbvQr24VxWrOauA9vr3Pz0QmzXtausaBVQbkGCYhe0"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="!absolute sm:top-2 sm:right-2 top-1 right-1 z-[2] w-6 h-6"
                >
                  <div>
                    <div
                      class="cursor-pointer rounded-full w-6 h-6 flex items-center justify-center transition-all duration-300 bg-secondary-100 text-secondary-600"
                    >
                      <i
                        class="ml-heart-b transition-all duration-500 text-base !leading-none text-secondary-600"
                      ></i>
                    </div>
                  </div>
                </div>
                <div
                  class="absolute flex items-center space-x-2 top-1 left-1"
                ></div>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-y-1 pl-0 w-full">
              <h3
                class="text-fs-14 font-medium tracking-007 break-word line-clamp-2"
              >
                Bán căn hộ chung cư đường Hoàng Quốc Việt – 95m2 - 3 phòng ngủ -
                giáp Starlake
              </h3>
              <div
                class="meey-body-14r text-secondary-600 flex items-center space-x-1 flex-shrink-0"
              >
                <i class="ml-location-b text-secondary-400 text-base leading-4"
                ></i>
                <div class="meey-body-14r line-clamp-1">
                  Q. Bắc Từ Liêm, Tp. Hà Nội
                </div>
              </div>
              <div class="flex flex-col gap-y-1">
                <div class="flex flex-row items-end space-x-1">
                  <div
                    class="full-tablet:text-base text-fs-20 font-medium text-error-600"
                  >
                    6,8 tỷ
                  </div>
                  <div
                    class="meey-caption-12r text-secondary-600 full-tablet:mb-0.5 mb-1"
                  >
                    71,58 tr/m²
                  </div>
                </div>
                <div class="flex items-center space-x-2">
                  <div class="flex items-end">
                    <i
                      class="text-base mr-1 text-secondary-400 ml-format-square-b"
                    ></i><span
                      class="line-clamp-1 meey-body-14r text-secondary-600"
                      title="95 m²">95 m²</span
                    >
                  </div>
                  <div class="flex items-end">
                    <i class="text-base mr-1 text-secondary-400 ml-bed-single-b"
                    ></i><span
                      class="line-clamp-1 meey-body-14r text-secondary-600"
                      title="3">3</span
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
          </div></a
        ><a
          class="text-fs-14 rounded-lg font-medium tracking-007 hover:shadow-top-filter mt-6"
          title="Bán căn hộ chung cư Nghĩa Đô – 3 phòng ngủ – có sổ đỏ - tầng 15 – giá hợp lý"
          href="/ban-can-ho-chung-cu-bac-tu-liem-ha-noi-i1432/301868325"
          ><div class="flex items-start space-x-3 h-full">
            <div class="w-[200px] flex-shrink-0 rounded-lg h-full">
              <div class="relative h-full rounded-sm">
                <div class="lazyload-wrapper">
                  <img
                    class="object-cover w-full h-full rounded-sm"
                    alt="Bán căn hộ chung cư Nghĩa Đô – 3 phòng ngủ – có sổ đỏ - tầng 15 – giá hợp lý"
                    width="200"
                    height="133"
                    fetchpriority="high"
                    src="https://image.meeyland.com/meeyland/images/2024/10/09/so-do-1728446024412-096571.jpg?rt=fill&w=200&h=133&q=100&dpr=1&g=ce&wmo=0.8&wmg=sowe&wmx=16&wmy=16&wms=0.25&s=wyFh98N5_C3fupGHkhr3qaAZ5ktDi8qyv2JcSVS-r9U"
                  />
                </div>
                <div
                  class="absolute w-full -bottom-6 flex items-center justify-center mb-10"
                >
                  <button
                    class="inline-block mx-1 rounded-full flex-shrink-0 bg-[#fff] h-2 w-2"
                    aria-label="dot"
                  ></button>
                </div>
                <div
                  class="!absolute sm:top-2 sm:right-2 top-1 right-1 z-[2] w-6 h-6"
                >
                  <div>
                    <div
                      class="cursor-pointer rounded-full w-6 h-6 flex items-center justify-center transition-all duration-300 bg-secondary-100 text-secondary-600"
                    >
                      <i
                        class="ml-heart-b transition-all duration-500 text-base !leading-none text-secondary-600"
                      ></i>
                    </div>
                  </div>
                </div>
                <div
                  class="absolute flex items-center space-x-2 top-1 left-1"
                ></div>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-y-1 pl-0 w-full">
              <h3
                class="text-fs-14 font-medium tracking-007 break-word line-clamp-2"
              >
                Bán căn hộ chung cư Nghĩa Đô – 3 phòng ngủ – có sổ đỏ - tầng 15
                – giá hợp lý
              </h3>
              <div
                class="meey-body-14r text-secondary-600 flex items-center space-x-1 flex-shrink-0"
              >
                <i class="ml-location-b text-secondary-400 text-base leading-4"
                ></i>
                <div class="meey-body-14r line-clamp-1">
                  Q. Bắc Từ Liêm, Tp. Hà Nội
                </div>
              </div>
              <div class="flex flex-col gap-y-1">
                <div class="flex flex-row items-end space-x-1">
                  <div
                    class="full-tablet:text-base text-fs-20 font-medium text-error-600"
                  >
                    6,8 tỷ
                  </div>
                  <div
                    class="meey-caption-12r text-secondary-600 full-tablet:mb-0.5 mb-1"
                  >
                    71,58 tr/m²
                  </div>
                </div>
                <div class="flex items-center space-x-2">
                  <div class="flex items-end">
                    <i
                      class="text-base mr-1 text-secondary-400 ml-format-square-b"
                    ></i><span
                      class="line-clamp-1 meey-body-14r text-secondary-600"
                      title="95 m²">95 m²</span
                    >
                  </div>
                  <div class="flex items-end">
                    <i class="text-base mr-1 text-secondary-400 ml-bed-single-b"
                    ></i><span
                      class="line-clamp-1 meey-body-14r text-secondary-600"
                      title="3">3</span
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
          </div></a
        ><a
          class="text-fs-14 rounded-lg font-medium tracking-007 hover:shadow-top-filter mt-6"
          title="Bán nhanh căn hộ chung cư Nghĩa Đô giáp Starlake, 95m2, 3 phòng ngủ, tòa CT2, có sẵn sổ đỏ"
          href="/ban-can-ho-chung-cu-bac-tu-liem-ha-noi-i1432/301845874"
          ><div class="flex items-start space-x-3 h-full">
            <div class="w-[200px] flex-shrink-0 rounded-lg h-full">
              <div class="relative h-full rounded-sm">
                <div class="lazyload-wrapper">
                  <img
                    class="object-cover w-full h-full rounded-sm"
                    alt="Bán nhanh căn hộ chung cư Nghĩa Đô giáp Starlake, 95m2, 3 phòng ngủ, tòa CT2, có sẵn sổ đỏ"
                    width="200"
                    height="133"
                    fetchpriority="high"
                    src="https://image.meeyland.com/meeyland/images/2024/10/07/4-1728293159854-339514.jpg?rt=fill&w=200&h=133&q=100&dpr=1&g=ce&wmo=0.8&wmg=sowe&wmx=16&wmy=16&wms=0.25&s=PAgyP2kIFwZuu_wmIvztRAnWpwzMQcEqIokdWn-a9lA"
                  />
                </div>
                <div
                  class="absolute w-full -bottom-6 flex items-center justify-center mb-10"
                >
                  <button
                    class="inline-block mx-1 rounded-full flex-shrink-0 bg-[#fff] h-2 w-2"
                    aria-label="dot"
                  ></button>
                </div>
                <div
                  class="!absolute sm:top-2 sm:right-2 top-1 right-1 z-[2] w-6 h-6"
                >
                  <div>
                    <div
                      class="cursor-pointer rounded-full w-6 h-6 flex items-center justify-center transition-all duration-300 bg-secondary-100 text-secondary-600"
                    >
                      <i
                        class="ml-heart-b transition-all duration-500 text-base !leading-none text-secondary-600"
                      ></i>
                    </div>
                  </div>
                </div>
                <div
                  class="absolute flex items-center space-x-2 top-1 left-1"
                ></div>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-y-1 pl-0 w-full">
              <h3
                class="text-fs-14 font-medium tracking-007 break-word line-clamp-2"
              >
                Bán nhanh căn hộ chung cư Nghĩa Đô giáp Starlake, 95m2, 3 phòng
                ngủ, tòa CT2, có sẵn sổ đỏ
              </h3>
              <div
                class="meey-body-14r text-secondary-600 flex items-center space-x-1 flex-shrink-0"
              >
                <i class="ml-location-b text-secondary-400 text-base leading-4"
                ></i>
                <div class="meey-body-14r line-clamp-1">
                  Q. Bắc Từ Liêm, Tp. Hà Nội
                </div>
              </div>
              <div class="flex flex-col gap-y-1">
                <div class="flex flex-row items-end space-x-1">
                  <div
                    class="full-tablet:text-base text-fs-20 font-medium text-error-600"
                  >
                    6 tỷ
                  </div>
                  <div
                    class="meey-caption-12r text-secondary-600 full-tablet:mb-0.5 mb-1"
                  >
                    63,16 tr/m²
                  </div>
                </div>
                <div class="flex items-center space-x-2">
                  <div class="flex items-end">
                    <i
                      class="text-base mr-1 text-secondary-400 ml-format-square-b"
                    ></i><span
                      class="line-clamp-1 meey-body-14r text-secondary-600"
                      title="95 m²">95 m²</span
                    >
                  </div>
                  <div class="flex items-end">
                    <i class="text-base mr-1 text-secondary-400 ml-bed-single-b"
                    ></i><span
                      class="line-clamp-1 meey-body-14r text-secondary-600"
                      title="3">3</span
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
          </div></a
        ><a
          class="text-fs-14 rounded-lg font-medium tracking-007 hover:shadow-top-filter mt-6"
          title="Cực đẹp căn 65m2 view trực diện Hồ Tây nhượng lại cho chủ mới tại CT3 Nghĩa Đô nhà ở ngay
"
          href="/ban-can-ho-chung-cu-bac-tu-liem-ha-noi-i1432/301917614"
          ><div class="flex items-start space-x-3 h-full">
            <div class="w-[200px] flex-shrink-0 rounded-lg h-full">
              <div class="relative h-full rounded-sm">
                <div class="lazyload-wrapper">
                  <img
                    class="object-cover w-full h-full rounded-sm"
                    alt="Cực đẹp căn 65m2 view trực diện Hồ Tây nhượng lại cho chủ mới tại CT3 Nghĩa Đô nhà ở ngay
"
                    fetchpriority="high"
                    width="200"
                    height="133"
                    src="https://image.meeyland.com/meeyland-ai/images/2024/10/1320241013094058-b542_wm.jpg?rt=fill&w=200&h=133&q=100&dpr=1&g=ce&wmo=0.8&wmg=sowe&wmx=16&wmy=16&wms=0.25&s=yH1T_lfV9re7i-hr55EfjC4Pc3CIPhMvc8xRTCFJ10w"
                  />
                </div>
                <div
                  class="absolute w-full -bottom-6 flex items-center justify-center mb-10"
                >
                  <button
                    class="inline-block mx-1 rounded-full flex-shrink-0 bg-[#fff] h-2 w-2"
                    aria-label="dot"
                  ></button><button
                    class="inline-block mx-1 rounded-full flex-shrink-0 bg-[#fff] opacity-50 h-1 w-1"
                    aria-label="dot"
                  ></button><button
                    class="inline-block mx-1 rounded-full flex-shrink-0 bg-[#fff] opacity-50 h-1 w-1"
                    aria-label="dot"
                  ></button><button
                    class="inline-block mx-1 rounded-full flex-shrink-0 bg-[#fff] opacity-50 h-1 w-1"
                    aria-label="dot"
                  ></button><button
                    class="inline-block mx-1 rounded-full flex-shrink-0 bg-[#fff] opacity-50 h-1 w-1"
                    aria-label="dot"
                  ></button><button
                    class="inline-block mx-1 rounded-full flex-shrink-0 bg-[#fff] opacity-50 h-1 w-1"
                    aria-label="dot"
                  ></button>
                </div>
                <div
                  class="!absolute sm:top-2 sm:right-2 top-1 right-1 z-[2] w-6 h-6"
                >
                  <div>
                    <div
                      class="cursor-pointer rounded-full w-6 h-6 flex items-center justify-center transition-all duration-300 bg-secondary-100 text-secondary-600"
                    >
                      <i
                        class="ml-heart-b transition-all duration-500 text-base !leading-none text-secondary-600"
                      ></i>
                    </div>
                  </div>
                </div>
                <div
                  class="absolute flex items-center space-x-2 top-1 left-1"
                ></div>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-y-1 pl-0 w-full">
              <h3
                class="text-fs-14 font-medium tracking-007 break-word line-clamp-2"
              >
                Cực đẹp căn 65m2 view trực diện Hồ Tây nhượng lại cho chủ mới
                tại CT3 Nghĩa Đô nhà ở ngay
              </h3>
              <div
                class="meey-body-14r text-secondary-600 flex items-center space-x-1 flex-shrink-0"
              >
                <i class="ml-location-b text-secondary-400 text-base leading-4"
                ></i>
                <div class="meey-body-14r line-clamp-1">
                  Q. Bắc Từ Liêm, Tp. Hà Nội
                </div>
              </div>
              <div class="flex flex-col gap-y-1">
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
                    <i
                      class="text-base mr-1 text-secondary-400 ml-format-square-b"
                    ></i><span
                      class="line-clamp-1 meey-body-14r text-secondary-600"
                      title="65 m²">65 m²</span
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
          </div></a
        ><a
          class="text-fs-14 rounded-lg font-medium tracking-007 hover:shadow-top-filter mt-6"
          title="Hiếm! Bán căn góc hoa hậu 68,52m2 CT3 Nghĩa Đô - nhận nhà ngay - giá chỉ 6x triệu/m2
"
          href="/ban-can-ho-chung-cu-bac-tu-liem-ha-noi-i1432/301761188"
          ><div class="flex items-start space-x-3 h-full">
            <div class="w-[200px] flex-shrink-0 rounded-lg h-full">
              <div class="relative h-full rounded-sm">
                <div class="lazyload-wrapper">
                  <img
                    class="object-cover w-full h-full rounded-sm"
                    alt="Hiếm! Bán căn góc hoa hậu 68,52m2 CT3 Nghĩa Đô - nhận nhà ngay - giá chỉ 6x triệu/m2"
                    fetchpriority="high"
                    width="200"
                    height="133"
                    src="https://image.meeyland.com/meeyland-ai/images/2024/10/0120241001091406-c7d0_wm.jpg?rt=fill&w=200&h=133&q=100&dpr=1&g=ce&wmo=0.8&wmg=sowe&wmx=16&wmy=16&wms=0.25&s=3QWQr0wz4JvNP0Ime-vnWIYq9OkQUSbhhyV6jX8xxG8"
                  />
                </div>
                <div
                  class="absolute w-full -bottom-6 flex items-center justify-center mb-10"
                >
                  <button
                    class="inline-block mx-1 rounded-full flex-shrink-0 bg-[#fff] h-2 w-2"
                    aria-label="dot"
                  ></button><button
                    class="inline-block mx-1 rounded-full flex-shrink-0 bg-[#fff] opacity-50 h-1 w-1"
                    aria-label="dot"
                  ></button><button
                    class="inline-block mx-1 rounded-full flex-shrink-0 bg-[#fff] opacity-50 h-1 w-1"
                    aria-label="dot"
                  ></button><button
                    class="inline-block mx-1 rounded-full flex-shrink-0 bg-[#fff] opacity-50 h-1 w-1"
                    aria-label="dot"
                  ></button>
                </div>
                <div
                  class="!absolute sm:top-2 sm:right-2 top-1 right-1 z-[2] w-6 h-6"
                >
                  <div>
                    <div
                      class="cursor-pointer rounded-full w-6 h-6 flex items-center justify-center transition-all duration-300 bg-secondary-100 text-secondary-600"
                    >
                      <i
                        class="ml-heart-b transition-all duration-500 text-base !leading-none text-secondary-600"
                      ></i>
                    </div>
                  </div>
                </div>
                <div
                  class="absolute flex items-center space-x-2 top-1 left-1"
                ></div>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-y-1 pl-0 w-full">
              <h3
                class="text-fs-14 font-medium tracking-007 break-word line-clamp-2"
              >
                Hiếm! Bán căn góc hoa hậu 68,52m2 CT3 Nghĩa Đô - nhận nhà ngay -
                giá chỉ 6x triệu/m2
              </h3>
              <div
                class="meey-body-14r text-secondary-600 flex items-center space-x-1 flex-shrink-0"
              >
                <i class="ml-location-b text-secondary-400 text-base leading-4"
                ></i>
                <div class="meey-body-14r line-clamp-1">
                  Q. Bắc Từ Liêm, Tp. Hà Nội
                </div>
              </div>
              <div class="flex flex-col gap-y-1">
                <div class="flex flex-row items-end space-x-1">
                  <div
                    class="full-tablet:text-base text-fs-20 font-medium text-error-600"
                  >
                    4,73 tỷ
                  </div>
                  <div
                    class="meey-caption-12r text-secondary-600 full-tablet:mb-0.5 mb-1"
                  >
                    69 tr/m²
                  </div>
                </div>
                <div class="flex items-center space-x-2">
                  <div class="flex items-end">
                    <i
                      class="text-base mr-1 text-secondary-400 ml-format-square-b"
                    ></i><span
                      class="line-clamp-1 meey-body-14r text-secondary-600"
                      title="68.52 m²">68.52 m²</span
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
          </div></a
        ><a
          href="/ban-can-ho-chung-cu-chung-cu-ct3-nghia-do-bac-tu-liem-ha-noi-l14532"
          ><span class="text-primary-600 meey-sub-14m"
            >Xem thêm 1+ bất động sản cùng dự án</span
          ></a
        >
      </div>
    </div>
  </div>
  <!-- Bottom content -->
  <div class="w-full bg-[#fff] mt-6" id="interestRate">
    <div class="layout miniTablet:!py-6 !py-12 flex flex-col space-y-6">
      <h3 class="meey-heading-5m text-secondary-800">Tính lãi suất</h3>
      {#if browser}
        <form class="flex items-start space-x-6">
          <div class="w-7/12 border border-secondary-200 p-6 rounded-lg">
            <div
              class="flex rounded-full bg-[#F2F3F5] text-center meey-body-14r mb-6"
            >
              <button
                class="w-1/2 miniTablet:py-1 py-2 px-3 border border-primary-600 rounded-full bg-white text-primary-600 meey-sub-14m"
                type="button">Dư nợ giảm dần</button
              ><button class="w-1/2 miniTablet:py-1 py-2 px-3" type="button"
                >Trả đều hàng tháng</button
              >
            </div>
            <div class="flex items-center space-x-6 mb-2">
              <span class="w-[10.5rem] meey-sub-14m flex-shrink-0"
                >Số tiền bạn vay (đ)</span
              >
              <div
                class="meey-input flex items-center justify-between space-x-1 flex-grow"
              >
                <input
                  type="text"
                  inputmode="decimal"
                  id="loanValue"
                  class="w-full placeholder:text-black-v6"
                  placeholder="Nhập số tiền bạn vay"
                  value="4.725.000.000"
                /><span class="leading-none cursor-pointer"
                  ><i
                    class="ml-close-circle text-fs-20 leading-5 text-secondary-400"
                  ></i></span
                >
              </div>
            </div>
            <p class="text-right meey-caption-12r text-secondary-500">
              ~ 70% giá trị bất động sản
            </p>
            <div
              class="mt-4 flex miniTablet:flex-col flex-row miniTablet:items-start items-center w-full miniTablet:gap-2 gap-6"
            >
              <span class="w-[10.5rem] meey-sub-14m flex-shrink-0"
                >Thời gian vay (Tháng)</span
              >
              <div class="w-full flex items-center gap-6">
                <label class="range-slider"
                  ><input
                    id="range-slider-val-0.9150355863459201"
                    class="range-slider__range"
                    type="range"
                    min="1"
                    max="240"
                    step="1"
                    value="12"
                    style="background: linear-gradient(90deg, rgb(21, 112, 239) 4.60251%, rgb(242, 244, 247) 4.61251%);"
                  /></label
                >
                <div
                  class="meey-input flex items-center justify-between space-x-1 w-[64px] [&>input]:text-center"
                >
                  <input
                    type="text"
                    inputmode="decimal"
                    class="w-full placeholder:text-black-v6"
                    placeholder=""
                    value="12"
                  />
                </div>
              </div>
            </div>
            <div
              class="mt-4 flex miniTablet:flex-col flex-row miniTablet:items-start items-center w-full miniTablet:gap-2 gap-6"
            >
              <span class="w-[10.5rem] meey-sub-14m flex-shrink-0"
                >Lãi suất (%/ năm)</span
              >
              <div class="w-full flex items-center gap-6">
                <label class="range-slider"
                  ><input
                    id="range-slider-val-0.5089825476259948"
                    class="range-slider__range"
                    type="range"
                    min="0"
                    max="100"
                    step="0.1"
                    value="8"
                    style="background: linear-gradient(90deg, rgb(21, 112, 239) 8%, rgb(242, 244, 247) 8.001%);"
                  /></label
                >
                <div
                  class="meey-input flex items-center justify-between space-x-1 w-[64px] [&>input]:text-center"
                >
                  <input
                    type="text"
                    inputmode="decimal"
                    class="w-full placeholder:text-black-v6"
                    placeholder=""
                    value="8%"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="w-5/12 p-6 bg-primary-50 rounded-lg text-secondary-600">
            <div class="flex mb-6 gap-2">
              <p class="meey-body-14r flex-grow">Gốc cần trả</p>
              <p
                class="miniTablet:w-fit w-[12rem] meey-sub-16m text-right text-secondary-800"
              >
                4 725 000 000đ
              </p>
            </div>
            <div class="flex mb-8 gap-2">
              <p class="meey-body-14r flex-grow">Lãi cần trả</p>
              <p
                class="miniTablet:w-fit w-[12rem] meey-sub-16m text-right text-secondary-800"
              >
                204 750 000đ
              </p>
            </div>
            <div
              class="h-[1px] border border-t border-dashed border-[#D1D1D1]"
            ></div>
            <div class="mt-6 mb-2 flex">
              <p class="meey-body-14r flex-grow">
                Số tiền cả gốc và lãi trả tháng đầu
              </p>
              <p class="w-[12rem] meey-sub-16m text-right text-error-600">
                425 250 000đ
              </p>
            </div>
            <p class="meey-caption-12r mb-14">
              (*) Công cụ tính toán trên website chỉ mang tính chất tham khảo
            </p>
            <div
              class="flex items-center text-primary-600 justify-center w-full cursor-pointer"
            >
              <span class="meey-body-14r">Xem lịch trả nợ hàng tháng</span><i
                class="ml-arrow-right text-fs-20"
              ></i>
            </div>
          </div>
        </form>
      {/if}
      <div class="flex items-start space-x-6">
        <div class="w-7/12 meey-body-14r break-word text-secondary-700">
          * Lưu ý: Bài viết <span>“</span><a
            title="Bán chung cư Nghĩa Đô, ngõ 106 Hoàng Quốc Việt, 3 ngủ, 95m2, tầng 15"
            href="/ban-can-ho-chung-cu-bac-tu-liem-ha-noi-i1432/301894415"
            ><span class="text-fs-14 font-semibold"
              >Bán chung cư Nghĩa Đô, ngõ 106 Hoàng Quốc Việt, 3 ngủ, 95m2, tầng
              15</span
            ></a
          ><span>”</span>- là do người đăng tin đăng tải và chịu trách nhiệm.
          Meeyland.com không đảm bảo và không chịu trách nhiệm về bất kỳ thông
          tin, nội dung nào liên quan tới tin rao này. Trường hợp phát hiện nội
          dung tin đăng không chính xác, Quý vị hãy thông báo và cung cấp thông
          tin cho Ban quản trị Meeyland.com theo số Hotline
          <a
            href="tel:0869092929"
            title="0869092929"
            class="text-fs-14 underline text-primary-600">0869092929</a
          > để được hỗ trợ nhanh chóng và kịp thời nhất.
        </div>
        <div class="w-5/12 flex items-start space-x-6">
          <div class="bg-primary-50 rounded-lg py-2 text-center w-1/2">
            <p class="text-secondary-600 meey-body-16m mb-1.5">Mã tin đăng</p>
            <h4 class="meey-heading-4s font-medium text-secondary-900">
              301894415
            </h4>
          </div>
          <div class="bg-primary-50 rounded-lg py-2 text-center w-1/2">
            <p class="text-secondary-600 meey-body-16m mb-1.5">Lượt xem</p>
            <h4 class="meey-heading-4s font-medium text-secondary-900">4</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
