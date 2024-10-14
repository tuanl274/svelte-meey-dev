<script>
  import '../app.scss'

  import Carousel from '$lib/components/carousel/Carousel.svelte'
  import { fade } from 'svelte/transition'
  import MenuItem from '$lib/components/menu/MenuItem.svelte'
  import { page } from '$app/stores'

  // Accessing the loaded config from server
  $: mainRoutes = $page.data.mainRoutes

  let open = false
</script>

<!-- Menu -->
<nav class="flex justify-start bg-[#156fee] h-16 px-6 items-center">
  <img
    src="/logo.svg"
    alt="logo"
    fetchpriority="high"
    width={180}
    height={36}
  />
  <ul class="flex flex-wrap items-center font-medium text-base ml-6">
    {#each mainRoutes as route}
      <MenuItem item={route} />
    {/each}
  </ul>
</nav>

<slot />

<footer class='w-full bg-background-0 border-t border-t-secondary-300'>
      <div
        class='layout sm:grid grid-cols-12 gap-8 pt-12 pb-8 full-tablet:!pt-8'
      >
        <div class='col-span-5 full-tablet:col-span-7'>
          <img
            class=''
            alt='logo'
            width='192'
            height='43'
            src='/images/logo-blue.svg'
          /><div
            class='mt-4 text-fs-20 leading-7 font-semibold text-secondary-800'
          >
            Công ty Cổ phần Tập đoàn Meey Land
          </div><div class='meey-body-14r mt-3 text-secondary-600'>
            <i class='ml ml-location-b mr-1 text-secondary-600 text-fs-14'
            ></i>Tầng 5 Tòa nhà 97 – 99 Láng Hạ, P. Láng Hạ, Q. Đống Đa, TP. Hà
            Nội
          </div><div class='mt-6 grid grid-cols-2'>
            <ul>
              <li class='mb-5 last:mb-0'>
                <div class='meey-body-14r flex items-start text-secondary-600'>
                  <i class='text-base mr-1 ml ml-sms-b'></i><div>
                    <a
                      href='mailto:contact@meeyland.com'
                      class='meey-body-14r'
                      title='contact@meeyland.com'>contact@meeyland.com</a
                    >
                  </div>
                </div>
              </li><li class='mb-5 last:mb-0'>
                <div class='meey-body-14r flex items-start text-secondary-600'>
                  <i class='text-base mr-1 ml ml-call-calling-b'></i><div>
                    <a
                      href='tel:0869092929'
                      class='meey-body-14r'
                      title='Hotline Meey Land: 0869 092 929'
                      >Hotline Meey Land: 0869 092 929</a
                    >
                  </div>
                </div>
              </li><li class='mb-5 last:mb-0'>
                <div class='meey-body-14r flex items-start text-secondary-600'>
                  <i class='text-base mr-1 ml ml-headset-mic-b'></i><div>
                    <a
                      href='tel:02499992999'
                      class='meey-body-14r'
                      title='CSKH Meey Land: 0249 999 2999'
                      >CSKH Meey Land: 0249 999 2999</a
                    ><p>(Thời gian 7h30-17h30 từ T2-T6)</p>
                  </div>
                </div>
              </li>
            </ul><div class='border-l border-stroke-2 pl-6'>
              <div class='meey-sub-14m text-secondary-900 tracking-007'>
                Bộ phận kinh doanh
              </div><ul class='mt-5'>
                <li class='mb-5 last:mb-0'>
                  <div
                    class='meey-body-14r flex items-start text-secondary-600'
                  >
                    <i class='text-base mr-1 ml ml-sms-b'></i><div>
                      <a
                        href='mailto:sales.redtvn@gmail.com'
                        class='meey-body-14r'
                        title='sales.redtvn@gmail.com'>sales.redtvn@gmail.com</a
                      >
                    </div>
                  </div>
                </li><li class='mb-5 last:mb-0'>
                  <div
                    class='meey-body-14r flex items-start text-secondary-600'
                  >
                    <i class='text-base mr-1 ml ml-call-calling-b'></i><div>
                      <a
                        href='tel:0349208325'
                        class='meey-body-14r'
                        title='0349 208 325'>0349 208 325</a
                      >
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div><div class='col-span-7 full-tablet:col-span-5'>
          <div class='flex space-x-10'>
            <div>
              <div class='mt-8 meey-sub-18m'>Công ty</div><ul>
                <li class='mt-4'>
                  <a
                    class='meey-body-14r text-secondary-600'
                    rel='nofollow'
                    href='https://help.meeyland.com/quy-che-hoat-dong'
                    >Quy chế hoạt động</a
                  >
                </li><li class='mt-4'>
                  <a
                    class='meey-body-14r text-secondary-600'
                    rel='nofollow'
                    href='https://help.meeyland.com/dieu-khoan-giao-dich'
                    >Điều khoản giao dịch</a
                  >
                </li><li class='mt-4'>
                  <a
                    class='meey-body-14r text-secondary-600'
                    rel='nofollow'
                    href='https://help.meeyland.com/dieu-khoan-su-dung'
                    >Điều khoản sử dụng</a
                  >
                </li><li class='mt-4'>
                  <a
                    class='meey-body-14r text-secondary-600'
                    rel='nofollow'
                    href='https://help.meeyland.com/chinh-sach-bao-ve-thong-tin-ca-nhan'
                    >Chính sách bảo vệ dữ liệu cá nhân</a
                  >
                </li><li class='mt-4'>
                  <a
                    class='meey-body-14r text-secondary-600'
                    rel='nofollow'
                    href='https://help.meeyland.com/'>Hỗ trợ</a
                  >
                </li>
              </ul>
            </div><div>
              <div class='mt-8 meey-sub-18m'>Hỗ trợ</div><ul>
                <li class='mt-4'>
                  <a
                    class='meey-body-14r text-secondary-600'
                    href='/page/quy-dinh-dang-tin'>Quy định đăng tin</a
                  >
                </li><li class='mt-4'>
                  <a
                    class='meey-body-14r text-secondary-600'
                    href='/page/lien-he'>Liên hệ</a
                  >
                </li><li class='mt-4'>
                  <a
                    class='meey-body-14r text-secondary-600'
                    rel='nofollow'
                    href='https://help.meeyland.com/'>Trợ giúp</a
                  >
                </li><li class='mt-4'>
                  <a class='meey-body-14r text-secondary-600' href='/sitemaps'
                    >Sitemap</a
                  >
                </li>
              </ul>
            </div><div class='full-tablet:hidden'>
              <div class='flex justify-between space-x-10'>
                <div>
                  <div
                    class='full-tablet:flex full-tablet:flex-col full-tablet:gap-3'
                  >
                    <div class='mt-8 mb-3 full-tablet:my-0 meey-sub-18m'>
                      Liên kết
                    </div><ul>
                      <li class='inline-block mr-3'>
                        <a
                          title='Facebook Page'
                          rel='nofollow'
                          href='https://www.facebook.com/meeyland.global/'
                          ><img
                            alt='Facebook Page'
                            width='24'
                            height='24'
                            src='/images/icons/facebook.svg'
                          /></a
                        >
                      </li><li class='inline-block mr-3'>
                        <a
                          title='Youtube'
                          rel='nofollow'
                          href='https://www.youtube.com/channel/UC4PWQfUTDgxEBwmmLhRWTJw'
                          ><img
                            alt='Youtube'
                            width='24'
                            height='24'
                            src='/images/icons/youtube.svg'
                          /></a
                        >
                      </li>
                    </ul>
                  </div>
                </div><div>
                  <div
                    class='full-tablet:flex full-tablet:flex-col full-tablet:gap-3'
                  >
                    <div class='mt-8 mb-3 full-tablet:my-0 meey-sub-18m'>
                      Tải ứng dụng
                    </div><ul>
                      <li class='inline-block mr-3'>
                        <a
                          title='App Store'
                          rel='nofollow'
                          href='https://apps.apple.com/vn/app/meeyland/id1520155172'
                          ><img
                            alt='App Store'
                            width='72'
                            height='21'
                            src='/images/icons/app-store.svg'
                          /></a
                        >
                      </li><li class='inline-block mr-3'>
                        <a
                          title='Google Play Store'
                          rel='nofollow'
                          href='https://play.google.com/store/apps/details?id=com.meeyland.app'
                          ><img
                            alt='Google Play Store'
                            width='72'
                            height='21'
                            src='/images/icons/google-play.svg'
                          /></a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div><div
                class='full-tablet:flex full-tablet:flex-col full-tablet:gap-3'
              >
                <div
                  class='text-base lg:text-sm font-semibold text-black-v8 mb-2 lg:mb-4 lg:mt-6 full-tablet:my-0'
                >
                  Chứng nhận
                </div><div class='flex lg:mb-6 space-x-4'>
                  <img
                    src='/images/bsi-9001.svg'
                    class='h-[5rem] lg:h-[3.5rem] full-tablet:h-10 w-auto'
                    alt='bsi-certificate'
                    width='107'
                    height='56'
                  /><img
                    src='/images/bsi-27001.svg'
                    class='h-[5rem] lg:h-[3.5rem] full-tablet:h-10 w-auto'
                    alt='bsi-certificate'
                    width='107'
                    height='56'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><div class='hidden layout full-tablet:block !mt-6'>
        <div class='flex items-start space-x-6 mb-8'>
          <div class='full-tablet:flex full-tablet:flex-col full-tablet:gap-3'>
            <div class='mt-8 mb-3 full-tablet:my-0 meey-sub-18m'>
              Liên kết
            </div><ul>
              <li class='inline-block mr-3'>
                <a
                  title='Facebook Page'
                  rel='nofollow'
                  href='https://www.facebook.com/meeyland.global/'
                  ><img
                    alt='Facebook Page'
                    width='24'
                    height='24'
                    src='/images/icons/facebook.svg'
                  /></a
                >
              </li><li class='inline-block mr-3'>
                <a
                  title='Youtube'
                  rel='nofollow'
                  href='https://www.youtube.com/channel/UC4PWQfUTDgxEBwmmLhRWTJw'
                  ><img
                    alt='Youtube'
                    width='24'
                    height='24'
                    src='/images/icons/youtube.svg'
                  /></a
                >
              </li>
            </ul>
          </div><div
            class='full-tablet:flex full-tablet:flex-col full-tablet:gap-3'
          >
            <div class='mt-8 mb-3 full-tablet:my-0 meey-sub-18m'>
              Tải ứng dụng
            </div><ul>
              <li class='inline-block mr-3'>
                <a
                  title='App Store'
                  rel='nofollow'
                  href='https://apps.apple.com/vn/app/meeyland/id1520155172'
                  ><img
                    alt='App Store'
                    width='72'
                    height='21'
                    src='/images/app-store.jpg'
                  /></a
                >
              </li><li class='inline-block mr-3'>
                <a
                  title='Google Play Store'
                  rel='nofollow'
                  href='https://play.google.com/store/apps/details?id=com.meeyland.app'
                  ><img
                    alt='Google Play Store'
                    width='72'
                    height='21'
                    src='/images/google-play.jpg'
                  /></a
                >
              </li>
            </ul>
          </div><div
            class='full-tablet:flex full-tablet:flex-col full-tablet:gap-3'
          >
            <div
              class='text-base lg:text-sm font-semibold text-black-v8 mb-2 lg:mb-4 lg:mt-6 full-tablet:my-0'
            >
              Chứng nhận
            </div><div class='flex lg:mb-6 space-x-4'>
              <img
                src='/images/certificates/bsi1.svg?v=1'
                class='h-[5rem] lg:h-[3.5rem] full-tablet:h-10 w-auto'
                alt='bsi-certificate'
                width='107'
                height='56'
              /><img
                src='/images/certificates/bsi2.svg?v=1'
                class='h-[5rem] lg:h-[3.5rem] full-tablet:h-10 w-auto'
                alt='bsi-certificate'
                width='107'
                height='56'
              />
            </div>
          </div>
        </div>
      </div><hr
        class='h-[1px] bg-secondary-300 rounded-full hidden full-tablet:block border-none'
      /><div class='layout !py-8'>
        <ul class='certificates pb-6'>
          <li>
            <a
              href='//www.dmca.com/Protection/Status.aspx?ID=a925371e-9850-4e81-9c76-6a12bb4720b6'
              title='DMCA.com Protection Status'
              class='dmca-badge'
              ><img
                alt='DMCA.com Protection Status'
                width='135'
                height='28'
                src='https://images.dmca.com/Badges/_dmca_premi_badge_4.png?ID=a925371e-9850-4e81-9c76-6a12bb4720b6'
              /></a
            ><script
              src='https://images.dmca.com/Badges/DMCABadgeHelper.min.js'
              defer={true}
              />
          </li><li>
            <div class='flex items-start gap-x-3'>
              <img
                alt='Cục sở hữu trí tuệ Việt Nam'
                width='36'
                height='36'
                src='/images/certificates/noip.png'
              /><div>
                <div class='meey-sub-14m text-secondary-900'>
                  ĐÃ ĐĂNG KÝ
                </div><div class='meey-body-14r text-secondary-600'>
                  Cục sở hữu trí tuệ Việt Nam
                </div>
              </div>
            </div>
          </li><li>
            <div class='flex items-start gap-x-3'>
              <img
                alt='Sở thông tin và truyền thông Hà Nội'
                width='36'
                height='36'
                src='/images/certificates/sotttt.png'
              /><div>
                <div class='meey-sub-14m text-secondary-900'>
                  ĐÃ ĐĂNG KÝ
                </div><div class='meey-body-14r text-secondary-600'>
                  Sở thông tin và truyền thông Hà Nội
                </div>
              </div>
            </div>
          </li><li>
            <div class='flex items-start gap-x-3'>
              <img
                alt='Hiệp hội Bất động sản Việt Nam'
                width='36'
                height='36'
                src='/images/certificates/vnrea.png'
              /><div>
                <div class='meey-sub-14m text-secondary-900'>
                  LÀ THÀNH VIÊN
                </div><div class='meey-body-14r text-secondary-600'>
                  Hiệp hội Bất động sản Việt Nam
                </div>
              </div>
            </div>
          </li>
        </ul><ul class='certificates'>
          <li>
            <div class='flex items-start gap-x-3'>
              <img
                alt='Hiệp hội phần mềm và Dịch vụ CNTT Việt Nam'
                width='36'
                height='36'
                src='/images/certificates/it.png'
              /><div>
                <div class='meey-sub-14m text-secondary-900'>
                  LÀ THÀNH VIÊN
                </div><div class='meey-body-14r text-secondary-600'>
                  Hiệp hội phần mềm và Dịch vụ CNTT Việt Nam
                </div>
              </div>
            </div>
          </li><li>
            <div class='flex items-start gap-x-3'>
              <img
                alt='Cục bản quyền tác giả'
                width='36'
                height='36'
                src='/images/certificates/cov.png'
              /><div>
                <div class='meey-sub-14m text-secondary-900'>
                  ĐÃ ĐĂNG KÝ
                </div><div class='meey-body-14r text-secondary-600'>
                  Cục bản quyền tác giả
                </div>
              </div>
            </div>
          </li><li>
            <div class='flex items-start gap-x-3'>
              <img
                alt='Hiệp hội Thương mại điện tử VIệt Nam'
                width='36'
                height='36'
                src='/images/certificates/vecom.png'
              /><div>
                <div class='meey-sub-14m text-secondary-900'>
                  LÀ THÀNH VIÊN
                </div><div class='meey-body-14r text-secondary-600'>
                  Hiệp hội Thương mại điện tử VIệt Nam
                </div>
              </div>
            </div>
          </li><li>
            <div class='flex items-start gap-x-3'>
              <img
                alt='Hiệp hội Internet Việt Nam (VIA)'
                width='36'
                height='36'
                src='/images/certificates/via.png'
              /><div>
                <div class='meey-sub-14m text-secondary-900'>
                  LÀ THÀNH VIÊN
                </div><div class='meey-body-14r text-secondary-600'>
                  Hiệp hội Internet Việt Nam (VIA)
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div><div class='py-4 sm:py-12 full-tablet:py-8 bg-footer-light'>
        <div class='layout md:grid grid-cols-4 gap-x-10'>
          <div class='full-tablet:mb-6'>
            <div class='meey-sub-18m'>Giới thiệu về Meey Land</div><p
              class='mt-4 mb-2 meey-body-14r text-justify text-secondary-600 line-clamp-[14]'
            >
              MeeyLand.com là Cổng thông tin bất động sản xác thực 4.0 thuộc "Hệ
              sinh thái Công nghệ - Tài chính Bất động sản" phát triển bởi Meey
              Group, cung cấp cho thị trường các giải pháp đột phá kết hợp hai
              lĩnh vực: Công nghệ bất động sản và Tài chính bất động sản.
              MeeyLand.com và app Meey Land mang trong mình sứ mệnh cung cấp và
              xác thực thông tin chính chủ đa chiều. Là công cụ hỗ trợ cho các
              đối tượng tham gia thị trường giao dịch và phát triển bất động sản
              nhằm tăng tính thanh khoản. Hơn thế nữa, sản phẩm được tích hợp
              các tính năng ưu việt nhất trong toàn bộ hệ sinh thái công nghệ -
              tài chính bất động sản, nhằm mang tới trải nghiệm tối ưu cho người
              dùng với các công nghệ 3D, VR, AI - Big Data, Blockchain.
            </p><div
              class='cursor-pointer text-primary-600 flex items-center space-x-1'
            >
              <span class='meey-caption-12m'>Xem thêm</span><i
                class='text-fs-12 ml-arrow-down'></i>
            </div>
          </div><div class='col-span-3'>
            <div class='meey-sub-18m mb-4 text-secondary-800'>
              Văn phòng đại diện
            </div><div class='grid grid-cols-3 gap-x-10 gap-y-4'>
              <div>
                <div class='meey-sub-14m text-secondary-900 mb-2 tracking-007'>
                  Văn phòng đại diện Miền Nam
                </div><div class='meey-body-14r text-gray !leading-5'>
                  Số 3, Đường 3/2, Q. 10, TP. Hồ Chí Minh
                </div><div class='meey-body-14r text-gray !leading-5 mt-3'>
                  Điện thoại: 0909 090 090
                </div>
              </div><div>
                <div class='meey-sub-14m text-secondary-900 mb-2 tracking-007'>
                  Văn phòng đại diện Thái Bình
                </div><div class='meey-body-14r text-gray !leading-5'>
                  Đường Đê Bờ Sông Trà Lý, Tổ 7 Hoàng Diệu, TP.Thái Bình
                </div><div class='meey-body-14r text-gray !leading-5 mt-3'>
                  Điện thoại: 0968 592 468
                </div>
              </div><div>
                <div class='meey-sub-14m text-secondary-900 mb-2 tracking-007'>
                  Văn phòng đại diện Hải Phòng
                </div><div class='meey-body-14r text-gray !leading-5'>
                  Số nhà 569 Đường 208 An Đồng, An Dương, Hải Phòng
                </div><div class='meey-body-14r text-gray !leading-5 mt-3'>
                  Điện thoại: 0976 316 929
                </div>
              </div><div>
                <div class='meey-sub-14m text-secondary-900 mb-2 tracking-007'>
                  Văn phòng đại diện Hòa Bình
                </div><div class='meey-body-14r text-gray !leading-5'>
                  Số Nhà 446, Tiểu Khu 6, Thị Trấn Lương Sơn, Tỉnh Hòa Bình
                </div><div class='meey-body-14r text-gray !leading-5 mt-3'>
                  Điện thoại: 0963.932.368
                </div>
              </div><div>
                <div class='meey-sub-14m text-secondary-900 mb-2 tracking-007'>
                  Văn phòng đại diện Bắc Ninh
                </div><div class='meey-body-14r text-gray !leading-5'>
                  Lô 13 Tòa thương mại Cát Tường ECO - Đường Lê Thái Tổ - P. Võ
                  Cường - TP.Bắc Ninh
                </div><div class='meey-body-14r text-gray !leading-5 mt-3'>
                  Điện thoại: 0985.156.668
                </div>
              </div><div>
                <div class='meey-sub-14m text-secondary-900 mb-2 tracking-007'>
                  Văn phòng đại diện Hải Dương
                </div><div class='meey-body-14r text-gray !leading-5'>
                  Số 118 Thanh Bình, P. Thanh Bình, TP. Hải Dương
                </div><div class='meey-body-14r text-gray !leading-5 mt-3'>
                  Điện thoại: 0936.707.379
                </div>
              </div><div>
                <div class='meey-sub-14m text-secondary-900 mb-2 tracking-007'>
                  Văn phòng đại diện Đồng Nai
                </div><div class='meey-body-14r text-gray !leading-5'>
                  Đường Nguyễn Khác Hiếu, Tổ 26, Khu Phố Long Đức 1, P. Tam
                  Phước, TP. Biên Hòa, Đồng Nai
                </div><div class='meey-body-14r text-gray !leading-5 mt-3'>
                  Điện thoại: 0978.916.737
                </div>
              </div><a
                class='meey-caption-12m text-primary-600'
                href='/page/lien-he'>Xem thêm DS Văn phòng đại diện</a
              >
            </div>
          </div>
        </div>
      </div><div
        class='bg-primary-800 text-secondary-100 text-center py-4 px-4'
      >
        <ul class='mb-1 flex flex-row items-center justify-center space-x-5'>
          <li class='business-license'>Người đại diện: Hoàng Mai Chung</li><li
            class='business-license'
          >
            Giấy ĐKKD số: 0108867454
          </li><li class='business-license'>Cấp lần đầu ngày: 15/08/2019</li><li
            class='business-license'
          >
            Nơi cấp: Sở kế hoạch và đầu tư TP Hà Nội
          </li>
        </ul><div class='mb-1 meey-caption-12r'>
          Giấy phép ICP số 4234 / GP-TTĐT do Sở thông tin và truyền thông Hà Nội
          cấp ngày 14/12/2020
        </div><div class='mb-1 meey-caption-12r'>
          Tổ chức quản lý trang thông tin điện tử: Công ty Cổ phần Tập đoàn Meey
          Land - Địa chỉ liên lạc: Tầng 5 Tòa nhà 97 – 99 Láng Hạ, phường Láng
          Hạ, quận Đống Đa, TP. Hà Nội
        </div><div class='meey-caption-12r'>
          - Điện thoại: 02462538566 - Email: contact@meeyland.com - Người chịu
          trách nhiệm quản lý nội dung: Ông Hoàng Mai Chung
        </div>
      </div>
    </footer>


<style lang="scss">
  .certificates {
	@apply grid grid-cols-2 grid-cols-4 gap-4 gap-6 flex justify-center;
	> li {
		&:not(&:first-child) {
			@apply pl-4 border-l border-secondary-300;
		}
		@apply border-none pl-0;
	}
}

.business-license {
	@apply  relative;
	&:not(&:first-child) {
		@apply pl-4;
		&:after {
			content: '|';
			@apply absolute -left-1 top-1/2 -translate-y-1/2;
		}
	}
}
</style>