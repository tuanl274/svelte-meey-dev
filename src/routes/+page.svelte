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
        <p class="text-[#667085] text-sm font-normal leading-snug mt-6">
          Trang chủ / Hà Nội / Mua bán đất nền dự án
        </p>
        <h1
          class="self-stretch text-[#101828] text-2xl font-medium leading-loose"
        >
          Bán nhà đủ đồ thoáng đẹp giá tốt ở ngay tại Phố Cự Lộc, Thanh Xuân, Hà
          Nội
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
              9.5
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
              <p>
                Chính thức mở bán quỹ căn hộ hiếm hoi tại hai toà "hoa hậu" của
                phân khu Sapphire - S2.10 và S2.17! Diện tích căn hộ đa dạng từ
                27m đến 75m, phù hợp với mọi nhu cầu từ Studio đến 3 phòng ngủ.
                Đây là cơ hội cuối cùng để bạn sở hữu căn hộ tại Vinhomes Ocean
                Park với mức giá vô cùng hấp dẫn, chỉ từ 55 triệu/m.
              </p>
              <p>Hotline: 0926153456 - Em San Vinhomes (Tư vấn 24/7).</p>
              <p>
                Giá hấp dẫn chỉ từ 55 triệu/m. Pháp lý minh bạch, sổ đỏ trao tay
                ngay sau khi bàn giao.
              </p>
              <p>- Studio 1PN (43m2): Giá chỉ từ 2,5 tỷ.</p>
              <p>- Căn 2PN, 2WC (55m2): Giá chỉ từ 3 tỷ.</p>
              <p>- Căn 3PN (75m2): Giá chỉ từ 3,9 tỷ.</p>
              <p>Ưu đãi đặc biệt:</p>
              <p>- Chính sách vay ngân hàng linh hoạt: Vốn tự có chỉ 30%.</p>
              <p>
                - Tiến độ thanh toán linh động phù hợp với nhu cầu tài chính.
              </p>
              <p>
                - Ưu đãi thanh toán sớm: Giảm giá đặc biệt cho khách hàng thanh
                toán 100%.
              </p>
              <p>Hotline: 0926153456 - Em San Vinhomes (Tư vấn 24/7).</p>
              <p>(Có xe tham quan dự án miễn phí).</p>
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
    </div>

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
</div>
