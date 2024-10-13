<script lang="ts">
  import type { PageData } from './$types'
  import Carousel from '$lib/components/carousel/Carousel.svelte'

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
      <div class="rounded-lg bg-white p-6 text-secondary-800" id="information">
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
    </div>

    <div class="col-span-5">
      <div class="rounded-lg bg-white h-[516px]"></div>
    </div>
  </div>
</div>
