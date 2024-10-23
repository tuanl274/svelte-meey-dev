import { resizeOnFlyUrl } from '$lib/utils/image'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
  console.time('init')
  // const response = await fetch(`https://api5.meeyland.com/v1/articles/search`, {
  //   method: 'POST',
  //   headers: {
  //     'x-tenant': btoa('meeyland'),
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     category: '5deb722db4367252525c1d00'
  //   })
  // })

  // const data = await response?.json()

  const data = {
    code: 200,
    message: 'Đã xử lý thành công',
    data: {
      results: [
        {
          _id: '66fe5c78b180fee32263948e',
          code: 301794707,
          city: {
            code: '30',
            translation: [
              {
                prefix: 'Tỉnh',
                name: 'Hải Dương',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175dded',
            slug: 'hai-duong'
          },
          totalPrice: 11000000000,
          facade: 4.9,
          userTypes: 0,
          source: 2,
          typeOfHouse: {
            name: 'Nhà mặt phố',
            _id: '65eeb3cf01dfc72e1912edb1',
            value: 'nha_mat_pho',
            slug: 'nha-mat-pho'
          },
          media: [
            {
              name: '2.jpg',
              width: 960,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/03/2-1727941445312-572558.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/03/2-1727941445312-572558.jpg',
              height: 1280
            },
            {
              name: '4.jpg',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/03/4-1727941445686-864731.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/03/4-1727941445686-864731.jpg',
              height: 960
            },
            {
              name: '5.jpg',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/03/5-1727941445986-047940.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/03/5-1727941445986-047940.jpg',
              height: 960
            },
            {
              name: '6.jpg',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/03/6-1727941446302-952028.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/03/6-1727941446302-952028.jpg',
              height: 960
            },
            {
              name: '11.jpg',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/03/11-1727941446586-812610.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/03/11-1727941446586-812610.jpg',
              height: 960
            },
            {
              name: '12.jpg',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/03/12-1727941446815-564216.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/03/12-1727941446815-564216.jpg',
              height: 960
            },
            {
              name: '13.jpg',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/03/13-1727941447088-516422.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/03/13-1727941447088-516422.jpg',
              height: 960
            },
            {
              name: '14.jpg',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/03/14-1727941447407-889813.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/03/14-1727941447407-889813.jpg',
              height: 960
            },
            {
              name: '17.jpg',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/03/17-1727941447721-816994.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/03/17-1727941447721-816994.jpg',
              height: 960
            },
            {
              name: '19.jpg',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/03/19-1727941448055-642468.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/03/19-1727941448055-642468.jpg',
              height: 960
            },
            {
              duration: 126.634,
              thumbnail: {
                s3Key: 'images/2024/10/03/screenshots.1727946032018.jpg',
                size: 59817,
                name: 'screenshots.jpg',
                width: 480,
                mimeType: 'image/jpeg',
                uri: '/meeyland/images/2024/10/03/screenshots.1727946032018.jpg',
                url: 'https://io.meeymedia.com/meeyland/images/2024/10/03/screenshots.1727946032018.jpg',
                height: 856
              },
              urlVod:
                'https://d.meeymedia.com/meeyland/videos/,360p,480p,720p,1080p,/2024/10/03/5888063979065-1727946030918-435305/master.m3u8',
              name: '5888063979065.mp4',
              description: 'Video quay mặt sau',
              mediaType: 2,
              mimeType: 'video/mp4',
              uri: '/meeyland/videos/2024/10/03/5888063979065-1727946030918-435305.mp4',
              url: 'https://v.meeymedia.com/meeyland/videos/2024/10/03/5888063979065-1727946030918-435305.mp4?hashsign=Jl6htNK3wTCkzgrsAXOCIQ&e=1759482102'
            }
          ],
          subscription: {
            code: 'TINELECTRON',
            color: '#344054',
            _id: '66a9a0d3e122aabd2eb1539c',
            type: -1,
            title: 'Gói Electron'
          },
          isCrawl: false,
          isTourDisplayed: false,
          title:
            'Cần bán nhà 3 tầng, đường An Ninh, diện tích 165,8m2, diện tích xây dựng 300m2 - Tại Phố An Ninh, Quang Trung, Hải Dương',
          createdAt: '2024-10-03T08:57:28.557Z',
          totalBathroom: 5,
          contact: {
            fullName: 'Nguyễn Thị Hoài Thu',
            phones: ['0989207438'],
            email: 'hoaithutvn@gmail.com'
          },
          area: 168.5,
          thumbnail: {
            size: 204572,
            name: '2.jpg',
            width: 960,
            mimeType: 'image/jpeg',
            uri: '/meeyland/images/2024/10/03/2-1727941445312-572558.jpg',
            url: 'https://io.meeymedia.com/meeyland/images/2024/10/03/2-1727941445312-572558.jpg',
            height: 1280
          },
          publishedAt: '2024-10-23T09:02:00.000Z',
          tour: null,
          totalBedroom: 5,
          totalPoint: 8.923076923076923,
          depth: 34,
          isBoughtElectron: true,
          createdBy: {
            _id: '5e814a68321cd6ccbc2edfed',
            name: 'Nguyễn Thị Hoài Thu',
            email: 'hoaithutvn@gmail.com',
            phone: '0989207438',
            avatar:
              'https://static.meeyid.com/avatar/5e814a68321cd6ccbc2edfed.jpg',
            status: 1,
            phoneVerified: true,
            emailVerified: true
          },
          district: {
            code: '288',
            translation: [
              {
                prefix: 'Thành phố',
                name: 'Hải Dương',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175dee2',
            slug: 'hai-duong'
          },
          totalFloor: 3,
          category: {
            name: 'Mua bán',
            _id: '5deb722db4367252525c1d00',
            slugIncludeTypeOfHouse: 'ban',
            value: 'mua_ban',
            uri: '/mua-ban-nha-dat-a4',
            slug: 'mua-ban-nha-dat'
          },
          totalBalcony: null,
          userTypesLabel: 'Môi giới',
          addressLabel: 'Tp. Hải Dương, T. Hải Dương',
          priceLabel: {
            totalPrice: '11 tỷ',
            subTotalPrice: '65,28 tr/m²'
          },
          uri: '/ban-nha-mat-pho-hai-duong-hai-duong-i1322/301794707'
        },
        {
          _id: '6715d0c0b89badfb72d3ec3c',
          code: 302003859,
          city: {
            code: '34',
            translation: [
              {
                prefix: 'Tỉnh',
                name: 'Thái Bình',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175ddf0',
            slug: 'thai-binh'
          },
          totalPrice: null,
          facade: null,
          userTypes: 0,
          source: 2,
          typeOfHouse: {
            name: 'Căn hộ chung cư',
            _id: '65eeb3cf01dfc72e1912edb2',
            value: 'can_ho_chung_cu',
            slug: 'can-ho-chung-cu'
          },
          media: [
            {
              name: '3PN.jpeg',
              width: 3000,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/21/3pn-1729482928954-559732.jpeg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/21/3pn-1729482928954-559732.jpeg',
              height: 2078
            }
          ],
          subscription: {
            code: 'TINELECTRON',
            color: '#344054',
            _id: '66a9a0d3e122aabd2eb1539c',
            type: -1,
            title: 'Gói Electron'
          },
          isCrawl: false,
          isTourDisplayed: true,
          title:
            'Căn chung cư cao cấp Eden Garden, thành phố Thái Bình, 2 ngủ, 2 vệ sinh, 75,4m2, chỉ từ 750 triệu',
          createdAt: '2024-10-21T03:55:44.873Z',
          totalBathroom: 2,
          contact: {
            fullName: 'Hà Long',
            phones: ['0927439889'],
            email: ''
          },
          floorNumber: null,
          area: 75.4,
          thumbnail: {
            size: 743532,
            name: '3PN.jpeg',
            width: 3000,
            mimeType: 'image/jpeg',
            uri: '/meey3d/images/2024/10/15/3pn-1728980929198-247150.jpeg',
            url: 'https://io.meeymedia.com/meey3d/images/2024/10/15/3pn-1728980929198-247150.jpeg',
            height: 2078
          },
          publishedAt: '2024-10-21T04:11:51.500Z',
          tour: '670e27c23425bf6f5d31373a',
          totalBedroom: 2,
          totalPoint: 6.038461538461538,
          depth: null,
          isBoughtElectron: true,
          createdBy: {
            _id: '60d2e708e911b57f66f435f2',
            name: 'Hà Long',
            email: null,
            phone: '0927439889',
            status: 1,
            phoneVerified: true,
            emailVerified: false
          },
          district: {
            code: '336',
            translation: [
              {
                prefix: 'Thành phố',
                name: 'Thái Bình',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175df07',
            slug: 'thai-binh'
          },
          totalFloor: 30,
          category: {
            name: 'Mua bán',
            _id: '5deb722db4367252525c1d00',
            slugIncludeTypeOfHouse: 'ban',
            value: 'mua_ban',
            uri: '/mua-ban-nha-dat-a4',
            slug: 'mua-ban-nha-dat'
          },
          totalBalcony: null,
          userTypesLabel: 'Môi giới',
          addressLabel: 'Tp. Thái Bình, T. Thái Bình',
          priceLabel: {
            totalPrice: 'Thương lượng'
          },
          uri: '/ban-can-ho-chung-cu-thai-binh-thai-binh-i1422/302003859'
        },
        {
          _id: '6707f9f37af1b8c1a23a4f3a',
          code: 301889717,
          city: {
            code: '66',
            translation: [
              {
                prefix: 'Tỉnh',
                name: 'Đắk Lắk',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175de04',
            slug: 'dak-lak'
          },
          totalPrice: 1200000000,
          facade: 8,
          userTypes: 1,
          source: 2,
          typeOfHouse: {
            name: 'Đất',
            _id: '65eeb3cf01dfc72e1912edb3',
            value: 'dat',
            slug: 'dat'
          },
          subscription: {
            code: 'TINELECTRON',
            color: '#344054',
            _id: '66a9a0d3e122aabd2eb1539c',
            type: -1,
            title: 'Gói Electron'
          },
          media: [
            {
              name: 'z5732565759399_9c4fa7aa5d5ad931996241529af759d8.jpg',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/08/15/z57325657593999c4fa7aa5d5ad931996241529af759d8-1723706809819-858088.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/08/15/z57325657593999c4fa7aa5d5ad931996241529af759d8-1723706809819-858088.jpg',
              height: 853
            },
            {
              name: 'z5732549489436_8d69d61d5836526d8b0798323789213d.jpg',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/08/15/z57325494894368d69d61d5836526d8b0798323789213d-1723706807975-225108.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/08/15/z57325494894368d69d61d5836526d8b0798323789213d-1723706807975-225108.jpg',
              height: 853
            },
            {
              name: 'z5732553613997_07e813efb0cd8b2adaf9c5412b8346c8.jpg',
              width: 1183,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/08/15/z573255361399707e813efb0cd8b2adaf9c5412b8346c8-1723706809010-296289.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/08/15/z573255361399707e813efb0cd8b2adaf9c5412b8346c8-1723706809010-296289.jpg',
              height: 2560
            },
            {
              name: 'z5732549476817_788c856e04629ad7271fb5b376b031b4.jpg',
              width: 960,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/08/15/z5732549476817788c856e04629ad7271fb5b376b031b4-1723706807121-487785.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/08/15/z5732549476817788c856e04629ad7271fb5b376b031b4-1723706807121-487785.jpg',
              height: 1280
            },
            {
              name: 'z5732549489102_65ed4a8f6ad5e70d6dec2153b5442bbf.jpg',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/08/15/z573254948910265ed4a8f6ad5e70d6dec2153b5442bbf-1723706807650-481201.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/08/15/z573254948910265ed4a8f6ad5e70d6dec2153b5442bbf-1723706807650-481201.jpg',
              height: 853
            },
            {
              name: 'z5732549505826_10522e9dafc28799b2b7a0c8ae349469.jpg',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/08/15/z573254950582610522e9dafc28799b2b7a0c8ae349469-1723706808260-066759.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/08/15/z573254950582610522e9dafc28799b2b7a0c8ae349469-1723706808260-066759.jpg',
              height: 853
            },
            {
              name: 'z5732549506571_d0b7f7424cbc149c7808d992968d3aeb.jpg',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/08/15/z5732549506571d0b7f7424cbc149c7808d992968d3aeb-1723706808621-591230.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/08/15/z5732549506571d0b7f7424cbc149c7808d992968d3aeb-1723706808621-591230.jpg',
              height: 853
            },
            {
              name: 'z5732553680392_2a8fb36c08a174cc3db0938d53f42baf.jpg',
              width: 1920,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/08/15/z57325536803922a8fb36c08a174cc3db0938d53f42baf-1723706809526-839602.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/08/15/z57325536803922a8fb36c08a174cc3db0938d53f42baf-1723706809526-839602.jpg',
              height: 2560
            },
            {
              duration: 70.6,
              thumbnail: {
                s3Key: 'images/2024/08/15/screenshots.1723706806539.jpg',
                size: 142772,
                name: 'screenshots.jpg',
                width: 1280,
                mimeType: 'image/jpeg',
                uri: '/meeyland/images/2024/08/15/screenshots.1723706806539.jpg',
                url: 'https://io.meeymedia.com/meeyland/images/2024/08/15/screenshots.1723706806539.jpg',
                height: 720
              },
              urlVod:
                'https://d.meeymedia.com/meeyland/videos/,360p,480p,720p,1080p,/2024/08/15/5732549543520-1723706805452-080769/master.m3u8',
              name: '5732549543520.mp4',
              description: '',
              mediaType: 2,
              mimeType: 'video/mp4',
              uri: '/meeyland/videos/2024/08/15/5732549543520-1723706805452-080769.mp4',
              url: 'https://v.meeymedia.com/meeyland/videos/2024/08/15/5732549543520-1723706805452-080769.mp4?hashsign=Gw1hT1dj6XI8g8UKQ0M37Q&e=1755243375'
            }
          ],
          isCrawl: false,
          isTourDisplayed: true,
          title:
            'Chính chủ bán đất nền tại thị xã Buôn Hồ, Đắk Lắk, 700m2 thổ cư, 2 mặt tiền cực đẹp, sẵn sổ đỏ giao dịch',
          createdAt: '2024-08-15T07:36:16.091Z',
          contact: {
            fullName: 'Tường Lân',
            phones: ['0987355660'],
            email: '0987355660@gmail.com'
          },
          area: 700,
          thumbnail: {
            size: 470483,
            name: 'z5732549476817_788c856e04629ad7271fb5b376b031b4.jpg',
            width: 960,
            mimeType: 'image/jpeg',
            uri: '/meey3d/images/2024/10/10/z5732549476817788c856e04629ad7271fb5b376b031b4-1728577033542-738685.jpg',
            url: 'https://io.meeymedia.com/meey3d/images/2024/10/10/z5732549476817788c856e04629ad7271fb5b376b031b4-1728577033542-738685.jpg',
            height: 1280
          },
          publishedAt: '2024-10-11T00:43:55.519Z',
          tour: '6707fe0a86ca8562380d7869',
          totalPoint: 8.384615384615385,
          depth: 6,
          isBoughtElectron: true,
          createdBy: {
            _id: '66bd5b9375d1dcc9cc996e14',
            name: 'Tường Lân',
            email: '0987355660@gmail.com',
            phone: '0987355660',
            avatar: '',
            status: 1,
            phoneVerified: true,
            emailVerified: false
          },
          district: {
            code: '644',
            translation: [
              {
                prefix: 'Thị xã',
                name: 'Buôn Hồ',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501cbeb80a7245175dff1',
            slug: 'buon-ho'
          },
          category: {
            name: 'Mua bán',
            _id: '5deb722db4367252525c1d00',
            slugIncludeTypeOfHouse: 'ban',
            value: 'mua_ban',
            uri: '/mua-ban-nha-dat-a4',
            slug: 'mua-ban-nha-dat'
          },
          userTypesLabel: 'Chính chủ',
          addressLabel: 'Tx. Buôn Hồ, T. Đắk Lắk',
          priceLabel: {
            totalPrice: '1,2 tỷ',
            subTotalPrice: '1,71 tr/m²'
          },
          uri: '/ban-dat-buon-ho-dak-lak-i1122/301889717'
        },
        {
          _id: '67077df3b180fee32263a618',
          code: 301884186,
          city: {
            code: '79',
            translation: [
              {
                prefix: 'Thành phố',
                name: 'Hồ Chí Minh',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175de0c',
            slug: 'ho-chi-minh'
          },
          totalPrice: 2610000000,
          facade: null,
          userTypes: 0,
          source: 2,
          typeOfHouse: {
            name: 'Căn hộ chung cư',
            _id: '65eeb3cf01dfc72e1912edb2',
            value: 'can_ho_chung_cu',
            slug: 'can-ho-chung-cu'
          },
          media: [
            {
              name: 'z5914938049056_b0e52f474fb368f5c0f8db1a51c2dcdc.jpg',
              width: 1600,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/z5914938049056b0e52f474fb368f5c0f8db1a51c2dcdc-1728544185262-590104.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/z5914938049056b0e52f474fb368f5c0f8db1a51c2dcdc-1728544185262-590104.jpg',
              height: 1066
            },
            {
              name: 'z5914938037439_d0a98c69c90c1f7b189d41056791696a (1).jpg',
              width: 1600,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/z5914938037439d0a98c69c90c1f7b189d41056791696a-1-1728544190154-422175.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/z5914938037439d0a98c69c90c1f7b189d41056791696a-1-1728544190154-422175.jpg',
              height: 1066
            },
            {
              name: 'z5914933482573_b02e4cfe65f8a6a312697d07a9ac468d.jpg',
              width: 1600,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/z5914933482573b02e4cfe65f8a6a312697d07a9ac468d-1728544196140-055360.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/z5914933482573b02e4cfe65f8a6a312697d07a9ac468d-1728544196140-055360.jpg',
              height: 1066
            },
            {
              name: 'z5914938004320_e683c684ebd5295d87522254f7988322 (1).jpg',
              width: 1600,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/z5914938004320e683c684ebd5295d87522254f7988322-1-1728544201237-946294.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/z5914938004320e683c684ebd5295d87522254f7988322-1-1728544201237-946294.jpg',
              height: 1066
            },
            {
              name: 'z5914937982206_57c2284d5673691067a8ff83cac33bab.jpg',
              width: 1600,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/z591493798220657c2284d5673691067a8ff83cac33bab-1728544208950-074489.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/z591493798220657c2284d5673691067a8ff83cac33bab-1728544208950-074489.jpg',
              height: 1066
            },
            {
              name: 'z5914938027879_77afd5ea6ad550d9be9e4a623fa0d460.jpg',
              width: 1600,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/z591493802787977afd5ea6ad550d9be9e4a623fa0d460-1728544228814-507105.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/z591493802787977afd5ea6ad550d9be9e4a623fa0d460-1728544228814-507105.jpg',
              height: 1066
            },
            {
              name: 'z5914938017006_135102496fc5754046ce443280dec710.jpg',
              width: 1600,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/z5914938017006135102496fc5754046ce443280dec710-1728544236146-892735.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/z5914938017006135102496fc5754046ce443280dec710-1728544236146-892735.jpg',
              height: 1066
            }
          ],
          subscription: {
            code: 'TINELECTRON',
            color: '#344054',
            _id: '66a9a0d3e122aabd2eb1539c',
            type: -1,
            title: 'Gói Electron'
          },
          isCrawl: false,
          isTourDisplayed: true,
          title:
            'Quỹ căn căn hộ view đẹp, giá tốt nhất sát cạnh Vincom Mega Mall',
          createdAt: '2024-10-10T07:10:43.270Z',
          totalBathroom: 2,
          contact: {
            fullName: 'Nguyễn Phong',
            phones: ['0988800777'],
            email: 'phongnguyen777@gmail.com'
          },
          floorNumber: null,
          area: 59,
          thumbnail: {
            size: 294792,
            name: 'z5914938049056_b0e52f474fb368f5c0f8db1a51c2dcdc (1).jpg',
            width: 1600,
            mimeType: 'image/jpeg',
            uri: '/meey3d/images/2024/10/10/z5914938049056b0e52f474fb368f5c0f8db1a51c2dcdc-1-1728534348982-486298.jpg',
            url: 'https://io.meeymedia.com/meey3d/images/2024/10/10/z5914938049056b0e52f474fb368f5c0f8db1a51c2dcdc-1-1728534348982-486298.jpg',
            height: 1066
          },
          publishedAt: '2024-10-10T07:16:09.690Z',
          tour: '6707574d86ca8562380d541e',
          totalBedroom: 2,
          totalPoint: 5.763736263736264,
          depth: null,
          isBoughtElectron: true,
          createdBy: {
            _id: '6707561e573cde58105288c7',
            name: 'Nguyễn Phong',
            email: 'phongnguyen777@gmail.com',
            phone: '0988800777',
            avatar: null,
            status: 1,
            phoneVerified: true,
            emailVerified: false
          },
          district: {
            code: '765',
            translation: [
              {
                prefix: 'Quận',
                name: 'Bình Thạnh',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501cbeb80a7245175e048',
            slug: 'binh-thanh'
          },
          totalFloor: null,
          category: {
            name: 'Mua bán',
            _id: '5deb722db4367252525c1d00',
            slugIncludeTypeOfHouse: 'ban',
            value: 'mua_ban',
            uri: '/mua-ban-nha-dat-a4',
            slug: 'mua-ban-nha-dat'
          },
          totalBalcony: null,
          userTypesLabel: 'Môi giới',
          addressLabel: 'Q. Bình Thạnh, Tp. Hồ Chí Minh',
          priceLabel: {
            totalPrice: '2,61 tỷ',
            subTotalPrice: '44,24 tr/m²'
          },
          uri: '/ban-can-ho-chung-cu-binh-thanh-ho-chi-minh-i1423/301884186'
        },
        {
          _id: '67077c62b180fee32263a60c',
          code: 301884162,
          city: {
            code: 'thanh-pho-ha-noi',
            translation: [
              {
                prefix: 'Thành phố',
                name: 'Hà Nội',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175dddb',
            slug: 'ha-noi'
          },
          totalPrice: 108000000000,
          facade: 22,
          userTypes: 0,
          source: 4,
          typeOfHouse: {
            name: 'Biệt thự liền kề',
            _id: '65eeb3cf01dfc72e1912edb5',
            value: 'biet_thu_lien_ke',
            slug: 'biet-thu-lien-ke'
          },
          media: [
            {
              name: 'z5915129015254_99cb0dbbb0cb2c64c82b5e86f4f08122.jpg',
              width: 2048,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/z591512901525499cb0dbbb0cb2c64c82b5e86f4f08122-1728543488749-206295.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/z591512901525499cb0dbbb0cb2c64c82b5e86f4f08122-1728543488749-206295.jpg',
              height: 1536
            },
            {
              name: 'z5915129022254_786624cd7f9ea29c4fd017a67a4d6d33.jpg',
              width: 1444,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/z5915129022254786624cd7f9ea29c4fd017a67a4d6d33-1728543490564-254498.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/z5915129022254786624cd7f9ea29c4fd017a67a4d6d33-1728543490564-254498.jpg',
              height: 2047
            },
            {
              name: 'z5915129048403_b65949a031c5142bbfc2dac8ef0d79d4.jpg',
              width: 2048,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/z5915129048403b65949a031c5142bbfc2dac8ef0d79d4-1728543491691-892092.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/z5915129048403b65949a031c5142bbfc2dac8ef0d79d4-1728543491691-892092.jpg',
              height: 1536
            },
            {
              name: 'z5915129076395_2425c231b9df17b03e911fabcc99d214.jpg',
              width: 2048,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/z59151290763952425c231b9df17b03e911fabcc99d214-1728543492723-113588.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/z59151290763952425c231b9df17b03e911fabcc99d214-1728543492723-113588.jpg',
              height: 1536
            },
            {
              name: 'z5915128978971_17ae06ccb689dcc6915ff388806b47a7.jpg',
              width: 1536,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/z591512897897117ae06ccb689dcc6915ff388806b47a7-1728543493411-255958.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/z591512897897117ae06ccb689dcc6915ff388806b47a7-1728543493411-255958.jpg',
              height: 2048
            },
            {
              name: 'z5915129027885_2781caf35659b4d9a237a889cacc623c.jpg',
              width: 960,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/z59151290278852781caf35659b4d9a237a889cacc623c-1728543493762-335374.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/z59151290278852781caf35659b4d9a237a889cacc623c-1728543493762-335374.jpg',
              height: 1280
            },
            {
              name: 'z5915129065509_44b61a4ac6c6640d0b0b7903dff42e97.jpg',
              width: 960,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/z591512906550944b61a4ac6c6640d0b0b7903dff42e97-1728543494616-153014.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/z591512906550944b61a4ac6c6640d0b0b7903dff42e97-1728543494616-153014.jpg',
              height: 1280
            },
            {
              name: 'z5915129085172_66d58557072e65712c222effdf19be59.jpg',
              width: 2048,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/z591512908517266d58557072e65712c222effdf19be59-1728543495854-319569.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/z591512908517266d58557072e65712c222effdf19be59-1728543495854-319569.jpg',
              height: 1536
            }
          ],
          subscription: {
            code: 'TINELECTRON',
            color: '#344054',
            _id: '66a9a0d3e122aabd2eb1539c',
            type: -1,
            title: 'Gói Electron'
          },
          isCrawl: false,
          isTourDisplayed: true,
          title:
            'Bán biệt thự Starlake Tây Hồ Tây, Nguyễn Văn Huyên 270m2, 4 tầng, mặt tiền 22m, 108 tỷ, tặng nội thất',
          createdAt: '2024-10-10T07:04:02.493Z',
          totalBathroom: 4,
          contact: {
            fullName: 'Phan Văn Sinh',
            phones: ['0886083789'],
            email: 'sinhnhapho@gmail.com'
          },
          area: 270,
          thumbnail: {
            size: 571498,
            name: 'z5915129015254_99cb0dbbb0cb2c64c82b5e86f4f08122.jpg',
            width: 2048,
            mimeType: 'image/jpeg',
            uri: '/meey3d/images/2024/10/10/z591512901525499cb0dbbb0cb2c64c82b5e86f4f08122-1728543405104-088888.jpg',
            url: 'https://io.meeymedia.com/meey3d/images/2024/10/10/z591512901525499cb0dbbb0cb2c64c82b5e86f4f08122-1728543405104-088888.jpg',
            height: 1536
          },
          publishedAt: '2024-10-10T07:06:32.336Z',
          tour: '67077aad3c52d1edce0c8958',
          totalBedroom: 4,
          totalPoint: 7.230769230769231,
          depth: 13,
          isBoughtElectron: true,
          createdBy: {
            _id: '63324d1bf5ca860019f55bb2',
            name: 'Phan Văn Sinh',
            email: 'sinhnhapho@gmail.com',
            phone: '0886083789',
            avatar:
              'https://static.meeyid.com/avatar/z5269035788478_4b05c4659653dbf8a766a549d336a208.1721954026006.jpg',
            status: 1,
            phoneVerified: true,
            emailVerified: true
          },
          district: {
            code: '003',
            translation: [
              {
                prefix: 'Quận',
                name: 'Tây Hồ',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175de29',
            slug: 'tay-ho'
          },
          totalFloor: 4,
          category: {
            name: 'Mua bán',
            _id: '5deb722db4367252525c1d00',
            slugIncludeTypeOfHouse: 'ban',
            value: 'mua_ban',
            uri: '/mua-ban-nha-dat-a4',
            slug: 'mua-ban-nha-dat'
          },
          totalBalcony: 4,
          userTypesLabel: 'Môi giới',
          addressLabel: 'Q. Tây Hồ, Tp. Hà Nội',
          priceLabel: {
            totalPrice: '108 tỷ',
            subTotalPrice: '400 tr/m²'
          },
          uri: '/ban-biet-thu-lien-ke-tay-ho-ha-noi-i1422/301884162'
        },
        {
          _id: '67075a95b180fee32263a594',
          code: 301882411,
          city: {
            code: 'thanh-pho-ha-noi',
            translation: [
              {
                prefix: 'Thành phố',
                name: 'Hà Nội',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175dddb',
            slug: 'ha-noi'
          },
          totalPrice: 1900000000,
          facade: null,
          userTypes: 0,
          source: 2,
          typeOfHouse: {
            name: 'Căn hộ chung cư',
            _id: '65eeb3cf01dfc72e1912edb2',
            value: 'can_ho_chung_cu',
            slug: 'can-ho-chung-cu'
          },
          media: [
            {
              name: '334536303_1231759330776141_7147123310033321554_n.jpg',
              width: 960,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/33453630312317593307761417147123310033321554n-1728534774289-700854.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/33453630312317593307761417147123310033321554n-1728534774289-700854.jpg',
              height: 720
            },
            {
              name: '333524066_207748218502882_3374220337126254533_n.jpg',
              width: 2048,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/3335240662077482185028823374220337126254533n-1728534778000-510492.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/3335240662077482185028823374220337126254533n-1728534778000-510492.jpg',
              height: 1536
            },
            {
              name: '334264360_199435596096643_3771262104510123504_n.jpg',
              width: 2048,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/3342643601994355960966433771262104510123504n-1728534783487-347617.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/3342643601994355960966433771262104510123504n-1728534783487-347617.jpg',
              height: 1538
            }
          ],
          subscription: {
            code: 'TINELECTRON',
            color: '#344054',
            _id: '66a9a0d3e122aabd2eb1539c',
            type: -1,
            title: 'Gói Electron'
          },
          isCrawl: false,
          isTourDisplayed: false,
          title:
            'Cắt lỗ 400 triệu, căn hộ Vinhome Ocean Park Gia Lâm, căn hộ có sổ đỏ và không vay ngân hàng',
          createdAt: '2024-10-10T04:39:49.930Z',
          totalBathroom: 1,
          contact: {
            fullName: 'Hải Hòa',
            phones: ['0898821612', '0986657921'],
            email: 'haihoa0-293029@gmail.com'
          },
          floorNumber: null,
          area: 60.1,
          thumbnail: {
            size: 109234,
            name: '334536303_1231759330776141_7147123310033321554_n.jpg',
            width: 960,
            mimeType: 'image/jpeg',
            uri: '/meeyland/images/2024/10/10/33453630312317593307761417147123310033321554n-1728534774289-700854.jpg',
            url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/33453630312317593307761417147123310033321554n-1728534774289-700854.jpg',
            height: 720
          },
          publishedAt: '2024-10-10T04:43:42.079Z',
          tour: null,
          totalBedroom: 2,
          totalPoint: 5.6098901098901095,
          depth: null,
          isBoughtElectron: true,
          createdBy: {
            _id: '66f66b35f7ed3ce3e2b2e797',
            name: 'Hải Hòa',
            email: 'haihoa0-293029@gmail.com',
            phone: '0898821612',
            avatar: null,
            status: 1,
            phoneVerified: true,
            emailVerified: false
          },
          district: {
            code: '018',
            translation: [
              {
                prefix: 'Huyện',
                name: 'Gia Lâm',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175de32',
            slug: 'gia-lam'
          },
          totalFloor: null,
          category: {
            name: 'Mua bán',
            _id: '5deb722db4367252525c1d00',
            slugIncludeTypeOfHouse: 'ban',
            value: 'mua_ban',
            uri: '/mua-ban-nha-dat-a4',
            slug: 'mua-ban-nha-dat'
          },
          totalBalcony: null,
          userTypesLabel: 'Môi giới',
          addressLabel: 'H. Gia Lâm, Tp. Hà Nội',
          priceLabel: {
            totalPrice: '1,9 tỷ',
            subTotalPrice: '31,61 tr/m²'
          },
          uri: '/ban-can-ho-chung-cu-gia-lam-ha-noi-i1422/301882411'
        },
        {
          _id: '67075573b180fee32263a578',
          code: 301882088,
          city: {
            code: 'thanh-pho-ha-noi',
            translation: [
              {
                prefix: 'Thành phố',
                name: 'Hà Nội',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175dddb',
            slug: 'ha-noi'
          },
          totalPrice: 28000000000,
          facade: null,
          userTypes: 0,
          source: 2,
          typeOfHouse: {
            name: 'Shophouse, nhà phố thương mại',
            _id: '65eeb3cf01dfc72e1912edb8',
            value: 'shophouse_nha_pho_thuong_mai',
            slug: 'shophouse-nha-pho-thuong-mai'
          },
          media: [
            {
              name: 'unnamed.jpg',
              width: 1200,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/unnamed-1728533866428-919967.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/unnamed-1728533866428-919967.jpg',
              height: 1132
            },
            {
              name: '1724922641-vinhomes-global-gate-6.jpg',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/1724922641vinhomesglobalgate6-1728555095142-366423.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/1724922641vinhomesglobalgate6-1728555095142-366423.jpg',
              height: 720
            },
            {
              name: 'biet-thu-vinhomes-co-loa.jpg',
              width: 1600,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/bietthuvinhomescoloa-1728555095779-580978.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/bietthuvinhomescoloa-1728555095779-580978.jpg',
              height: 900
            },
            {
              name: 'vi-tri-dac-dia-du-an-vinhomes-co-loa.jpg',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/vitridacdiaduanvinhomescoloa-1728555096035-514358.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/vitridacdiaduanvinhomescoloa-1728555096035-514358.jpg',
              height: 730
            }
          ],
          subscription: {
            code: 'TINELECTRON',
            color: '#344054',
            _id: '66a9a0d3e122aabd2eb1539c',
            type: -1,
            title: 'Gói Electron'
          },
          isCrawl: false,
          isTourDisplayed: true,
          title: 'Độc quyền Song lập, view công viên, rẻ nhất Vin Cổ Loa',
          createdAt: '2024-10-10T04:17:55.868Z',
          totalBathroom: null,
          contact: {
            fullName: 'Mr. Hồng',
            phones: ['0988291696'],
            email: 'hongnx2233@gmail.com'
          },
          area: 100,
          thumbnail: {
            size: 225538,
            name: '1724922641-vinhomes-global-gate-6.jpg',
            width: 1280,
            mimeType: 'image/jpeg',
            uri: '/meey3d/images/2024/10/10/1724922641vinhomesglobalgate6-1728533635662-949637.jpg',
            url: 'https://io.meeymedia.com/meey3d/images/2024/10/10/1724922641vinhomesglobalgate6-1728533635662-949637.jpg',
            height: 720
          },
          publishedAt: '2024-10-10T04:22:33.046Z',
          tour: '670754843c52d1edce0c8055',
          totalBedroom: null,
          totalPoint: 5.230769230769231,
          depth: null,
          isBoughtElectron: true,
          createdBy: {
            _id: '611f77df120ad3d9c67c0994',
            name: 'Mr. Hồng',
            email: 'hongnx2233@gmail.com',
            phone: '0988291696',
            avatar: null,
            status: 1,
            phoneVerified: true,
            emailVerified: false
          },
          district: {
            code: '017',
            translation: [
              {
                prefix: 'Huyện',
                name: 'Đông Anh',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175de31',
            slug: 'dong-anh'
          },
          totalFloor: null,
          category: {
            name: 'Mua bán',
            _id: '5deb722db4367252525c1d00',
            slugIncludeTypeOfHouse: 'ban',
            value: 'mua_ban',
            uri: '/mua-ban-nha-dat-a4',
            slug: 'mua-ban-nha-dat'
          },
          totalBalcony: null,
          userTypesLabel: 'Môi giới',
          addressLabel: 'H. Đông Anh, Tp. Hà Nội',
          priceLabel: {
            totalPrice: '28 tỷ',
            subTotalPrice: '280 tr/m²'
          },
          uri: '/ban-shophouse-nha-pho-thuong-mai-dong-anh-ha-noi-i1522/301882088'
        },
        {
          _id: '67075346b180fee32263a56c',
          code: 301881907,
          city: {
            code: 'thanh-pho-ha-noi',
            translation: [
              {
                prefix: 'Thành phố',
                name: 'Hà Nội',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175dddb',
            slug: 'ha-noi'
          },
          totalPrice: null,
          facade: null,
          userTypes: 0,
          source: 2,
          typeOfHouse: {
            name: 'Căn hộ chung cư',
            _id: '65eeb3cf01dfc72e1912edb2',
            value: 'can_ho_chung_cu',
            slug: 'can-ho-chung-cu'
          },
          media: [
            {
              name: 'z5914759800000_02b76ef48f5587de8494822ca7a3f024.jpg',
              width: 2560,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/z591475980000002b76ef48f5587de8494822ca7a3f024-1728533283648-043842.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/z591475980000002b76ef48f5587de8494822ca7a3f024-1728533283648-043842.jpg',
              height: 1706
            },
            {
              name: 'z5914759800001_df9f5ca01063f2e2dc51d015be963f00.jpg',
              width: 2560,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/z5914759800001df9f5ca01063f2e2dc51d015be963f00-1728533286733-795502.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/z5914759800001df9f5ca01063f2e2dc51d015be963f00-1728533286733-795502.jpg',
              height: 1706
            },
            {
              name: 'z5914759800015_8aee133fcef02809f0b1a92c77519a58.jpg',
              width: 2560,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/z59147598000158aee133fcef02809f0b1a92c77519a58-1728533289714-783506.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/z59147598000158aee133fcef02809f0b1a92c77519a58-1728533289714-783506.jpg',
              height: 1706
            },
            {
              name: 'z5914759820396_91303c383fa3965ec35fcb64d8964850.jpg',
              width: 2560,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/z591475982039691303c383fa3965ec35fcb64d8964850-1728533292724-933934.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/z591475982039691303c383fa3965ec35fcb64d8964850-1728533292724-933934.jpg',
              height: 1706
            },
            {
              name: 'z5914759820401_82d7aa50c208725d15d887f11769c509.jpg',
              width: 2560,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/z591475982040182d7aa50c208725d15d887f11769c509-1728533294388-549248.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/z591475982040182d7aa50c208725d15d887f11769c509-1728533294388-549248.jpg',
              height: 1706
            },
            {
              name: 'z5914759861040_9b4c79068eaaf4e78a7a8d4fd6d4a449.jpg',
              width: 2560,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/z59147598610409b4c79068eaaf4e78a7a8d4fd6d4a449-1728533296443-710358.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/z59147598610409b4c79068eaaf4e78a7a8d4fd6d4a449-1728533296443-710358.jpg',
              height: 1706
            },
            {
              name: 'z5914759820400_9ca718c62b8e337efaca79dc99d3d759.jpg',
              width: 2560,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/z59147598204009ca718c62b8e337efaca79dc99d3d759-1728533299433-393343.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/z59147598204009ca718c62b8e337efaca79dc99d3d759-1728533299433-393343.jpg',
              height: 1706
            }
          ],
          subscription: {
            code: 'TINELECTRON',
            color: '#344054',
            _id: '66a9a0d3e122aabd2eb1539c',
            type: -1,
            title: 'Gói Electron'
          },
          isCrawl: false,
          isTourDisplayed: true,
          title:
            'Mở bán Sola Park G5, G6, căn 1,2,3 phòng ngủ, chỉ từ 72 triệu/m2, 2 hầm + cạnh nhà để xe',
          createdAt: '2024-10-10T04:08:38.493Z',
          totalBathroom: 2,
          contact: {
            fullName: 'Bùi Tích Lực',
            phones: ['0986949814'],
            email: ''
          },
          floorNumber: 8,
          area: 64,
          thumbnail: {
            size: 690980,
            name: 'z5914759800000_02b76ef48f5587de8494822ca7a3f024.jpg',
            width: 2560,
            mimeType: 'image/jpeg',
            uri: '/meey3d/images/2024/10/10/z591475980000002b76ef48f5587de8494822ca7a3f024-1728532366525-723735.jpg',
            url: 'https://io.meeymedia.com/meey3d/images/2024/10/10/z591475980000002b76ef48f5587de8494822ca7a3f024-1728532366525-723735.jpg',
            height: 1706
          },
          publishedAt: '2024-10-10T04:18:52.877Z',
          tour: '67074f90f0bfd73b0f4eda7d',
          totalBedroom: 2,
          totalPoint: 7.417582417582418,
          depth: null,
          isBoughtElectron: true,
          createdBy: {
            _id: '5f603a7a5b9c9fef5b0b51f6',
            name: 'Bùi Tích Lực',
            email: null,
            phone: '0986949814',
            avatar: 'https://static.meeyid.com/avatar/anh.1600142080378.jpg',
            status: 1,
            phoneVerified: true,
            emailVerified: false
          },
          district: {
            code: '019',
            translation: [
              {
                prefix: 'Quận',
                name: 'Nam Từ Liêm',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175de33',
            slug: 'nam-tu-liem'
          },
          totalFloor: 39,
          category: {
            name: 'Mua bán',
            _id: '5deb722db4367252525c1d00',
            slugIncludeTypeOfHouse: 'ban',
            value: 'mua_ban',
            uri: '/mua-ban-nha-dat-a4',
            slug: 'mua-ban-nha-dat'
          },
          totalBalcony: 2,
          userTypesLabel: 'Môi giới',
          addressLabel: 'Q. Nam Từ Liêm, Tp. Hà Nội',
          priceLabel: {
            totalPrice: 'Thương lượng'
          },
          uri: '/ban-can-ho-chung-cu-nam-tu-liem-ha-noi-i1432/301881907'
        },
        {
          _id: '670752b3b180fee32263a564',
          code: 301881870,
          city: {
            code: '74',
            translation: [
              {
                prefix: 'Tỉnh',
                name: 'Bình Dương',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175de09',
            slug: 'binh-duong'
          },
          totalPrice: 1230000000,
          facade: null,
          userTypes: 0,
          source: 2,
          typeOfHouse: {
            name: 'Căn hộ chung cư',
            _id: '65eeb3cf01dfc72e1912edb2',
            value: 'can_ho_chung_cu',
            slug: 'can-ho-chung-cu'
          },
          media: [
            {
              name: '4.jpg',
              width: 1200,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/4-1728532982671-292562.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/4-1728532982671-292562.jpg',
              height: 749
            },
            {
              name: '41.jpg',
              width: 580,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/41-1728532987330-415399.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/41-1728532987330-415399.jpg',
              height: 350
            },
            {
              name: '42.jpg',
              width: 2560,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/42-1728532991683-625451.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/42-1728532991683-625451.jpg',
              height: 1920
            },
            {
              name: '44.jpg',
              width: 1500,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/44-1728532996633-813868.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/44-1728532996633-813868.jpg',
              height: 1000
            }
          ],
          subscription: {
            code: 'TINELECTRON',
            color: '#344054',
            _id: '66a9a0d3e122aabd2eb1539c',
            type: -1,
            title: 'Gói Electron'
          },
          isCrawl: false,
          isTourDisplayed: true,
          title:
            'Chỉ từ 1,23 tỷ sở hữu căn hộ Nhật TT AVIO nội thất cao cấp, Ricons xây dựng, thanh toán 1%/ tháng',
          createdAt: '2024-10-10T04:06:11.377Z',
          totalBathroom: null,
          contact: {
            fullName: 'Mandy Nguyen',
            phones: ['0902427628'],
            email: 'mandynguyen26888@gmail.com'
          },
          floorNumber: null,
          area: 56,
          thumbnail: {
            size: 114760,
            name: '4.jpg',
            width: 1200,
            mimeType: 'image/jpeg',
            uri: '/meey3d/images/2024/10/10/4-1728532718176-064245.jpg',
            url: 'https://io.meeymedia.com/meey3d/images/2024/10/10/4-1728532718176-064245.jpg',
            height: 749
          },
          publishedAt: '2024-10-10T04:15:26.639Z',
          tour: '670750ee86ca8562380d4bd4',
          totalBedroom: 2,
          totalPoint: 5.763736263736264,
          depth: null,
          isBoughtElectron: true,
          createdBy: {
            _id: '6201cc9a4779510018b7de5e',
            name: 'Mandy Nguyen',
            email: 'mandynguyen26888@gmail.com',
            phone: '0902427628',
            avatar: '',
            status: 1,
            phoneVerified: true,
            emailVerified: false
          },
          district: {
            code: '724',
            translation: [
              {
                prefix: 'Thị xã',
                name: 'Dĩ An',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501cbeb80a7245175e02d',
            slug: 'di-an'
          },
          totalFloor: null,
          category: {
            name: 'Mua bán',
            _id: '5deb722db4367252525c1d00',
            slugIncludeTypeOfHouse: 'ban',
            value: 'mua_ban',
            uri: '/mua-ban-nha-dat-a4',
            slug: 'mua-ban-nha-dat'
          },
          totalBalcony: null,
          userTypesLabel: 'Môi giới',
          addressLabel: 'Tx. Dĩ An, T. Bình Dương',
          priceLabel: {
            totalPrice: '1,23 tỷ',
            subTotalPrice: '21,96 tr/m²'
          },
          uri: '/ban-can-ho-chung-cu-di-an-binh-duong-i1422/301881870'
        },
        {
          _id: '67074bf5b180fee32263a524',
          code: 301881478,
          city: {
            code: 'thanh-pho-ha-noi',
            translation: [
              {
                prefix: 'Thành phố',
                name: 'Hà Nội',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175dddb',
            slug: 'ha-noi'
          },
          totalPrice: 5200000000,
          facade: null,
          userTypes: 0,
          source: 2,
          typeOfHouse: {
            name: 'Nhà riêng',
            _id: '65eeb3cf01dfc72e1912edb0',
            value: 'nha_rieng',
            slug: 'nha-rieng'
          },
          media: [
            {
              name: '8.jpg',
              width: 1536,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/8-1728531157496-792670.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/8-1728531157496-792670.jpg',
              height: 2048
            },
            {
              name: '81.jpg',
              width: 1536,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/81-1728531162448-873853.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/81-1728531162448-873853.jpg',
              height: 2048
            },
            {
              name: '82.jpg',
              width: 1536,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/82-1728531167230-804503.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/82-1728531167230-804503.jpg',
              height: 2048
            },
            {
              name: '83.jpg',
              width: 1536,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/83-1728531171896-509287.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/83-1728531171896-509287.jpg',
              height: 2048
            },
            {
              name: '84.jpg',
              width: 1536,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/10/84-1728531176846-977091.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/10/84-1728531176846-977091.jpg',
              height: 2048
            }
          ],
          subscription: {
            code: 'TINELECTRON',
            color: '#344054',
            _id: '66a9a0d3e122aabd2eb1539c',
            type: -1,
            title: 'Gói Electron'
          },
          isCrawl: false,
          isTourDisplayed: true,
          title:
            'Chính chủ bán gấp nhà 4 tầng trung tâm Đống Đa, chỉ 5,2 tỷ, sổ hồng sang tên ngay',
          createdAt: '2024-10-10T03:37:25.882Z',
          totalBathroom: 4,
          contact: {
            fullName: 'Ngoc Thanh',
            phones: ['0916278188'],
            email: 'diensinh288@gmail.com'
          },
          area: 25,
          thumbnail: {
            size: 5839775,
            name: '66ff99d5e181172ddfde3390_1728027111107.jpeg',
            width: 8192,
            mimeType: 'image/jpeg',
            uri: '/meey3d/cube-maps/2024/10/04/66ff99d5e181172ddfde33901728027111107-1728027111645-655893.jpeg',
            url: 'https://io.meeymedia.com/meey3d/cube-maps/2024/10/04/66ff99d5e181172ddfde33901728027111107-1728027111645-655893.jpeg',
            height: 4096
          },
          publishedAt: '2024-10-10T03:41:24.710Z',
          tour: '66ff99d5e181172ddfde3390',
          totalBedroom: 3,
          totalPoint: 6,
          depth: null,
          isBoughtElectron: true,
          createdBy: {
            _id: '66e152250f5974ce3afb1f23',
            name: 'Ngoc Thanh',
            email: 'diensinh288@gmail.com',
            phone: '0916278188',
            avatar:
              'https://lh3.googleusercontent.com/a/ACg8ocIRzxV6acda1ocFt471wXrdyNTS4kWCDm8-AOqt8CJ9PUyz_w=s96-c',
            status: 1,
            phoneVerified: true,
            emailVerified: true
          },
          district: {
            code: '006',
            translation: [
              {
                prefix: 'Quận',
                name: 'Đống Đa',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175de2c',
            slug: 'dong-da'
          },
          totalFloor: 4,
          category: {
            name: 'Mua bán',
            _id: '5deb722db4367252525c1d00',
            slugIncludeTypeOfHouse: 'ban',
            value: 'mua_ban',
            uri: '/mua-ban-nha-dat-a4',
            slug: 'mua-ban-nha-dat'
          },
          totalBalcony: null,
          userTypesLabel: 'Môi giới',
          addressLabel: 'Q. Đống Đa, Tp. Hà Nội',
          priceLabel: {
            totalPrice: '5,2 tỷ',
            subTotalPrice: '208 tr/m²'
          },
          uri: '/ban-nha-rieng-dong-da-ha-noi-i1222/301881478'
        },
        {
          _id: '66ab517fbdb59812bf0b8cee',
          code: 301185263,
          city: {
            code: 'thanh-pho-ha-noi',
            translation: [
              {
                prefix: 'Thành phố',
                name: 'Hà Nội',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175dddb',
            slug: 'ha-noi'
          },
          totalPrice: null,
          facade: null,
          userTypes: 0,
          source: 2,
          typeOfHouse: {
            name: 'Căn hộ chung cư',
            _id: '65eeb3cf01dfc72e1912edb2',
            value: 'can_ho_chung_cu',
            slug: 'can-ho-chung-cu'
          },
          media: [
            {
              name: 'Vintage-img-1.jpg',
              width: 2000,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/08/01/vintageimg1-1722503504849-486033.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/08/01/vintageimg1-1722503504849-486033.jpg',
              height: 1334
            },
            {
              name: 'Vintage-img-2.jpg',
              width: 2000,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/08/01/vintageimg2-1722503505462-876580.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/08/01/vintageimg2-1722503505462-876580.jpg',
              height: 1334
            },
            {
              name: 'Vintage-img-3.jpg',
              width: 2000,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/08/01/vintageimg3-1722503505734-009284.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/08/01/vintageimg3-1722503505734-009284.jpg',
              height: 1334
            },
            {
              name: 'Vintage-img-4.jpg',
              width: 2000,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/08/01/vintageimg4-1722503506029-222812.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/08/01/vintageimg4-1722503506029-222812.jpg',
              height: 1334
            },
            {
              name: 'Vintage-img-5.jpg',
              width: 2000,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/08/01/vintageimg5-1722503506256-526398.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/08/01/vintageimg5-1722503506256-526398.jpg',
              height: 1334
            }
          ],
          subscription: {
            code: 'TINELECTRON',
            color: '#344054',
            _id: '66a9a0d3e122aabd2eb1539c',
            type: -1,
            title: 'Gói Electron'
          },
          isCrawl: false,
          isTourDisplayed: true,
          title: 'Dự án Hà Nội Signature, quỹ căn 3 phòng ngủ Vintage',
          createdAt: '2024-08-01T09:12:31.930Z',
          totalBathroom: 2,
          contact: {
            fullName: 'Nguyễn Anh Tuấn',
            phones: ['0384150005'],
            email: 'tuannguyenanh.287@gmail.com'
          },
          floorNumber: null,
          area: 181,
          thumbnail: {
            size: 418058,
            name: 'Vintage-img-3.jpg',
            width: 2000,
            mimeType: 'image/jpeg',
            uri: '/meey3d/images/2024/07/30/vintageimg3-1722339208266-209918.jpg',
            url: 'https://io.meeymedia.com/meey3d/images/2024/07/30/vintageimg3-1722339208266-209918.jpg',
            height: 1334
          },
          publishedAt: '2024-10-08T02:13:57.382Z',
          tour: '66a8cd6e2245250c6c5ecbfa',
          totalBedroom: 3,
          totalPoint: 5.763736263736264,
          depth: null,
          isBoughtElectron: true,
          createdBy: {
            _id: '62257778a1d3060018b08edd',
            name: 'Nguyễn Anh Tuấn',
            email: 'tuannguyenanh.287@gmail.com',
            phone: '0384150005',
            avatar:
              'https://static.meeyid.com/avatar/DX-Mien-Bac_2021_D.1692954104624.png',
            status: 1,
            phoneVerified: true,
            emailVerified: true
          },
          district: {
            code: '005',
            translation: [
              {
                prefix: 'Quận',
                name: 'Cầu Giấy',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175de2b',
            slug: 'cau-giay'
          },
          totalFloor: null,
          category: {
            name: 'Mua bán',
            _id: '5deb722db4367252525c1d00',
            slugIncludeTypeOfHouse: 'ban',
            value: 'mua_ban',
            uri: '/mua-ban-nha-dat-a4',
            slug: 'mua-ban-nha-dat'
          },
          totalBalcony: null,
          userTypesLabel: 'Môi giới',
          addressLabel: 'Q. Cầu Giấy, Tp. Hà Nội',
          priceLabel: {
            totalPrice: 'Thương lượng'
          },
          uri: '/ban-can-ho-chung-cu-cau-giay-ha-noi-i1422/301185263'
        },
        {
          _id: '66a1fbe3322df17dea228d6e',
          code: 300325742,
          city: {
            code: 'thanh-pho-ha-noi',
            translation: [
              {
                prefix: 'Thành phố',
                name: 'Hà Nội',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175dddb',
            slug: 'ha-noi'
          },
          totalPrice: 7500000000,
          facade: null,
          userTypes: 0,
          source: 2,
          typeOfHouse: {
            name: 'Căn hộ chung cư',
            _id: '65eeb3cf01dfc72e1912edb2',
            value: 'can_ho_chung_cu',
            slug: 'can-ho-chung-cu'
          },
          media: [
            {
              name: '667761ef16c0b39eead1.jpg',
              width: 2560,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/667761ef16c0b39eead1-1721893203375-020664.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/667761ef16c0b39eead1-1721893203375-020664.jpg',
              height: 1727
            },
            {
              name: 'cfe78573f25c57020e4d.jpg',
              width: 2560,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/cfe78573f25c57020e4d-1721893203683-400704.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/cfe78573f25c57020e4d-1721893203683-400704.jpg',
              height: 1707
            },
            {
              name: '9713ef8498ab3df564ba.jpg',
              width: 2560,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/9713ef8498ab3df564ba-1721893203898-588389.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/9713ef8498ab3df564ba-1721893203898-588389.jpg',
              height: 1707
            },
            {
              name: '7c497ad10dfea8a0f1ef.jpg',
              width: 2560,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/7c497ad10dfea8a0f1ef-1721893204257-114361.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/7c497ad10dfea8a0f1ef-1721893204257-114361.jpg',
              height: 1740
            },
            {
              name: 'c04636de41f1e4afbde0.jpg',
              width: 2560,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/c04636de41f1e4afbde0-1721893204583-687803.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/c04636de41f1e4afbde0-1721893204583-687803.jpg',
              height: 1767
            },
            {
              name: '5ae32c745b5bfe05a74a.jpg',
              width: 2560,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/5ae32c745b5bfe05a74a-1721893204900-073687.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/5ae32c745b5bfe05a74a-1721893204900-073687.jpg',
              height: 1730
            },
            {
              name: '94ec667a1155b40bed44.jpg',
              width: 2560,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/94ec667a1155b40bed44-1721893205262-815813.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/94ec667a1155b40bed44-1721893205262-815813.jpg',
              height: 1707
            },
            {
              name: 'fb3d07ab7084d5da8c95.jpg',
              width: 2560,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/fb3d07ab7084d5da8c95-1721893205742-786066.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/fb3d07ab7084d5da8c95-1721893205742-786066.jpg',
              height: 1707
            },
            {
              name: '472f61b5169ab3c4ea8b.jpg',
              width: 2560,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/472f61b5169ab3c4ea8b-1721893206101-404923.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/472f61b5169ab3c4ea8b-1721893206101-404923.jpg',
              height: 1707
            },
            {
              name: 'e5d54a423d6d9833c17c.jpg',
              width: 2560,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/e5d54a423d6d9833c17c-1721893206506-251495.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/e5d54a423d6d9833c17c-1721893206506-251495.jpg',
              height: 1713
            }
          ],
          subscription: {
            code: 'TINELECTRON',
            color: '#344054',
            _id: '66a9a0d3e122aabd2eb1539c',
            type: -1,
            title: 'Gói Electron'
          },
          isCrawl: false,
          isTourDisplayed: true,
          title:
            'Chung cư Hoàng Thành Pearl mở bán quỹ hàng 3 phòng ngủ giá niêm yết chủ đầu tư',
          createdAt: '2024-07-25T07:16:51.368Z',
          totalBathroom: 2,
          contact: {
            fullName: 'Nguyễn Anh Tuấn',
            phones: ['0384150005'],
            email: 'tuannguyenanh.287@gmail.com'
          },
          floorNumber: null,
          area: 120,
          thumbnail: {
            size: 726243,
            name: 'z4546121171969_e9400c2cafd0aa728849697a8a2b7f40.jpg',
            width: 2560,
            mimeType: 'image/jpeg',
            uri: '/meey3d/images/2023/08/03/z4546121171969e9400c2cafd0aa728849697a8a2b7f40.1691071605309.jpg',
            url: 'https://io.meeymedia.com/meey3d/images/2023/08/03/z4546121171969e9400c2cafd0aa728849697a8a2b7f40.1691071605309.jpg',
            height: 1713
          },
          publishedAt: '2024-10-08T02:13:57.382Z',
          tour: '64ca4bb4556f6bde01ca46cd',
          totalBedroom: 3,
          totalPoint: 5.917582417582418,
          depth: null,
          isBoughtElectron: true,
          createdBy: {
            _id: '62257778a1d3060018b08edd',
            name: 'Nguyễn Anh Tuấn',
            email: 'tuannguyenanh.287@gmail.com',
            phone: '0384150005',
            avatar:
              'https://static.meeyid.com/avatar/DX-Mien-Bac_2021_D.1692954104624.png',
            status: 1,
            phoneVerified: true,
            emailVerified: true
          },
          district: {
            code: '019',
            translation: [
              {
                prefix: 'Quận',
                name: 'Nam Từ Liêm',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175de33',
            slug: 'nam-tu-liem'
          },
          totalFloor: null,
          category: {
            name: 'Mua bán',
            _id: '5deb722db4367252525c1d00',
            slugIncludeTypeOfHouse: 'ban',
            value: 'mua_ban',
            uri: '/mua-ban-nha-dat-a4',
            slug: 'mua-ban-nha-dat'
          },
          totalBalcony: null,
          userTypesLabel: 'Môi giới',
          addressLabel: 'Q. Nam Từ Liêm, Tp. Hà Nội',
          priceLabel: {
            totalPrice: '7,5 tỷ',
            subTotalPrice: '62,5 tr/m²'
          },
          uri: '/ban-can-ho-chung-cu-nam-tu-liem-ha-noi-i1432/300325742'
        },
        {
          _id: '66a1ccc95315dbaacd644f5c',
          code: 300323853,
          city: {
            code: 'thanh-pho-ha-noi',
            translation: [
              {
                prefix: 'Thành phố',
                name: 'Hà Nội',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175dddb',
            slug: 'ha-noi'
          },
          totalPrice: 29000000000,
          facade: 8,
          userTypes: 0,
          source: 2,
          typeOfHouse: {
            name: 'Biệt thự liền kề',
            _id: '65eeb3cf01dfc72e1912edb5',
            value: 'biet_thu_lien_ke',
            slug: 'biet-thu-lien-ke'
          },
          media: [
            {
              name: 'DX_02188.jpg',
              width: 5840,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/dx02188-1721879372683-331595.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/dx02188-1721879372683-331595.jpg',
              height: 3893
            },
            {
              name: 'DX_02196.jpg',
              width: 5951,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/dx02196-1721879373106-675056.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/dx02196-1721879373106-675056.jpg',
              height: 3348
            },
            {
              name: 'DX_02211.jpg',
              width: 5994,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/dx02211-1721879373765-052859.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/dx02211-1721879373765-052859.jpg',
              height: 3373
            },
            {
              name: 'DX_02212.jpg',
              width: 5998,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/dx02212-1721879374243-745107.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/dx02212-1721879374243-745107.jpg',
              height: 3375
            },
            {
              name: 'DX_02217.jpg',
              width: 6000,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/dx02217-1721879374725-354142.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/dx02217-1721879374725-354142.jpg',
              height: 3376
            },
            {
              name: 'DX_02257.jpg',
              width: 5959,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/dx02257-1721879375167-767936.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/dx02257-1721879375167-767936.jpg',
              height: 3353
            },
            {
              name: 'DX_02269.jpg',
              width: 6000,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/dx02269-1721879375559-402313.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/dx02269-1721879375559-402313.jpg',
              height: 3376
            },
            {
              name: 'DX_02270.jpg',
              width: 5911,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/dx02270-1721879375971-648953.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/dx02270-1721879375971-648953.jpg',
              height: 3326
            },
            {
              name: 'DX_02291.jpg',
              width: 5852,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/dx02291-1721879376406-104854.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/dx02291-1721879376406-104854.jpg',
              height: 3293
            },
            {
              name: 'DX_02293.jpg',
              width: 3231,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/dx02293-1721879377025-133092.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/dx02293-1721879377025-133092.jpg',
              height: 5742
            },
            {
              name: 'DX_02309.jpg',
              width: 5980,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/dx02309-1721879377359-781779.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/dx02309-1721879377359-781779.jpg',
              height: 3365
            },
            {
              name: 'DX_02310.jpg',
              width: 5867,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/dx02310-1721879378009-280260.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/dx02310-1721879378009-280260.jpg',
              height: 3301
            },
            {
              name: 'DX_02317.jpg',
              width: 5952,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/dx02317-1721879378594-987724.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/dx02317-1721879378594-987724.jpg',
              height: 3968
            },
            {
              name: 'DX_02320.jpg',
              width: 5959,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/dx02320-1721879379056-026206.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/dx02320-1721879379056-026206.jpg',
              height: 3973
            },
            {
              name: 'DX_02324.jpg',
              width: 6000,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/dx02324-1721879379560-395667.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/dx02324-1721879379560-395667.jpg',
              height: 3376
            },
            {
              name: 'DX_02326.jpg',
              width: 5910,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/dx02326-1721879380190-284771.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/dx02326-1721879380190-284771.jpg',
              height: 3325
            },
            {
              name: 'DX_02329.jpg',
              width: 5932,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/dx02329-1721879380622-574813.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/dx02329-1721879380622-574813.jpg',
              height: 3955
            },
            {
              name: 'DX_02331.jpg',
              width: 5909,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/dx02331-1721879381080-359374.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/dx02331-1721879381080-359374.jpg',
              height: 3939
            },
            {
              name: 'DX_02344.jpg',
              width: 5990,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/dx02344-1721879381495-473648.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/dx02344-1721879381495-473648.jpg',
              height: 3993
            },
            {
              name: 'DX_02355.jpg',
              width: 3376,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/dx02355-1721879382216-875279.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/dx02355-1721879382216-875279.jpg',
              height: 6000
            },
            {
              name: 'DX_02356.jpg',
              width: 5850,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/dx02356-1721879383146-171175.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/dx02356-1721879383146-171175.jpg',
              height: 3292
            },
            {
              name: 'DX_02362.jpg',
              width: 6000,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/dx02362-1721879383549-647426.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/dx02362-1721879383549-647426.jpg',
              height: 3376
            },
            {
              name: 'DX_02365.jpg',
              width: 3376,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/dx02365-1721879384072-816319.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/dx02365-1721879384072-816319.jpg',
              height: 6000
            },
            {
              name: 'DX_02368.jpg',
              width: 5886,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/dx02368-1721879384717-833724.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/dx02368-1721879384717-833724.jpg',
              height: 3312
            },
            {
              name: 'DX_02370.jpg',
              width: 6000,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/dx02370-1721879385188-783148.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/dx02370-1721879385188-783148.jpg',
              height: 3376
            },
            {
              name: 'DX_02372.jpg',
              width: 6000,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/25/dx02372-1721879385668-487231.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/25/dx02372-1721879385668-487231.jpg',
              height: 3376
            }
          ],
          subscription: {
            code: 'TINELECTRON',
            color: '#344054',
            _id: '66a9a0d3e122aabd2eb1539c',
            type: -1,
            title: 'Gói Electron'
          },
          isCrawl: false,
          isTourDisplayed: true,
          title: 'Quỹ căn biệt thự liền kề An Lạc Green Symphony',
          createdAt: '2024-07-25T03:55:53.620Z',
          totalBathroom: 4,
          contact: {
            fullName: 'Nguyễn Anh Tuấn',
            phones: ['0384150005'],
            email: 'tuannguyenanh.287@gmail.com'
          },
          area: 162,
          thumbnail: {
            size: 1235743,
            name: 'DX_02211.jpg',
            width: 5994,
            mimeType: 'image/jpeg',
            uri: '/meey3d/images/2024/07/25/dx02211-1721879856893-500610.jpg',
            url: 'https://io.meeymedia.com/meey3d/images/2024/07/25/dx02211-1721879856893-500610.jpg',
            height: 3373
          },
          publishedAt: '2024-10-08T02:13:57.382Z',
          tour: '65769295a3524e4ac663c915',
          totalBedroom: 4,
          totalPoint: 6.153846153846153,
          depth: 20,
          isBoughtElectron: true,
          createdBy: {
            _id: '62257778a1d3060018b08edd',
            name: 'Nguyễn Anh Tuấn',
            email: 'tuannguyenanh.287@gmail.com',
            phone: '0384150005',
            avatar:
              'https://static.meeyid.com/avatar/DX-Mien-Bac_2021_D.1692954104624.png',
            status: 1,
            phoneVerified: true,
            emailVerified: true
          },
          district: {
            code: '274',
            translation: [
              {
                prefix: 'Huyện',
                name: 'Hoài Đức',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175de20',
            slug: 'hoai-duc'
          },
          totalFloor: null,
          category: {
            name: 'Mua bán',
            _id: '5deb722db4367252525c1d00',
            slugIncludeTypeOfHouse: 'ban',
            value: 'mua_ban',
            uri: '/mua-ban-nha-dat-a4',
            slug: 'mua-ban-nha-dat'
          },
          totalBalcony: null,
          userTypesLabel: 'Môi giới',
          addressLabel: 'H. Hoài Đức, Tp. Hà Nội',
          priceLabel: {
            totalPrice: '29 tỷ',
            subTotalPrice: '179,01 tr/m²'
          },
          uri: '/ban-biet-thu-lien-ke-hoai-duc-ha-noi-i1422/300323853'
        },
        {
          _id: '66ffb8d6b180fee32263973e',
          code: 301806987,
          city: {
            code: 'thanh-pho-ha-noi',
            translation: [
              {
                prefix: 'Thành phố',
                name: 'Hà Nội',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175dddb',
            slug: 'ha-noi'
          },
          totalPrice: 4600000000,
          facade: 6,
          userTypes: 0,
          source: 2,
          typeOfHouse: {
            name: 'Căn hộ chung cư',
            _id: '65eeb3cf01dfc72e1912edb2',
            value: 'can_ho_chung_cu',
            slug: 'can-ho-chung-cu'
          },
          media: [
            {
              name: 'canh quan 7.jpg',
              width: 1276,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/04/canh-quan-7-1728034864996-362139.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/04/canh-quan-7-1728034864996-362139.jpg',
              height: 956
            },
            {
              name: 'canh quan 6.jpg',
              width: 1600,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/04/canh-quan-6-1728034865194-542991.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/04/canh-quan-6-1728034865194-542991.jpg',
              height: 1066
            },
            {
              name: 'canh quan 5.jpg',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/04/canh-quan-5-1728034865374-455385.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/04/canh-quan-5-1728034865374-455385.jpg',
              height: 722
            },
            {
              name: 'canh quan 4.jpg',
              width: 1600,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/04/canh-quan-4-1728034865610-871526.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/04/canh-quan-4-1728034865610-871526.jpg',
              height: 1034
            },
            {
              name: 'canh quan 3.jpg',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/04/canh-quan-3-1728034865809-807287.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/04/canh-quan-3-1728034865809-807287.jpg',
              height: 958
            },
            {
              name: 'canh quan 2.jpg',
              width: 1600,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/04/canh-quan-2-1728034866086-636895.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/04/canh-quan-2-1728034866086-636895.jpg',
              height: 1034
            },
            {
              name: 'canh quan.jpg',
              width: 1600,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/04/canh-quan-1728034866432-105501.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/04/canh-quan-1728034866432-105501.jpg',
              height: 1067
            },
            {
              name: 'Khai sơn 2d 4.jpg',
              width: 1300,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/04/khai-son-2d-4-1728034866614-857140.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/04/khai-son-2d-4-1728034866614-857140.jpg',
              height: 956
            },
            {
              name: 'Khai sơn 2d 3.jpg',
              width: 1024,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/04/khai-son-2d-3-1728034866814-529900.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/04/khai-son-2d-3-1728034866814-529900.jpg',
              height: 683
            },
            {
              name: 'Khai sơn 2d 2.jpg',
              width: 1024,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/04/khai-son-2d-2-1728034866969-326864.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/04/khai-son-2d-2-1728034866969-326864.jpg',
              height: 683
            },
            {
              name: 'Khai sơn 2d.jpg',
              width: 800,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/04/khai-son-2d-1728034867132-967931.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/04/khai-son-2d-1728034867132-967931.jpg',
              height: 533
            },
            {
              name: 'Khai sơn 1.jpg',
              width: 1075,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/04/khai-son-1-1728034867272-602898.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/04/khai-son-1-1728034867272-602898.jpg',
              height: 717
            }
          ],
          subscription: {
            code: 'TINELECTRON',
            color: '#344054',
            _id: '66a9a0d3e122aabd2eb1539c',
            type: -1,
            title: 'Gói Electron'
          },
          isCrawl: false,
          isTourDisplayed: true,
          title:
            'Quỹ căn giá tốt nhất dự án Khai Sơn City - chiết khấu cao trực tiếp chủ đầu tư - hỗ trợ lãi suất 0%',
          createdAt: '2024-10-04T09:43:50.796Z',
          totalBathroom: 2,
          contact: {
            fullName: 'Nguyễn Tuấn Hải',
            phones: ['0327988688'],
            email: 'haint@tungbachland.vn'
          },
          floorNumber: null,
          area: 90,
          thumbnail: {
            size: 7552617,
            name: 'IMG_20230513_123129_00_764.jpg',
            width: 6080,
            mimeType: 'image/jpeg',
            uri: '/meey3d/images/2023/08/07/img2023051312312900764.1691398703262.jpg',
            url: 'https://io.meeymedia.com/meey3d/images/2023/08/07/img2023051312312900764.1691398703262.jpg',
            height: 3040
          },
          publishedAt: '2024-10-04T09:54:41.118Z',
          tour: '646070bfad109b31f5b2b9b3',
          totalBedroom: 2,
          totalPoint: 6.346153846153847,
          depth: 15,
          isBoughtElectron: true,
          createdBy: {
            _id: '616d2317b283f80019bd5828',
            name: 'Nguyễn Tuấn Hải',
            email: 'haint@tungbachland.vn',
            phone: '0327988688',
            avatar:
              'https://static.meeyid.com/avatar/TB%20land.1696408212760.jpg',
            status: 1,
            phoneVerified: true,
            emailVerified: false
          },
          district: {
            code: '004',
            translation: [
              {
                prefix: 'Quận',
                name: 'Long Biên',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175de2a',
            slug: 'long-bien'
          },
          totalFloor: null,
          category: {
            name: 'Mua bán',
            _id: '5deb722db4367252525c1d00',
            slugIncludeTypeOfHouse: 'ban',
            value: 'mua_ban',
            uri: '/mua-ban-nha-dat-a4',
            slug: 'mua-ban-nha-dat'
          },
          totalBalcony: null,
          userTypesLabel: 'Môi giới',
          addressLabel: 'Q. Long Biên, Tp. Hà Nội',
          priceLabel: {
            totalPrice: '4,6 tỷ',
            subTotalPrice: '51,11 tr/m²'
          },
          uri: '/ban-can-ho-chung-cu-long-bien-ha-noi-i1422/301806987'
        },
        {
          _id: '66a5ace1322df17dea229644',
          code: 301143968,
          city: {
            code: 'thanh-pho-ha-noi',
            translation: [
              {
                prefix: 'Thành phố',
                name: 'Hà Nội',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175dddb',
            slug: 'ha-noi'
          },
          totalPrice: 4500000000,
          facade: null,
          userTypes: 1,
          source: 2,
          typeOfHouse: {
            name: 'Căn hộ chung cư',
            _id: '65eeb3cf01dfc72e1912edb2',
            value: 'can_ho_chung_cu',
            slug: 'can-ho-chung-cu'
          },
          media: [
            {
              name: 'Du-an-Lumi-Hanoi-duoc-phat-trien-boi-chu-dau-tu-CapitaLand-mang-den-khong-gian-song-dang-cap-cho-cu-dan.jpg',
              width: 1960,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/28/duanlumihanoiduocphattrienboichudautucapitalandmangdenkhonggiansongdangcapchocudan-1722133571679-550705.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/28/duanlumihanoiduocphattrienboichudautucapitalandmangdenkhonggiansongdangcapchocudan-1722133571679-550705.jpg',
              height: 938
            },
            {
              name: '437936323_746733657543974_495640284012659979_n.jpg',
              width: 1439,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/28/437936323746733657543974495640284012659979n-1722133449037-708038.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/28/437936323746733657543974495640284012659979n-1722133449037-708038.jpg',
              height: 1439
            },
            {
              name: '449947848_792543206296352_2585112031417609388_n.jpg',
              width: 1878,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/28/4499478487925432062963522585112031417609388n-1722133450745-379321.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/28/4499478487925432062963522585112031417609388n-1722133450745-379321.jpg',
              height: 1878
            },
            {
              name: '434641482_736125918604748_3190299930277858803_n.jpg',
              width: 1439,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/28/4346414827361259186047483190299930277858803n-1722133448451-143032.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/28/4346414827361259186047483190299930277858803n-1722133448451-143032.jpg',
              height: 1439
            },
            {
              name: '434657894_736126028604737_1642666057165365423_n.jpg',
              width: 1439,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/28/4346578947361260286047371642666057165365423n-1722133448756-539685.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/28/4346578947361260286047371642666057165365423n-1722133448756-539685.jpg',
              height: 1439
            },
            {
              name: '437940566_746733674210639_4404731849967482728_n.jpg',
              width: 1439,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/28/4379405667467336742106394404731849967482728n-1722133449379-466731.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/28/4379405667467336742106394404731849967482728n-1722133449379-466731.jpg',
              height: 1439
            },
            {
              name: '438205634_746733607543979_2497575500339249664_n.jpg',
              width: 1439,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/28/4382056347467336075439792497575500339249664n-1722133449648-343151.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/28/4382056347467336075439792497575500339249664n-1722133449648-343151.jpg',
              height: 1439
            },
            {
              name: '438304314_746733690877304_2625817824990080226_n.jpg',
              width: 1439,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/28/4383043147467336908773042625817824990080226n-1722133450076-634948.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/28/4383043147467336908773042625817824990080226n-1722133450076-634948.jpg',
              height: 1439
            },
            {
              name: '449932608_792541992963140_6388271721029621957_n.jpg',
              width: 960,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/28/4499326087925419929631406388271721029621957n-1722133450287-887844.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/28/4499326087925419929631406388271721029621957n-1722133450287-887844.jpg',
              height: 960
            },
            {
              name: '450212106_792543156296357_8545145858230460220_n.jpg',
              width: 1878,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/28/4502121067925431562963578545145858230460220n-1722133451023-546205.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/28/4502121067925431562963578545145858230460220n-1722133451023-546205.jpg',
              height: 1878
            },
            {
              name: '450250903_796072179276788_8979601663094695234_n.jpg',
              width: 2048,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/28/4502509037960721792767888979601663094695234n-1722133451361-946960.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/28/4502509037960721792767888979601663094695234n-1722133451361-946960.jpg',
              height: 2047
            },
            {
              name: '450301108_792542269629779_3074613780008135926_n.jpg',
              width: 1878,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/28/4503011087925422696297793074613780008135926n-1722133451754-402617.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/28/4503011087925422696297793074613780008135926n-1722133451754-402617.jpg',
              height: 1878
            },
            {
              name: '450559069_796072319276774_4385569334012251379_n.jpg',
              width: 2048,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/28/4505590697960723192767744385569334012251379n-1722133452231-132033.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/28/4505590697960723192767744385569334012251379n-1722133452231-132033.jpg',
              height: 2047
            },
            {
              name: '450585357_796072345943438_2585326977709852175_n.jpg',
              width: 2048,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/28/4505853577960723459434382585326977709852175n-1722133452453-006939.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/28/4505853577960723459434382585326977709852175n-1722133452453-006939.jpg',
              height: 2047
            },
            {
              name: '450596101_796072272610112_2007949963744568217_n.jpg',
              width: 2048,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/28/4505961017960722726101122007949963744568217n-1722133453001-276917.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/28/4505961017960722726101122007949963744568217n-1722133453001-276917.jpg',
              height: 2047
            },
            {
              name: '450645477_796072125943460_5115535905219519919_n.jpg',
              width: 2048,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/28/4506454777960721259434605115535905219519919n-1722133453250-647141.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/28/4506454777960721259434605115535905219519919n-1722133453250-647141.jpg',
              height: 2048
            },
            {
              name: '450681692_796070819276924_1155527341075080986_n.jpg',
              width: 2048,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/28/4506816927960708192769241155527341075080986n-1722133453653-276480.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/28/4506816927960708192769241155527341075080986n-1722133453653-276480.jpg',
              height: 2048
            },
            {
              name: '450749976_796072325943440_9051954822055906077_n.jpg',
              width: 2048,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/28/4507499767960723259434409051954822055906077n-1722133454087-351065.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/28/4507499767960723259434409051954822055906077n-1722133454087-351065.jpg',
              height: 2047
            },
            {
              name: '450809453_796072155943457_3559361905155886691_n.jpg',
              width: 2048,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/28/4508094537960721559434573559361905155886691n-1722133454315-113756.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/28/4508094537960721559434573559361905155886691n-1722133454315-113756.jpg',
              height: 2047
            },
            {
              name: '452862495_803197195230953_529829092849673246_n.jpg',
              width: 2048,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/28/452862495803197195230953529829092849673246n-1722133454628-215106.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/28/452862495803197195230953529829092849673246n-1722133454628-215106.jpg',
              height: 1153
            },
            {
              name: 'photo_2024-07-08_10-28-27.jpg',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/28/photo20240708102827-1722133454910-284097.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/28/photo20240708102827-1722133454910-284097.jpg',
              height: 960
            }
          ],
          subscription: {
            code: 'TINELECTRON',
            color: '#344054',
            _id: '66a9a0d3e122aabd2eb1539c',
            type: -1,
            title: 'Gói Electron'
          },
          isCrawl: false,
          isTourDisplayed: false,
          title:
            'Bán căn hộ cao cấp Lumi Hà Nội - Cam kết lấy căn cho khách, rẻ nhất thị trường',
          createdAt: '2024-07-28T02:28:49.349Z',
          totalBathroom: 2,
          contact: {
            fullName: 'Nguyễn Cảnh Lâm',
            phones: ['0912885584'],
            email: 'canhlam91@gmail.com'
          },
          floorNumber: null,
          area: 69,
          thumbnail: {
            size: 474273,
            name: 'Du-an-Lumi-Hanoi-duoc-phat-trien-boi-chu-dau-tu-CapitaLand-mang-den-khong-gian-song-dang-cap-cho-cu-dan.jpg',
            width: 1960,
            mimeType: 'image/jpeg',
            uri: '/meeyland/images/2024/07/28/duanlumihanoiduocphattrienboichudautucapitalandmangdenkhonggiansongdangcapchocudan-1722133571679-550705.jpg',
            url: 'https://io.meeymedia.com/meeyland/images/2024/07/28/duanlumihanoiduocphattrienboichudautucapitalandmangdenkhonggiansongdangcapchocudan-1722133571679-550705.jpg',
            height: 938
          },
          publishedAt: '2024-07-31T15:00:00.000Z',
          tour: null,
          totalBedroom: 2,
          totalPoint: 5.917582417582418,
          depth: null,
          isBoughtElectron: true,
          createdBy: {
            _id: '656990b39f4e39001c08459d',
            name: 'Nguyễn Cảnh Lâm',
            email: 'canhlam91@gmail.com',
            phone: '0912885584',
            avatar: null,
            status: 1,
            phoneVerified: true,
            emailVerified: false
          },
          district: {
            code: '019',
            translation: [
              {
                prefix: 'Quận',
                name: 'Nam Từ Liêm',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175de33',
            slug: 'nam-tu-liem'
          },
          totalFloor: null,
          category: {
            name: 'Mua bán',
            _id: '5deb722db4367252525c1d00',
            slugIncludeTypeOfHouse: 'ban',
            value: 'mua_ban',
            uri: '/mua-ban-nha-dat-a4',
            slug: 'mua-ban-nha-dat'
          },
          totalBalcony: null,
          userTypesLabel: 'Chính chủ',
          addressLabel: 'Q. Nam Từ Liêm, Tp. Hà Nội',
          priceLabel: {
            totalPrice: '4,5 tỷ',
            subTotalPrice: '65,22 tr/m²'
          },
          uri: '/ban-can-ho-chung-cu-nam-tu-liem-ha-noi-i1432/301143968'
        },
        {
          _id: '6710cfe7383c971ab0c2aae8',
          code: 301962642,
          city: {
            code: '30',
            translation: [
              {
                prefix: 'Tỉnh',
                name: 'Hải Dương',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175dded',
            slug: 'hai-duong'
          },
          totalPrice: 35000000000,
          facade: 134,
          userTypes: 1,
          source: 2,
          typeOfHouse: {
            name: 'Đất',
            _id: '65eeb3cf01dfc72e1912edb3',
            value: 'dat',
            slug: 'dat'
          },
          media: [
            {
              name: 'z5939455001024_784df7b2ff4394cce9d5e1ca39e61be3.jpg',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/17/z5939455001024784df7b2ff4394cce9d5e1ca39e61be3-1729155008892-131236.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/17/z5939455001024784df7b2ff4394cce9d5e1ca39e61be3-1729155008892-131236.jpg',
              height: 960
            },
            {
              name: 'z5939455012163_40bc44c77443b622c0543a6037aea8ea.jpg',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/17/z593945501216340bc44c77443b622c0543a6037aea8ea-1729155009105-889438.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/17/z593945501216340bc44c77443b622c0543a6037aea8ea-1729155009105-889438.jpg',
              height: 960
            },
            {
              name: 'z5939455016572_566b5eb8cc050602de1c14e6a38cb8a0.jpg',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/17/z5939455016572566b5eb8cc050602de1c14e6a38cb8a0-1729155009341-341317.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/17/z5939455016572566b5eb8cc050602de1c14e6a38cb8a0-1729155009341-341317.jpg',
              height: 960
            }
          ],
          subscription: {
            code: 'TINVIP1',
            color: '#D92D20',
            _id: '65f170fedb8f404dc8a9036d',
            type: 1,
            title: 'Gói Ruby'
          },
          isCrawl: false,
          isTourDisplayed: false,
          title: 'Bán đất thương mại dịch vụ tại Nam Sách, Hải Dương',
          createdAt: '2024-10-17T08:50:47.040Z',
          contact: {
            fullName: 'Nguyễn Thị Hương',
            phones: ['0936205789'],
            email: 'Huongdothihd88@gmail.com'
          },
          area: 21340,
          thumbnail: {
            size: 152967,
            name: 'z5939455001024_784df7b2ff4394cce9d5e1ca39e61be3.jpg',
            width: 1280,
            mimeType: 'image/jpeg',
            uri: '/meeyland/images/2024/10/17/z5939455001024784df7b2ff4394cce9d5e1ca39e61be3-1729155008892-131236.jpg',
            url: 'https://io.meeymedia.com/meeyland/images/2024/10/17/z5939455001024784df7b2ff4394cce9d5e1ca39e61be3-1729155008892-131236.jpg',
            height: 960
          },
          publishedAt: '2024-10-17T08:54:31.018Z',
          tour: null,
          totalPoint: 7.1923076923076925,
          depth: 159.25,
          isBoughtElectron: false,
          createdBy: {
            _id: '61bdf6fbb414f800187a55e6',
            name: 'Nguyễn Thị Hương',
            email: 'Huongdothihd88@gmail.com',
            phone: '0936205789',
            avatar: null,
            status: 1,
            phoneVerified: true,
            emailVerified: false
          },
          district: {
            code: '291',
            translation: [
              {
                prefix: 'Huyện',
                name: 'Nam Sách',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175dee4',
            slug: 'nam-sach'
          },
          category: {
            name: 'Mua bán',
            _id: '5deb722db4367252525c1d00',
            slugIncludeTypeOfHouse: 'ban',
            value: 'mua_ban',
            uri: '/mua-ban-nha-dat-a4',
            slug: 'mua-ban-nha-dat'
          },
          userTypesLabel: 'Chính chủ',
          addressLabel: 'H. Nam Sách, T. Hải Dương',
          priceLabel: {
            totalPrice: '35 tỷ',
            subTotalPrice: '1,64 tr/m²'
          },
          uri: '/ban-dat-nam-sach-hai-duong-i1122/301962642'
        },
        {
          _id: '66f77883b180fee322638628',
          code: 301731939,
          city: {
            code: 'thanh-pho-ha-noi',
            translation: [
              {
                prefix: 'Thành phố',
                name: 'Hà Nội',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175dddb',
            slug: 'ha-noi'
          },
          totalPrice: 22000000000,
          facade: 10,
          userTypes: 1,
          source: 4,
          typeOfHouse: {
            name: 'Đất',
            _id: '65eeb3cf01dfc72e1912edb3',
            value: 'dat',
            slug: 'dat'
          },
          media: [
            {
              name: '7144267B-45A8-4172-9DFB-82694CA24970_L0_001_1727493707.400188_o_FullSizeRender.jpg',
              width: 1576,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/09/28/7144267b45a841729dfb82694ca24970l00011727493707400188ofullsizerender-1727493763709-096715.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/09/28/7144267b45a841729dfb82694ca24970l00011727493707400188ofullsizerender-1727493763709-096715.jpg',
              height: 2100
            },
            {
              name: '12E864D8-45C5-4521-8E62-6FFAA769812E_L0_001_1727493733.360926_o_FullSizeRender.jpg',
              width: 1576,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/09/28/12e864d845c545218e626ffaa769812el00011727493733360926ofullsizerender-1727493763641-126813.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/09/28/12e864d845c545218e626ffaa769812el00011727493733360926ofullsizerender-1727493763641-126813.jpg',
              height: 2100
            },
            {
              name: '1862800859.jpg',
              width: 4284,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/09/28/1862800859-1727493765289-632568.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/09/28/1862800859-1727493765289-632568.jpg',
              height: 5712
            },
            {
              name: '1863166353.jpg',
              width: 4284,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/09/28/1863166353-1727493765090-539116.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/09/28/1863166353-1727493765090-539116.jpg',
              height: 5712
            },
            {
              duration: 34.179773,
              thumbnail: {
                s3Key: 'images/2024/09/28/screenshots.1727493764633.jpg',
                size: 29032,
                name: 'screenshots.jpg',
                width: 368,
                mimeType: 'image/jpeg',
                uri: '/meeyland/images/2024/09/28/screenshots.1727493764633.jpg',
                url: 'https://io.meeymedia.com/meeyland/images/2024/09/28/screenshots.1727493764633.jpg',
                height: 640
              },
              urlVod:
                'https://d.meeymedia.com/meeyland/videos/,360p,480p,720p,1080p,/2024/09/28/5aee7ca4a15444e88f56c68879f65e70l00011722587972592834oatt3qsuz1qiqdf2qwabfruuakvfdpemffpny0bmv7pcixq-1727493763970-053327/master.m3u8',
              name: '5AEE7CA4-A154-44E8-8F56-C68879F65E70_L0_001_1722587972.592834_o_att.3QsuZ1qiQDF2qwABFRUuAKvFdpEmFfPny0Bmv7PcixQ.mp4',
              description: null,
              mediaType: 2,
              mimeType: 'application/octet-stream',
              uri: '/meeyland/videos/2024/09/28/5aee7ca4a15444e88f56c68879f65e70l00011722587972592834oatt3qsuz1qiqdf2qwabfruuakvfdpemffpny0bmv7pcixq-1727493763970-053327.mp4',
              url: 'https://v.meeymedia.com/meeyland/videos/2024/09/28/5aee7ca4a15444e88f56c68879f65e70l00011722587972592834oatt3qsuz1qiqdf2qwabfruuakvfdpemffpny0bmv7pcixq-1727493763970-053327.mp4?hashsign=TbBefoo_6dyEOtykBLmSzA&e=1759030273'
            }
          ],
          subscription: {
            code: 'TINVIP1',
            color: '#D92D20',
            _id: '65f170fedb8f404dc8a9036d',
            type: 1,
            title: 'Gói Ruby'
          },
          isCrawl: false,
          isTourDisplayed: false,
          title:
            'Mặt đường Quốc lộ 32, thuộc làng nghề may mặc xã Tam Hiệp, huyện Phúc Thọ',
          createdAt: '2024-09-28T03:31:15.499Z',
          contact: {
            fullName: 'Trần Mạnh Tuấn',
            phones: ['0976126789'],
            email: 'bossvip11268@gmail.com'
          },
          area: 260,
          thumbnail: {
            size: 981936,
            name: '7144267B-45A8-4172-9DFB-82694CA24970_L0_001_1727493707.400188_o_FullSizeRender.jpg',
            width: 1576,
            mimeType: 'image/jpeg',
            uri: '/meeyland/images/2024/09/28/7144267b45a841729dfb82694ca24970l00011727493707400188ofullsizerender-1727493763709-096715.jpg',
            url: 'https://io.meeymedia.com/meeyland/images/2024/09/28/7144267b45a841729dfb82694ca24970l00011727493707400188ofullsizerender-1727493763709-096715.jpg',
            height: 2100
          },
          publishedAt: '2024-10-16T19:56:07.417Z',
          tour: null,
          totalPoint: 8.692307692307693,
          depth: 26,
          isBoughtElectron: false,
          createdBy: {
            _id: '66f77381f7ed3ce3e2b393c9',
            name: 'Trần Mạnh Tuấn',
            email: 'bossvip11268@gmail.com',
            phone: '0976126789',
            avatar: null,
            status: 1,
            phoneVerified: true,
            emailVerified: false
          },
          district: {
            code: '272',
            translation: [
              {
                prefix: 'Huyện',
                name: 'Phúc Thọ',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175de1e',
            slug: 'phuc-tho'
          },
          category: {
            name: 'Mua bán',
            _id: '5deb722db4367252525c1d00',
            slugIncludeTypeOfHouse: 'ban',
            value: 'mua_ban',
            uri: '/mua-ban-nha-dat-a4',
            slug: 'mua-ban-nha-dat'
          },
          userTypesLabel: 'Chính chủ',
          addressLabel: 'H. Phúc Thọ, Tp. Hà Nội',
          priceLabel: {
            totalPrice: '22 tỷ',
            subTotalPrice: '84,62 tr/m²'
          },
          uri: '/ban-dat-phuc-tho-ha-noi-i1122/301731939'
        },
        {
          _id: '670cb250b180fee32263aef8',
          code: 301924504,
          city: {
            code: '70',
            translation: [
              {
                prefix: 'Tỉnh',
                name: 'Bình Phước',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175de07',
            slug: 'binh-phuoc'
          },
          totalPrice: 500000000,
          facade: null,
          userTypes: 0,
          source: 4,
          typeOfHouse: {
            name: 'Đất',
            _id: '65eeb3cf01dfc72e1912edb3',
            value: 'dat',
            slug: 'dat'
          },
          media: [
            {
              name: '69FBD216-89AA-4C0B-9191-5EB3F5F58C54_L0_001_1728884362.323665_o_IMG_0992.JPG',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/14/69fbd21689aa4c0b91915eb3f5f58c54l00011728884362323665oimg0992-1728884648064-109557.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/14/69fbd21689aa4c0b91915eb3f5f58c54l00011728884362323665oimg0992-1728884648064-109557.jpg',
              height: 959
            },
            {
              name: '2BA3F38D-1A7B-4552-BFE7-12609C4EC85B_L0_001_1728884367.271845_o_IMG_0993.JPG',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/14/2ba3f38d1a7b4552bfe712609c4ec85bl00011728884367271845oimg0993-1728884648065-397531.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/14/2ba3f38d1a7b4552bfe712609c4ec85bl00011728884367271845oimg0993-1728884648065-397531.jpg',
              height: 578
            },
            {
              name: '7B0D4A12-041B-4406-87E9-000D965C9BA5_L0_001_1728884599.467639_o_IMG_0996.JPG',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/14/7b0d4a12041b440687e9000d965c9ba5l00011728884599467639oimg0996-1728884648067-429801.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/14/7b0d4a12041b440687e9000d965c9ba5l00011728884599467639oimg0996-1728884648067-429801.jpg',
              height: 578
            },
            {
              name: 'DF46A4A8-C28F-43C1-8D9D-6CE2325AFA8A_L0_001_1728884374.816368_o_IMG_0994.JPG',
              width: 1176,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/14/df46a4a8c28f43c18d9d6ce2325afa8al00011728884374816368oimg0994-1728884648067-240120.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/14/df46a4a8c28f43c18d9d6ce2325afa8al00011728884374816368oimg0994-1728884648067-240120.jpg',
              height: 2560
            },
            {
              name: '2A272130-DCA0-43A0-B634-74DBE40E3EA9_L0_001_1728884383.944105_o_IMG_0995.JPG',
              width: 1176,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/14/2a272130dca043a0b63474dbe40e3ea9l00011728884383944105oimg0995-1728884648072-216040.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/14/2a272130dca043a0b63474dbe40e3ea9l00011728884383944105oimg0995-1728884648072-216040.jpg',
              height: 2560
            }
          ],
          subscription: {
            code: 'TINVIP2',
            color: '#344054',
            _id: '65f179e6942da87c0503a63c',
            type: 2,
            title: 'Gói Vàng'
          },
          isCrawl: false,
          isTourDisplayed: false,
          title: 'Chủ cần tiền nên thanh lý lỗ lô đất, diện tích lô 199,7m2',
          createdAt: '2024-10-14T05:55:28.298Z',
          contact: {
            fullName: 'hoàng văn hải',
            phones: ['0971067596', '0327697189'],
            email: 'hoangvanhai141189@gmail.com'
          },
          area: 199.7,
          thumbnail: {
            size: 442316,
            name: '69FBD216-89AA-4C0B-9191-5EB3F5F58C54_L0_001_1728884362.323665_o_IMG_0992.JPG',
            width: 1280,
            mimeType: 'image/jpeg',
            uri: '/meeyland/images/2024/10/14/69fbd21689aa4c0b91915eb3f5f58c54l00011728884362323665oimg0992-1728884648064-109557.jpg',
            url: 'https://io.meeymedia.com/meeyland/images/2024/10/14/69fbd21689aa4c0b91915eb3f5f58c54l00011728884362323665oimg0992-1728884648064-109557.jpg',
            height: 959
          },
          publishedAt: '2024-10-21T17:00:09.075Z',
          tour: null,
          totalPoint: 5.538461538461538,
          depth: null,
          isBoughtElectron: false,
          createdBy: {
            _id: '6405f11722bf23001ed4b8d5',
            name: 'hoàng văn hải',
            email: 'hoangvanhai141189@gmail.com',
            phone: '0971067596',
            avatar: 'https://static.meeyid.com/avatar/blob.1689399671203',
            status: 1,
            phoneVerified: true,
            emailVerified: false
          },
          district: {
            code: '694',
            translation: [
              {
                prefix: 'Huyện',
                name: 'Hớn Quản',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501cbeb80a7245175e019',
            slug: 'hon-quan'
          },
          category: {
            name: 'Mua bán',
            _id: '5deb722db4367252525c1d00',
            slugIncludeTypeOfHouse: 'ban',
            value: 'mua_ban',
            uri: '/mua-ban-nha-dat-a4',
            slug: 'mua-ban-nha-dat'
          },
          userTypesLabel: 'Môi giới',
          addressLabel: 'H. Hớn Quản, T. Bình Phước',
          priceLabel: {
            totalPrice: '500 triệu',
            subTotalPrice: '2,5 tr/m²'
          },
          uri: '/ban-dat-hon-quan-binh-phuoc-i1122/301924504'
        },
        {
          _id: '669a1ddbb2021f001cb48d07',
          code: 106186525,
          city: {
            code: '75',
            translation: [
              {
                prefix: 'Tỉnh',
                name: 'Đồng Nai',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175de0a',
            slug: 'dong-nai'
          },
          totalPrice: 44000000000,
          facade: null,
          userTypes: 1,
          source: 2,
          typeOfHouse: {
            name: 'Đất',
            _id: '65eeb3cf01dfc72e1912edb3',
            value: 'dat',
            slug: 'dat'
          },
          subscription: {
            code: 'TINVIP3',
            color: '#344054',
            _id: '65f17a69942da87c0503a640',
            type: 3,
            title: 'Gói Bạc'
          },
          media: [
            {
              name: 'copyofbansaocua221721375275377-1721375277005-149947.png',
              width: 1200,
              description: null,
              mediaType: 1,
              mimeType: 'image/png',
              uri: '/meeyland/images/2024/07/19/copyofbansaocua221721375275377-1721375277005-149947.png',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/19/copyofbansaocua221721375275377-1721375277005-149947.png',
              height: 684
            },
            {
              name: 'z5647217492854f73e2fbfabdfc34e737c426e148f353e1721376058544-1721376058783-493894.jpg',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/19/z5647217492854f73e2fbfabdfc34e737c426e148f353e1721376058544-1721376058783-493894.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/19/z5647217492854f73e2fbfabdfc34e737c426e148f353e1721376058544-1721376058783-493894.jpg',
              height: 720
            },
            {
              name: 'copyofbansaocua2211721375274143-1721375276927-802693.png',
              width: 1200,
              description: null,
              mediaType: 1,
              mimeType: 'image/png',
              uri: '/meeyland/images/2024/07/19/copyofbansaocua2211721375274143-1721375276927-802693.png',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/19/copyofbansaocua2211721375274143-1721375276927-802693.png',
              height: 689
            },
            {
              name: 'copyofbansaocua2231721375270140-1721375276921-942932.png',
              width: 1200,
              description: null,
              mediaType: 1,
              mimeType: 'image/png',
              uri: '/meeyland/images/2024/07/19/copyofbansaocua2231721375270140-1721375276921-942932.png',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/19/copyofbansaocua2231721375270140-1721375276921-942932.png',
              height: 685
            },
            {
              name: 'copyofbansaocua2221721375271690-1721375277015-451457.png',
              width: 1200,
              description: null,
              mediaType: 1,
              mimeType: 'image/png',
              uri: '/meeyland/images/2024/07/19/copyofbansaocua2221721375271690-1721375277015-451457.png',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/19/copyofbansaocua2221721375271690-1721375277015-451457.png',
              height: 687
            },
            {
              name: 'z56472165627900902ad001a2d131d416ece95c9d6f0131721376057399-1721376058742-613302.jpg',
              width: 960,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/19/z56472165627900902ad001a2d131d416ece95c9d6f0131721376057399-1721376058742-613302.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/19/z56472165627900902ad001a2d131d416ece95c9d6f0131721376057399-1721376058742-613302.jpg',
              height: 1280
            },
            {
              name: 'z5647216579965a5d68cd8f9d794681293514374f5d6661721376057711-1721376058776-076670.jpg',
              width: 960,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/19/z5647216579965a5d68cd8f9d794681293514374f5d6661721376057711-1721376058776-076670.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/19/z5647216579965a5d68cd8f9d794681293514374f5d6661721376057711-1721376058776-076670.jpg',
              height: 1280
            },
            {
              name: 'z56472165625883e0c614a766b0d782b72f8cc4e1f04b31721376056858-1721376058740-774936.jpg',
              width: 960,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/19/z56472165625883e0c614a766b0d782b72f8cc4e1f04b31721376056858-1721376058740-774936.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/19/z56472165625883e0c614a766b0d782b72f8cc4e1f04b31721376056858-1721376058740-774936.jpg',
              height: 1280
            },
            {
              name: 'z56472165848412bf6e545b308dea806b6def76b5bbf421721376058459-1721376058780-561276.jpg',
              width: 960,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/19/z56472165848412bf6e545b308dea806b6def76b5bbf421721376058459-1721376058780-561276.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/19/z56472165848412bf6e545b308dea806b6def76b5bbf421721376058459-1721376058780-561276.jpg',
              height: 1280
            },
            {
              name: 'z5647216580175ebacd20128cd7e92705e701df97c370c1721376058348-1721376058751-018975.jpg',
              width: 960,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/07/19/z5647216580175ebacd20128cd7e92705e701df97c370c1721376058348-1721376058751-018975.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/07/19/z5647216580175ebacd20128cd7e92705e701df97c370c1721376058348-1721376058751-018975.jpg',
              height: 1280
            }
          ],
          isCrawl: false,
          isTourDisplayed: false,
          title:
            'Sở hữu đất nền rộng 4,4ha chỉ 1 triệu/m2, sẵn 758,9m2 thổ cư tại Đồng Nai - thích hợp làm homestay',
          createdAt: '2024-07-19T08:03:39.199Z',
          contact: {
            fullName: 'phong',
            phones: ['0937742828'],
            email: 'tuan84kthttp@gmail.com'
          },
          area: 44000,
          thumbnail: {
            size: 1704776,
            name: 'copyofbansaocua221721375275377-1721375277005-149947.png',
            width: 1200,
            mimeType: 'image/png',
            uri: '/meeyland/images/2024/07/19/copyofbansaocua221721375275377-1721375277005-149947.png',
            url: 'https://io.meeymedia.com/meeyland/images/2024/07/19/copyofbansaocua221721375275377-1721375277005-149947.png',
            height: 684
          },
          publishedAt: '2024-10-23T08:00:00.000Z',
          tour: null,
          totalPoint: 5.846153846153847,
          depth: null,
          isBoughtElectron: false,
          createdBy: {
            _id: '6698afda8af57461478fff91',
            name: 'Trần văn Tuấn',
            email: 'tuan84kthttp@gmail.com',
            phone: '0937742828',
            avatar: null,
            status: 1,
            phoneVerified: true,
            emailVerified: false
          },
          district: {
            code: '736',
            translation: [
              {
                prefix: 'Huyện',
                name: 'Định Quán',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501cbeb80a7245175e034',
            slug: 'dinh-quan'
          },
          category: {
            name: 'Mua bán',
            _id: '5deb722db4367252525c1d00',
            slugIncludeTypeOfHouse: 'ban',
            value: 'mua_ban',
            uri: '/mua-ban-nha-dat-a4',
            slug: 'mua-ban-nha-dat'
          },
          userTypesLabel: 'Chính chủ',
          addressLabel: 'H. Định Quán, T. Đồng Nai',
          priceLabel: {
            totalPrice: '44 tỷ',
            subTotalPrice: '1 tr/m²'
          },
          uri: '/ban-dat-dinh-quan-dong-nai-i1122/106186525'
        },
        {
          _id: '66fa5f8ab180fee322638b71',
          code: 301750021,
          city: {
            code: '38',
            translation: [
              {
                prefix: 'Tỉnh',
                name: 'Thanh Hóa',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175ddf4',
            slug: 'thanh-hoa'
          },
          totalPrice: 1000000000,
          facade: null,
          userTypes: 0,
          source: 4,
          typeOfHouse: {
            name: 'Đất',
            _id: '65eeb3cf01dfc72e1912edb3',
            value: 'dat',
            slug: 'dat'
          },
          media: [
            {
              name: 'IMG_20240930_140608.jpg',
              width: 1080,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/09/30/img20240930140608-1727684241866-722446.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/09/30/img20240930140608-1727684241866-722446.jpg',
              height: 810
            }
          ],
          subscription: {
            code: 'TINVIP3',
            color: '#344054',
            _id: '65f17a69942da87c0503a640',
            type: 3,
            title: 'Gói Bạc'
          },
          isCrawl: false,
          isTourDisplayed: false,
          title:
            'Đất đấu giá thuộc khu đô thị mới Xuân Hồng - Thọ Xuân - Thanh Hoá',
          createdAt: '2024-09-30T08:21:30.567Z',
          totalBathroom: null,
          contact: {
            fullName: 'chiemdongtam',
            phones: ['0918527021'],
            email: 'chiemn2@gmail.com'
          },
          area: 250,
          thumbnail: {
            size: 114789,
            name: 'IMG_20240930_140608.jpg',
            width: 1080,
            mimeType: 'image/jpeg',
            uri: '/meeyland/images/2024/09/30/img20240930140608-1727684241866-722446.jpg',
            url: 'https://io.meeymedia.com/meeyland/images/2024/09/30/img20240930140608-1727684241866-722446.jpg',
            height: 810
          },
          publishedAt: '2024-10-22T17:00:09.763Z',
          tour: null,
          totalBedroom: null,
          totalPoint: 6.038461538461538,
          depth: null,
          isBoughtElectron: false,
          createdBy: {
            _id: '63e71c9cd9c4d1001e0063da',
            name: 'chiemdongtam',
            email: 'chiemn2@gmail.com',
            phone: '0918527021',
            avatar: null,
            status: 1,
            phoneVerified: true,
            emailVerified: false
          },
          district: {
            code: '395',
            translation: [
              {
                prefix: 'Huyện',
                name: 'Thọ Xuân',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175df35',
            slug: 'tho-xuan'
          },
          totalFloor: null,
          category: {
            name: 'Mua bán',
            _id: '5deb722db4367252525c1d00',
            slugIncludeTypeOfHouse: 'ban',
            value: 'mua_ban',
            uri: '/mua-ban-nha-dat-a4',
            slug: 'mua-ban-nha-dat'
          },
          totalBalcony: null,
          userTypesLabel: 'Môi giới',
          addressLabel: 'H. Thọ Xuân, T. Thanh Hóa',
          priceLabel: {
            totalPrice: '1 tỷ',
            subTotalPrice: '4 tr/m²'
          },
          uri: '/ban-dat-tho-xuan-thanh-hoa-i1122/301750021'
        },
        {
          _id: '670dff6c383c971ab0c2a4d0',
          code: 301934151,
          city: {
            code: 'thanh-pho-ha-noi',
            translation: [
              {
                prefix: 'Thành phố',
                name: 'Hà Nội',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175dddb',
            slug: 'ha-noi'
          },
          totalPrice: 8400000000,
          facade: null,
          userTypes: 0,
          source: 4,
          typeOfHouse: {
            name: 'Nhà riêng',
            _id: '65eeb3cf01dfc72e1912edb0',
            value: 'nha_rieng',
            slug: 'nha-rieng'
          },
          media: [
            {
              name: '5F9DA8D5-DD47-4F91-AB0C-0C72AE87F848_L0_001_1728970044.606520_o_IMG_1889.JPG',
              width: 1536,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/15/5f9da8d5dd474f91ab0c0c72ae87f848l00011728970044606520oimg1889-1728970298871-445943.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/15/5f9da8d5dd474f91ab0c0c72ae87f848l00011728970044606520oimg1889-1728970298871-445943.jpg',
              height: 2048
            },
            {
              name: 'DE123C75-79E4-489B-9D76-C01EF7CE6FE4_L0_001_1728970049.577361_o_IMG_1890.JPG',
              width: 1154,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/15/de123c7579e4489b9d76c01ef7ce6fe4l00011728970049577361oimg1890-1728970298873-225163.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/15/de123c7579e4489b9d76c01ef7ce6fe4l00011728970049577361oimg1890-1728970298873-225163.jpg',
              height: 2048
            }
          ],
          subscription: {
            code: 'TINVIP3',
            color: '#344054',
            _id: '65f17a69942da87c0503a640',
            type: 3,
            title: 'Gói Bạc'
          },
          isCrawl: false,
          isTourDisplayed: false,
          title: 'Gia đình cần tiền bán nhà, giá vô cùng yêu thương',
          createdAt: '2024-10-15T05:36:44.487Z',
          totalBathroom: null,
          contact: {
            fullName: 'Lương Hữu Phùng',
            phones: ['0977418992'],
            email: 'phungluonghuu@gmail.com'
          },
          area: 48,
          thumbnail: {
            size: 703928,
            name: '5F9DA8D5-DD47-4F91-AB0C-0C72AE87F848_L0_001_1728970044.606520_o_IMG_1889.JPG',
            width: 1536,
            mimeType: 'image/jpeg',
            uri: '/meeyland/images/2024/10/15/5f9da8d5dd474f91ab0c0c72ae87f848l00011728970044606520oimg1889-1728970298871-445943.jpg',
            url: 'https://io.meeymedia.com/meeyland/images/2024/10/15/5f9da8d5dd474f91ab0c0c72ae87f848l00011728970044606520oimg1889-1728970298871-445943.jpg',
            height: 2048
          },
          publishedAt: '2024-10-22T17:00:09.763Z',
          tour: null,
          totalBedroom: null,
          totalPoint: 6.230769230769231,
          depth: null,
          isBoughtElectron: false,
          createdBy: {
            _id: '5f2e956387ea3cbe584d3c4e',
            name: 'Lương Hữu Phùng',
            email: 'phungluonghuu@gmail.com',
            phone: '0977418992',
            avatar:
              'https://static.meeyid.com/1596891909410-CDC41041-F4E4-4163-A0DD-69718489097D.jpeg',
            status: 1,
            phoneVerified: true,
            emailVerified: true
          },
          district: {
            code: '009',
            translation: [
              {
                prefix: 'Quận',
                name: 'Thanh Xuân',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175de2f',
            slug: 'thanh-xuan'
          },
          totalFloor: 4,
          category: {
            name: 'Mua bán',
            _id: '5deb722db4367252525c1d00',
            slugIncludeTypeOfHouse: 'ban',
            value: 'mua_ban',
            uri: '/mua-ban-nha-dat-a4',
            slug: 'mua-ban-nha-dat'
          },
          totalBalcony: null,
          userTypesLabel: 'Môi giới',
          addressLabel: 'Q. Thanh Xuân, Tp. Hà Nội',
          priceLabel: {
            totalPrice: '8,4 tỷ',
            subTotalPrice: '175 tr/m²'
          },
          uri: '/ban-nha-rieng-thanh-xuan-ha-noi-i1222/301934151'
        },
        {
          _id: '671331ae383c971ab0c2aee8',
          code: 301984996,
          city: {
            code: 'thanh-pho-ha-noi',
            translation: [
              {
                prefix: 'Thành phố',
                name: 'Hà Nội',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175dddb',
            slug: 'ha-noi'
          },
          totalPrice: 15600000000,
          facade: 4,
          userTypes: 0,
          source: 2,
          typeOfHouse: {
            name: 'Nhà riêng',
            _id: '65eeb3cf01dfc72e1912edb0',
            value: 'nha_rieng',
            slug: 'nha-rieng'
          },
          media: [
            {
              name: '4e3dd019c92529fa9a337e6d1be0ea50.jpg',
              width: 1600,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/19/4e3dd019c92529fa9a337e6d1be0ea50-1729311009374-648494.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/19/4e3dd019c92529fa9a337e6d1be0ea50-1729311009374-648494.jpg',
              height: 1200
            },
            {
              name: '181ae29e2d3616a86a32b628bf48ab29.md.jpg',
              width: 800,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/19/181ae29e2d3616a86a32b628bf48ab29md-1729311009948-659453.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/19/181ae29e2d3616a86a32b628bf48ab29md-1729311009948-659453.jpg',
              height: 600
            },
            {
              name: '780f80b0c3135d2d42fea38ed048b462.md.jpg',
              width: 800,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/19/780f80b0c3135d2d42fea38ed048b462md-1729311010289-981319.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/19/780f80b0c3135d2d42fea38ed048b462md-1729311010289-981319.jpg',
              height: 600
            },
            {
              name: '89085af6f5d9015d12e731303b846a0c.md.jpg',
              width: 800,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/19/89085af6f5d9015d12e731303b846a0cmd-1729311010887-914624.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/19/89085af6f5d9015d12e731303b846a0cmd-1729311010887-914624.jpg',
              height: 600
            },
            {
              name: 'e05df113619565a1c1cdbe9bafbddeb3.md.jpg',
              width: 800,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/19/e05df113619565a1c1cdbe9bafbddeb3md-1729311011701-065954.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/19/e05df113619565a1c1cdbe9bafbddeb3md-1729311011701-065954.jpg',
              height: 600
            }
          ],
          subscription: {
            code: 'TINVIP3',
            color: '#344054',
            _id: '65f17a69942da87c0503a640',
            type: 3,
            title: 'Gói Bạc'
          },
          isCrawl: false,
          isTourDisplayed: false,
          title:
            'Bán nhà Chu Huy Mân, Sài Đồng diện tích 115m2, lô góc 3 mặt thoáng',
          createdAt: '2024-10-19T04:12:30.990Z',
          totalBathroom: 4,
          contact: {
            fullName: 'Vũ Xuân Dũng',
            phones: ['0972106017'],
            email: 'dung.vxdh@gmail.com'
          },
          area: 115,
          thumbnail: {
            size: 767351,
            name: '4e3dd019c92529fa9a337e6d1be0ea50.jpg',
            width: 1600,
            mimeType: 'image/jpeg',
            uri: '/meeyland/images/2024/10/19/4e3dd019c92529fa9a337e6d1be0ea50-1729311009374-648494.jpg',
            url: 'https://io.meeymedia.com/meeyland/images/2024/10/19/4e3dd019c92529fa9a337e6d1be0ea50-1729311009374-648494.jpg',
            height: 1200
          },
          publishedAt: '2024-10-19T05:17:33.299Z',
          tour: null,
          totalBedroom: 4,
          totalPoint: 7,
          depth: 123,
          isBoughtElectron: false,
          createdBy: {
            _id: '617d66d432d468001973445d',
            name: 'Vũ Xuân Dũng',
            email: 'dung.vxdh@gmail.com',
            phone: '0972106017',
            avatar:
              'https://static.meeyid.com/20220914T140516753Z_e2da3838_8820_43a1_92b4_294c3ef2d2f1',
            status: 1,
            phoneVerified: true,
            emailVerified: false
          },
          district: {
            code: '004',
            translation: [
              {
                prefix: 'Quận',
                name: 'Long Biên',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175de2a',
            slug: 'long-bien'
          },
          totalFloor: 4,
          category: {
            name: 'Mua bán',
            _id: '5deb722db4367252525c1d00',
            slugIncludeTypeOfHouse: 'ban',
            value: 'mua_ban',
            uri: '/mua-ban-nha-dat-a4',
            slug: 'mua-ban-nha-dat'
          },
          totalBalcony: null,
          userTypesLabel: 'Môi giới',
          addressLabel: 'Q. Long Biên, Tp. Hà Nội',
          priceLabel: {
            totalPrice: '15,6 tỷ',
            subTotalPrice: '135,65 tr/m²'
          },
          uri: '/ban-nha-rieng-long-bien-ha-noi-i1222/301984996'
        },
        {
          _id: '6711da9d383c971ab0c2ac70',
          code: 301972777,
          city: {
            code: 'thanh-pho-ha-noi',
            translation: [
              {
                prefix: 'Thành phố',
                name: 'Hà Nội',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175dddb',
            slug: 'ha-noi'
          },
          totalPrice: 3600000000,
          facade: 4.2,
          userTypes: 1,
          source: 4,
          typeOfHouse: {
            name: 'Nhà mặt phố',
            _id: '65eeb3cf01dfc72e1912edb1',
            value: 'nha_mat_pho',
            slug: 'nha-mat-pho'
          },
          media: [
            {
              name: '601E46FF-D16E-4F46-A982-DA1D8BB73F6F_L0_001_1729223030.000000_o_IMG_6974.JPG',
              width: 960,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/18/601e46ffd16e4f46a982da1d8bb73f6fl00011729223030000000oimg6974-1729223063126-731772.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/18/601e46ffd16e4f46a982da1d8bb73f6fl00011729223030000000oimg6974-1729223063126-731772.jpg',
              height: 1280
            },
            {
              name: '44C97D8C-B8D3-444C-9D4E-521D297703FC_L0_001_1729223030.000000_o_IMG_6975.JPG',
              width: 960,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/18/44c97d8cb8d3444c9d4e521d297703fcl00011729223030000000oimg6975-1729223063126-783692.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/18/44c97d8cb8d3444c9d4e521d297703fcl00011729223030000000oimg6975-1729223063126-783692.jpg',
              height: 1280
            },
            {
              name: '-1626649637.jpg',
              width: 1850,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/18/1626649637-1729223063414-200348.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/18/1626649637-1729223063414-200348.jpg',
              height: 2451
            },
            {
              name: '-1626251952.jpg',
              width: 3024,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/18/1626251952-1729223064730-814852.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/18/1626251952-1729223064730-814852.jpg',
              height: 4032
            }
          ],
          subscription: {
            code: 'TINVIP3',
            color: '#344054',
            _id: '65f17a69942da87c0503a640',
            type: 3,
            title: 'Gói Bạc'
          },
          isCrawl: false,
          isTourDisplayed: false,
          title: 'Bán nhà mặt đường Thái Lai, Minh Trí, Sóc Sơn, Hà Nội',
          createdAt: '2024-10-18T03:48:45.722Z',
          totalBathroom: 3,
          contact: {
            fullName: 'Nguyễn Thị Thu',
            phones: ['0972438279'],
            email: 'thung0887@gmail.com'
          },
          area: 150,
          thumbnail: {
            size: 366296,
            name: '601E46FF-D16E-4F46-A982-DA1D8BB73F6F_L0_001_1729223030.000000_o_IMG_6974.JPG',
            width: 960,
            mimeType: 'image/jpeg',
            uri: '/meeyland/images/2024/10/18/601e46ffd16e4f46a982da1d8bb73f6fl00011729223030000000oimg6974-1729223063126-731772.jpg',
            url: 'https://io.meeymedia.com/meeyland/images/2024/10/18/601e46ffd16e4f46a982da1d8bb73f6fl00011729223030000000oimg6974-1729223063126-731772.jpg',
            height: 1280
          },
          publishedAt: '2024-10-18T15:00:00.000Z',
          tour: null,
          totalBedroom: 3,
          totalPoint: 6.769230769230769,
          depth: 35.71,
          isBoughtElectron: false,
          createdBy: {
            _id: '6711c4d61a0d7abb8dbade60',
            name: 'Nguyễn Thị Thu',
            email: 'thung0887@gmail.com',
            phone: '0972438279',
            avatar: null,
            status: 1,
            phoneVerified: true,
            emailVerified: false
          },
          district: {
            code: '016',
            translation: [
              {
                prefix: 'Huyện',
                name: 'Sóc Sơn',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175de30',
            slug: 'soc-son'
          },
          totalFloor: 3,
          category: {
            name: 'Mua bán',
            _id: '5deb722db4367252525c1d00',
            slugIncludeTypeOfHouse: 'ban',
            value: 'mua_ban',
            uri: '/mua-ban-nha-dat-a4',
            slug: 'mua-ban-nha-dat'
          },
          totalBalcony: null,
          userTypesLabel: 'Chính chủ',
          addressLabel: 'H. Sóc Sơn, Tp. Hà Nội',
          priceLabel: {
            totalPrice: '3,6 tỷ',
            subTotalPrice: '24 tr/m²'
          },
          uri: '/ban-nha-mat-pho-soc-son-ha-noi-i1322/301972777'
        },
        {
          _id: '66fe6937b180fee3226394b6',
          code: 301795463,
          city: {
            code: '30',
            translation: [
              {
                prefix: 'Tỉnh',
                name: 'Hải Dương',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175dded',
            slug: 'hai-duong'
          },
          totalPrice: 1080000000,
          facade: 3.9,
          userTypes: 0,
          source: 2,
          typeOfHouse: {
            name: 'Đất',
            _id: '65eeb3cf01dfc72e1912edb3',
            value: 'dat',
            slug: 'dat'
          },
          media: [
            {
              name: '3.jpg',
              width: 960,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/03/3-1727948404291-687266.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/03/3-1727948404291-687266.jpg',
              height: 1280
            },
            {
              name: '1.jpg',
              width: 960,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/03/1-1727948416278-658288.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/03/1-1727948416278-658288.jpg',
              height: 1280
            },
            {
              name: '2.jpg',
              width: 960,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/03/2-1727948416684-891431.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/03/2-1727948416684-891431.jpg',
              height: 1280
            },
            {
              name: '4.jpg',
              width: 960,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/03/4-1727948416971-880176.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/03/4-1727948416971-880176.jpg',
              height: 1280
            }
          ],
          subscription: {
            code: 'TINVIP3',
            color: '#344054',
            _id: '65f17a69942da87c0503a640',
            type: 3,
            title: 'Gói Bạc'
          },
          isCrawl: false,
          isTourDisplayed: false,
          title:
            'Cần bán đất hướng Bắc - Vuông đẹp như bánh chưng - Diện tích 47,4m2 tại Khu 6 Việt Hoà, Thành phố Hải Dương',
          createdAt: '2024-10-03T09:51:51.026Z',
          contact: {
            fullName: 'Nguyễn Thị Hoài Thu',
            phones: ['0989207438'],
            email: 'hoaithutvn@gmail.com'
          },
          area: 47.4,
          thumbnail: {
            size: 250370,
            name: '3.jpg',
            width: 960,
            mimeType: 'image/jpeg',
            uri: '/meeyland/images/2024/10/03/3-1727948404291-687266.jpg',
            url: 'https://io.meeymedia.com/meeyland/images/2024/10/03/3-1727948404291-687266.jpg',
            height: 1280
          },
          publishedAt: '2024-10-17T17:00:16.643Z',
          tour: null,
          totalPoint: 7.038461538461538,
          depth: 12.15,
          isBoughtElectron: false,
          createdBy: {
            _id: '5e814a68321cd6ccbc2edfed',
            name: 'Nguyễn Thị Hoài Thu',
            email: 'hoaithutvn@gmail.com',
            phone: '0989207438',
            avatar:
              'https://static.meeyid.com/avatar/5e814a68321cd6ccbc2edfed.jpg',
            status: 1,
            phoneVerified: true,
            emailVerified: true
          },
          district: {
            code: '288',
            translation: [
              {
                prefix: 'Thành phố',
                name: 'Hải Dương',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175dee2',
            slug: 'hai-duong'
          },
          category: {
            name: 'Mua bán',
            _id: '5deb722db4367252525c1d00',
            slugIncludeTypeOfHouse: 'ban',
            value: 'mua_ban',
            uri: '/mua-ban-nha-dat-a4',
            slug: 'mua-ban-nha-dat'
          },
          userTypesLabel: 'Môi giới',
          addressLabel: 'Tp. Hải Dương, T. Hải Dương',
          priceLabel: {
            totalPrice: '1,08 tỷ',
            subTotalPrice: '22,78 tr/m²'
          },
          uri: '/ban-dat-hai-duong-hai-duong-i1122/301795463'
        },
        {
          _id: '6710c334383c971ab0c2aac4',
          code: 301962103,
          city: {
            code: '30',
            translation: [
              {
                prefix: 'Tỉnh',
                name: 'Hải Dương',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175dded',
            slug: 'hai-duong'
          },
          totalPrice: 6500000000,
          facade: 7,
          userTypes: 1,
          source: 2,
          typeOfHouse: {
            name: 'Nhà mặt phố',
            _id: '65eeb3cf01dfc72e1912edb1',
            value: 'nha_mat_pho',
            slug: 'nha-mat-pho'
          },
          media: [
            {
              name: 'z5884749290008_7c2ca09fb542313f190a631cbffbbd4d.jpg',
              width: 557,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/17/z58847492900087c2ca09fb542313f190a631cbffbbd4d-1729150817572-319771.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/17/z58847492900087c2ca09fb542313f190a631cbffbbd4d-1729150817572-319771.jpg',
              height: 825
            },
            {
              name: 'z5884749293820_4703b01771d69282bacd08f9382ef655.jpg',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/17/z58847492938204703b01771d69282bacd08f9382ef655-1729150817798-589860.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/17/z58847492938204703b01771d69282bacd08f9382ef655-1729150817798-589860.jpg',
              height: 357
            },
            {
              name: 'z5884749325688_9c1dd48ed32e593154a1bae6a9759093.jpg',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/17/z58847493256889c1dd48ed32e593154a1bae6a9759093-1729150818022-255754.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/17/z58847493256889c1dd48ed32e593154a1bae6a9759093-1729150818022-255754.jpg',
              height: 664
            },
            {
              name: 'z5884749340461_b9b69b0854a908ee91b0a47e3ced0931.jpg',
              width: 1278,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/17/z5884749340461b9b69b0854a908ee91b0a47e3ced0931-1729150818239-342801.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/17/z5884749340461b9b69b0854a908ee91b0a47e3ced0931-1729150818239-342801.jpg',
              height: 622
            },
            {
              name: 'z5884749364580_013902eec7859eb160082d8f725d58ea.jpg',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/17/z5884749364580013902eec7859eb160082d8f725d58ea-1729150818508-705471.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/17/z5884749364580013902eec7859eb160082d8f725d58ea-1729150818508-705471.jpg',
              height: 588
            },
            {
              name: 'z5884749365903_86f880db93c89fa3eed6f029c64a807b.jpg',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/17/z588474936590386f880db93c89fa3eed6f029c64a807b-1729150818779-282934.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/17/z588474936590386f880db93c89fa3eed6f029c64a807b-1729150818779-282934.jpg',
              height: 960
            },
            {
              name: 'z5884749383144_8fa8beab65a25a7047ba931b90fa40af.jpg',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/17/z58847493831448fa8beab65a25a7047ba931b90fa40af-1729150819053-682305.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/17/z58847493831448fa8beab65a25a7047ba931b90fa40af-1729150819053-682305.jpg',
              height: 960
            },
            {
              name: 'z5885538962501_7f0459beae2dba758a863953ec6de3ab.jpg',
              width: 960,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/17/z58855389625017f0459beae2dba758a863953ec6de3ab-1729150819319-131668.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/17/z58855389625017f0459beae2dba758a863953ec6de3ab-1729150819319-131668.jpg',
              height: 1280
            },
            {
              name: 'z5939184942117_74caaca52f455126033d3dad1d48e4f6.jpg',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/17/z593918494211774caaca52f455126033d3dad1d48e4f6-1729150819598-430917.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/17/z593918494211774caaca52f455126033d3dad1d48e4f6-1729150819598-430917.jpg',
              height: 1280
            },
            {
              name: 'z5939184951112_3731f82591835e93a601bd1938935cca.jpg',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/17/z59391849511123731f82591835e93a601bd1938935cca-1729150819880-770511.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/17/z59391849511123731f82591835e93a601bd1938935cca-1729150819880-770511.jpg',
              height: 1280
            },
            {
              name: 'z5939184955456_fdd58fb66590d16160e51b4f761b1a9b.jpg',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/17/z5939184955456fdd58fb66590d16160e51b4f761b1a9b-1729150820221-810819.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/17/z5939184955456fdd58fb66590d16160e51b4f761b1a9b-1729150820221-810819.jpg',
              height: 1280
            },
            {
              name: 'z5939184966940_7d87b51af3e3a53148ef723f80745642.jpg',
              width: 1280,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/17/z59391849669407d87b51af3e3a53148ef723f80745642-1729150820502-937793.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/17/z59391849669407d87b51af3e3a53148ef723f80745642-1729150820502-937793.jpg',
              height: 1280
            },
            {
              name: 'z5885772738988_1a236b2403c272013fad9219c2e7db9f.jpg',
              width: 960,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/17/z58857727389881a236b2403c272013fad9219c2e7db9f-1729150941430-297305.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/17/z58857727389881a236b2403c272013fad9219c2e7db9f-1729150941430-297305.jpg',
              height: 1280
            },
            {
              name: 'z5885773278822_cf187e4158a04880e2a2419fe9daf184.jpg',
              width: 960,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpeg',
              uri: '/meeyland/images/2024/10/17/z5885773278822cf187e4158a04880e2a2419fe9daf184-1729150941691-333859.jpg',
              url: 'https://io.meeymedia.com/meeyland/images/2024/10/17/z5885773278822cf187e4158a04880e2a2419fe9daf184-1729150941691-333859.jpg',
              height: 1280
            }
          ],
          subscription: {
            code: 'TINVIP3',
            color: '#344054',
            _id: '65f17a69942da87c0503a640',
            type: 3,
            title: 'Gói Bạc'
          },
          isCrawl: false,
          isTourDisplayed: false,
          title: 'Bán nhà riêng tại Thị trấn Phú Thái, Kim Thành, Hải Dương',
          createdAt: '2024-10-17T07:56:36.063Z',
          totalBathroom: 3,
          contact: {
            fullName: 'Nguyễn Thị Hương',
            phones: ['0936205789'],
            email: 'Huongdothihd88@gmail.com'
          },
          area: 128,
          thumbnail: {
            size: 138217,
            name: 'z5884749290008_7c2ca09fb542313f190a631cbffbbd4d.jpg',
            width: 557,
            mimeType: 'image/jpeg',
            uri: '/meeyland/images/2024/10/17/z58847492900087c2ca09fb542313f190a631cbffbbd4d-1729150817572-319771.jpg',
            url: 'https://io.meeymedia.com/meeyland/images/2024/10/17/z58847492900087c2ca09fb542313f190a631cbffbbd4d-1729150817572-319771.jpg',
            height: 825
          },
          publishedAt: '2024-10-17T08:39:03.987Z',
          tour: null,
          totalBedroom: 3,
          totalPoint: 7.461538461538462,
          depth: 19,
          isBoughtElectron: false,
          createdBy: {
            _id: '61bdf6fbb414f800187a55e6',
            name: 'Nguyễn Thị Hương',
            email: 'Huongdothihd88@gmail.com',
            phone: '0936205789',
            avatar: null,
            status: 1,
            phoneVerified: true,
            emailVerified: false
          },
          district: {
            code: '293',
            translation: [
              {
                prefix: 'Huyện',
                name: 'Kim Thành',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175dee6',
            slug: 'kim-thanh'
          },
          totalFloor: 3,
          category: {
            name: 'Mua bán',
            _id: '5deb722db4367252525c1d00',
            slugIncludeTypeOfHouse: 'ban',
            value: 'mua_ban',
            uri: '/mua-ban-nha-dat-a4',
            slug: 'mua-ban-nha-dat'
          },
          totalBalcony: null,
          userTypesLabel: 'Chính chủ',
          addressLabel: 'H. Kim Thành, T. Hải Dương',
          priceLabel: {
            totalPrice: '6,5 tỷ',
            subTotalPrice: '50,78 tr/m²'
          },
          uri: '/ban-nha-mat-pho-kim-thanh-hai-duong-i1322/301962103'
        },
        {
          _id: '67146bd0785650f1d9fb49e9',
          code: 301995070,
          city: {
            code: '75',
            translation: [
              {
                prefix: 'Tỉnh',
                name: 'Đồng Nai',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175de0a',
            slug: 'dong-nai'
          },
          totalPrice: 600000000,
          facade: null,
          userTypes: 0,
          source: 6,
          typeOfHouse: {
            name: 'Nhà riêng',
            _id: '65eeb3cf01dfc72e1912edb0',
            value: 'nha_rieng',
            slug: 'nha-rieng'
          },
          subscription: {
            code: 'TINTHUONG',
            _id: '65f17ea40ab5f1ebaade36b1',
            type: 4,
            title: 'Tin thường'
          },
          media: [
            {
              name: '3956902131292365_0.jpg',
              width: 720,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpg',
              uri: '/meeyland-ai/images/2024/10/20/3956902131292365_0.jpg',
              url: 'https://io.meeymedia.com/meeyland-ai/images/2024/10/20/3956902131292365_0.jpg',
              height: 960
            },
            {
              name: '3956902131292365_1.jpg',
              width: 720,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpg',
              uri: '/meeyland-ai/images/2024/10/20/3956902131292365_1.jpg',
              url: 'https://io.meeymedia.com/meeyland-ai/images/2024/10/20/3956902131292365_1.jpg',
              height: 960
            },
            {
              name: '3956902131292365_3.jpg',
              width: 720,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpg',
              uri: '/meeyland-ai/images/2024/10/20/3956902131292365_3.jpg',
              url: 'https://io.meeymedia.com/meeyland-ai/images/2024/10/20/3956902131292365_3.jpg',
              height: 960
            },
            {
              name: '3956902131292365_4.jpg',
              width: 720,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpg',
              uri: '/meeyland-ai/images/2024/10/20/3956902131292365_4.jpg',
              url: 'https://io.meeymedia.com/meeyland-ai/images/2024/10/20/3956902131292365_4.jpg',
              height: 960
            },
            {
              name: '3956902131292365_6.jpg',
              width: 720,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpg',
              uri: '/meeyland-ai/images/2024/10/20/3956902131292365_6.jpg',
              url: 'https://io.meeymedia.com/meeyland-ai/images/2024/10/20/3956902131292365_6.jpg',
              height: 960
            }
          ],
          isCrawl: false,
          isTourDisplayed: false,
          title:
            'Bán nhà xã Thạnh Phú, Vĩnh Cửu, Đồng Nai giá 1,98 tỷ, diện tích 110m2',
          createdAt: '2024-10-20T02:34:18.733Z',
          totalBathroom: 2,
          contact: {
            fullName: 'Đinh Tiến Mạnh',
            phones: ['0922947777'],
            email: ''
          },
          floorNumber: null,
          area: 110,
          thumbnail: {
            size: 139563,
            name: '3956902131292365_0.jpg',
            width: 720,
            mimeType: 'image/jpg',
            uri: '/meeyland-ai/images/2024/10/20/3956902131292365_0.jpg',
            url: 'https://io.meeymedia.com/meeyland-ai/images/2024/10/20/3956902131292365_0.jpg',
            height: 960
          },
          publishedAt: '2024-10-23T16:58:56.917Z',
          tour: null,
          totalBedroom: null,
          totalPoint: 5.461538461538462,
          depth: null,
          isBoughtElectron: false,
          createdBy: {
            _id: '6114ec214113a18775e36625',
            name: 'Tài khoản Tin Crawl (system)',
            email: 'contact@meeyland.com',
            phone: '0000000000',
            avatar: null,
            status: 1,
            phoneVerified: true,
            emailVerified: true
          },
          district: {
            code: '735',
            translation: [
              {
                prefix: 'Huyện',
                name: 'Vĩnh Cửu',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501cbeb80a7245175e033',
            slug: 'vinh-cuu'
          },
          totalFloor: null,
          category: {
            name: 'Mua bán',
            _id: '5deb722db4367252525c1d00',
            slugIncludeTypeOfHouse: 'ban',
            value: 'mua_ban',
            uri: '/mua-ban-nha-dat-a4',
            slug: 'mua-ban-nha-dat'
          },
          totalBalcony: null,
          userTypesLabel: 'Môi giới',
          addressLabel: 'H. Vĩnh Cửu, T. Đồng Nai',
          priceLabel: {
            totalPrice: '600 triệu',
            subTotalPrice: '5,45 tr/m²'
          },
          uri: '/ban-nha-rieng-vinh-cuu-dong-nai-i1222/301995070'
        },
        {
          _id: '67146bd4785650f1d9fb49ec',
          code: 301995060,
          city: {
            code: '34',
            translation: [
              {
                prefix: 'Tỉnh',
                name: 'Thái Bình',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175ddf0',
            slug: 'thai-binh'
          },
          totalPrice: 1000000000,
          facade: 4.3,
          userTypes: 0,
          source: 6,
          typeOfHouse: {
            name: 'Nhà riêng',
            _id: '65eeb3cf01dfc72e1912edb0',
            value: 'nha_rieng',
            slug: 'nha-rieng'
          },
          subscription: {
            code: 'TINTHUONG',
            _id: '65f17ea40ab5f1ebaade36b1',
            type: 4,
            title: 'Tin thường'
          },
          media: [
            {
              name: '3588768854746345_0.jpg',
              width: 740,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpg',
              uri: '/meeyland-ai/images/2024/10/20/3588768854746345_0.jpg',
              url: 'https://io.meeymedia.com/meeyland-ai/images/2024/10/20/3588768854746345_0.jpg',
              height: 1280
            }
          ],
          isCrawl: false,
          isTourDisplayed: false,
          title:
            'Bán đất Phúc Khánh, Hưng Hà, Thái Bình 2 mặt ngõ giá nhỉnh 1 tỷ, diện tích 65m2',
          createdAt: '2024-10-20T02:33:47.846Z',
          totalBathroom: null,
          contact: {
            fullName: 'Hạnh Nguyễn',
            phones: ['0961928992'],
            email: ''
          },
          floorNumber: null,
          area: 65,
          thumbnail: {
            size: 126137,
            name: '3588768854746345_0.jpg',
            width: 740,
            mimeType: 'image/jpg',
            uri: '/meeyland-ai/images/2024/10/20/3588768854746345_0.jpg',
            url: 'https://io.meeymedia.com/meeyland-ai/images/2024/10/20/3588768854746345_0.jpg',
            height: 1280
          },
          publishedAt: '2024-10-23T16:58:46.312Z',
          tour: null,
          totalBedroom: null,
          totalPoint: 5.538461538461538,
          depth: 15.12,
          isBoughtElectron: false,
          createdBy: {
            _id: '6114ec214113a18775e36625',
            name: 'Tài khoản Tin Crawl (system)',
            email: 'contact@meeyland.com',
            phone: '0000000000',
            avatar: null,
            status: 1,
            phoneVerified: true,
            emailVerified: true
          },
          district: {
            code: '339',
            translation: [
              {
                prefix: 'Huyện',
                name: 'Hưng Hà',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175df09',
            slug: 'hung-ha'
          },
          totalFloor: null,
          category: {
            name: 'Mua bán',
            _id: '5deb722db4367252525c1d00',
            slugIncludeTypeOfHouse: 'ban',
            value: 'mua_ban',
            uri: '/mua-ban-nha-dat-a4',
            slug: 'mua-ban-nha-dat'
          },
          totalBalcony: null,
          userTypesLabel: 'Môi giới',
          addressLabel: 'H. Hưng Hà, T. Thái Bình',
          priceLabel: {
            totalPrice: '1 tỷ',
            subTotalPrice: '15,38 tr/m²'
          },
          uri: '/ban-nha-rieng-hung-ha-thai-binh-i1222/301995060'
        },
        {
          _id: '67146bff785650f1d9fb49fc',
          code: 301995063,
          city: {
            code: '77',
            translation: [
              {
                prefix: 'Tỉnh',
                name: 'Bà Rịa - Vũng Tàu',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175de0b',
            slug: 'ba-ria-vung-tau'
          },
          totalPrice: 8000000000,
          facade: 4.5,
          userTypes: 0,
          source: 6,
          typeOfHouse: {
            name: 'Nhà riêng',
            _id: '65eeb3cf01dfc72e1912edb0',
            value: 'nha_rieng',
            slug: 'nha-rieng'
          },
          subscription: {
            code: 'TINTHUONG',
            _id: '65f17ea40ab5f1ebaade36b1',
            type: 4,
            title: 'Tin thường'
          },
          media: [
            {
              name: '4179638005606958_1.jpg',
              width: 443,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpg',
              uri: '/meeyland-ai/images/2024/10/20/4179638005606958_1.jpg',
              url: 'https://io.meeymedia.com/meeyland-ai/images/2024/10/20/4179638005606958_1.jpg',
              height: 960
            }
          ],
          isCrawl: false,
          isTourDisplayed: false,
          title:
            'Bán nhà trung tâm đô thị Chí Linh 1, phường 10, Vũng Tàu giá 8 tỷ, diện tích 72m2',
          createdAt: '2024-10-20T02:34:17.907Z',
          totalBathroom: null,
          contact: {
            fullName: 'Van Thúy',
            phones: ['0906538692'],
            email: ''
          },
          floorNumber: null,
          area: 72,
          thumbnail: {
            size: 77772,
            name: '4179638005606958_1.jpg',
            width: 443,
            mimeType: 'image/jpg',
            uri: '/meeyland-ai/images/2024/10/20/4179638005606958_1.jpg',
            url: 'https://io.meeymedia.com/meeyland-ai/images/2024/10/20/4179638005606958_1.jpg',
            height: 960
          },
          publishedAt: '2024-10-23T16:58:40.614Z',
          tour: null,
          totalBedroom: null,
          totalPoint: 5.769230769230769,
          depth: 16,
          isBoughtElectron: false,
          createdBy: {
            _id: '6114ec214113a18775e36625',
            name: 'Tài khoản Tin Crawl (system)',
            email: 'contact@meeyland.com',
            phone: '0000000000',
            avatar: null,
            status: 1,
            phoneVerified: true,
            emailVerified: true
          },
          district: {
            code: '747',
            translation: [
              {
                prefix: 'Thành phố',
                name: 'Vũng Tàu',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501cbeb80a7245175e03b',
            slug: 'vung-tau'
          },
          totalFloor: null,
          category: {
            name: 'Mua bán',
            _id: '5deb722db4367252525c1d00',
            slugIncludeTypeOfHouse: 'ban',
            value: 'mua_ban',
            uri: '/mua-ban-nha-dat-a4',
            slug: 'mua-ban-nha-dat'
          },
          totalBalcony: null,
          userTypesLabel: 'Môi giới',
          addressLabel: 'Tp. Vũng Tàu, T. Bà Rịa - Vũng Tàu',
          priceLabel: {
            totalPrice: '8 tỷ',
            subTotalPrice: '111,11 tr/m²'
          },
          uri: '/ban-nha-rieng-vung-tau-ba-ria-vung-tau-i1224/301995063'
        },
        {
          _id: '67146c06785650f1d9fb49ff',
          code: 301995073,
          city: {
            code: '75',
            translation: [
              {
                prefix: 'Tỉnh',
                name: 'Đồng Nai',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175de0a',
            slug: 'dong-nai'
          },
          totalPrice: 3600000000,
          facade: null,
          userTypes: 0,
          source: 6,
          typeOfHouse: {
            name: 'Nhà riêng',
            _id: '65eeb3cf01dfc72e1912edb0',
            value: 'nha_rieng',
            slug: 'nha-rieng'
          },
          subscription: {
            code: 'TINTHUONG',
            _id: '65f17ea40ab5f1ebaade36b1',
            type: 4,
            title: 'Tin thường'
          },
          media: [
            {
              name: '3956878481294730_0.jpg',
              width: 720,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpg',
              uri: '/meeyland-ai/images/2024/10/20/3956878481294730_0.jpg',
              url: 'https://io.meeymedia.com/meeyland-ai/images/2024/10/20/3956878481294730_0.jpg',
              height: 960
            },
            {
              name: '3956878481294730_1.jpg',
              width: 720,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpg',
              uri: '/meeyland-ai/images/2024/10/20/3956878481294730_1.jpg',
              url: 'https://io.meeymedia.com/meeyland-ai/images/2024/10/20/3956878481294730_1.jpg',
              height: 960
            },
            {
              name: '3956878481294730_2.jpg',
              width: 720,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpg',
              uri: '/meeyland-ai/images/2024/10/20/3956878481294730_2.jpg',
              url: 'https://io.meeymedia.com/meeyland-ai/images/2024/10/20/3956878481294730_2.jpg',
              height: 960
            },
            {
              name: '3956878481294730_3.jpg',
              width: 720,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpg',
              uri: '/meeyland-ai/images/2024/10/20/3956878481294730_3.jpg',
              url: 'https://io.meeymedia.com/meeyland-ai/images/2024/10/20/3956878481294730_3.jpg',
              height: 960
            },
            {
              name: '3956878481294730_4.jpg',
              width: 720,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpg',
              uri: '/meeyland-ai/images/2024/10/20/3956878481294730_4.jpg',
              url: 'https://io.meeymedia.com/meeyland-ai/images/2024/10/20/3956878481294730_4.jpg',
              height: 960
            },
            {
              name: '3956878481294730_5.jpg',
              width: 720,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpg',
              uri: '/meeyland-ai/images/2024/10/20/3956878481294730_5.jpg',
              url: 'https://io.meeymedia.com/meeyland-ai/images/2024/10/20/3956878481294730_5.jpg',
              height: 960
            },
            {
              name: '3956878481294730_6.jpg',
              width: 720,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpg',
              uri: '/meeyland-ai/images/2024/10/20/3956878481294730_6.jpg',
              url: 'https://io.meeymedia.com/meeyland-ai/images/2024/10/20/3956878481294730_6.jpg',
              height: 960
            },
            {
              name: '3956878481294730_7.jpg',
              width: 720,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpg',
              uri: '/meeyland-ai/images/2024/10/20/3956878481294730_7.jpg',
              url: 'https://io.meeymedia.com/meeyland-ai/images/2024/10/20/3956878481294730_7.jpg',
              height: 960
            },
            {
              name: '3956878481294730_8.jpg',
              width: 720,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpg',
              uri: '/meeyland-ai/images/2024/10/20/3956878481294730_8.jpg',
              url: 'https://io.meeymedia.com/meeyland-ai/images/2024/10/20/3956878481294730_8.jpg',
              height: 960
            }
          ],
          isCrawl: false,
          isTourDisplayed: false,
          title: 'Bán nhà riêng thành phố Biên Hòa tỉnh Đồng Nai giá 3.6 tỷ',
          createdAt: '2024-10-20T02:34:19.021Z',
          totalBathroom: 2,
          contact: {
            fullName: 'Tân Châu',
            phones: ['0388676858'],
            email: ''
          },
          floorNumber: null,
          area: 100,
          thumbnail: {
            size: 133977,
            name: '3956878481294730_0.jpg',
            width: 720,
            mimeType: 'image/jpg',
            uri: '/meeyland-ai/images/2024/10/20/3956878481294730_0.jpg',
            url: 'https://io.meeymedia.com/meeyland-ai/images/2024/10/20/3956878481294730_0.jpg',
            height: 960
          },
          publishedAt: '2024-10-23T16:57:51.710Z',
          tour: null,
          totalBedroom: 3,
          totalPoint: 5.538461538461538,
          depth: null,
          isBoughtElectron: false,
          createdBy: {
            _id: '6114ec214113a18775e36625',
            name: 'Tài khoản Tin Crawl (system)',
            email: 'contact@meeyland.com',
            phone: '0000000000',
            avatar: null,
            status: 1,
            phoneVerified: true,
            emailVerified: true
          },
          district: {
            code: '731',
            translation: [
              {
                prefix: 'Thành phố',
                name: 'Biên Hòa',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501cbeb80a7245175e030',
            slug: 'bien-hoa'
          },
          totalFloor: null,
          category: {
            name: 'Mua bán',
            _id: '5deb722db4367252525c1d00',
            slugIncludeTypeOfHouse: 'ban',
            value: 'mua_ban',
            uri: '/mua-ban-nha-dat-a4',
            slug: 'mua-ban-nha-dat'
          },
          totalBalcony: null,
          userTypesLabel: 'Môi giới',
          addressLabel: 'Tp. Biên Hòa, T. Đồng Nai',
          priceLabel: {
            totalPrice: '3,6 tỷ',
            subTotalPrice: '36 tr/m²'
          },
          uri: '/ban-nha-rieng-bien-hoa-dong-nai-i1222/301995073'
        },
        {
          _id: '67146c13785650f1d9fb4a05',
          code: 301995074,
          city: {
            code: '79',
            translation: [
              {
                prefix: 'Thành phố',
                name: 'Hồ Chí Minh',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501caeb80a7245175de0c',
            slug: 'ho-chi-minh'
          },
          totalPrice: 8000000000,
          facade: null,
          userTypes: 0,
          source: 6,
          typeOfHouse: {
            name: 'Nhà riêng',
            _id: '65eeb3cf01dfc72e1912edb0',
            value: 'nha_rieng',
            slug: 'nha-rieng'
          },
          subscription: {
            code: 'TINTHUONG',
            _id: '65f17ea40ab5f1ebaade36b1',
            type: 4,
            title: 'Tin thường'
          },
          media: [
            {
              name: '4179637738940318_0.jpg',
              width: 960,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpg',
              uri: '/meeyland-ai/images/2024/10/20/4179637738940318_0.jpg',
              url: 'https://io.meeymedia.com/meeyland-ai/images/2024/10/20/4179637738940318_0.jpg',
              height: 720
            },
            {
              name: '4179637738940318_1.jpg',
              width: 960,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpg',
              uri: '/meeyland-ai/images/2024/10/20/4179637738940318_1.jpg',
              url: 'https://io.meeymedia.com/meeyland-ai/images/2024/10/20/4179637738940318_1.jpg',
              height: 720
            },
            {
              name: '4179637738940318_2.jpg',
              width: 960,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpg',
              uri: '/meeyland-ai/images/2024/10/20/4179637738940318_2.jpg',
              url: 'https://io.meeymedia.com/meeyland-ai/images/2024/10/20/4179637738940318_2.jpg',
              height: 720
            },
            {
              name: '4179637738940318_3.jpg',
              width: 960,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpg',
              uri: '/meeyland-ai/images/2024/10/20/4179637738940318_3.jpg',
              url: 'https://io.meeymedia.com/meeyland-ai/images/2024/10/20/4179637738940318_3.jpg',
              height: 720
            },
            {
              name: '4179637738940318_4.jpg',
              width: 960,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpg',
              uri: '/meeyland-ai/images/2024/10/20/4179637738940318_4.jpg',
              url: 'https://io.meeymedia.com/meeyland-ai/images/2024/10/20/4179637738940318_4.jpg',
              height: 720
            },
            {
              name: '4179637738940318_5.jpg',
              width: 960,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpg',
              uri: '/meeyland-ai/images/2024/10/20/4179637738940318_5.jpg',
              url: 'https://io.meeymedia.com/meeyland-ai/images/2024/10/20/4179637738940318_5.jpg',
              height: 720
            },
            {
              name: '4179637738940318_6.jpg',
              width: 960,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpg',
              uri: '/meeyland-ai/images/2024/10/20/4179637738940318_6.jpg',
              url: 'https://io.meeymedia.com/meeyland-ai/images/2024/10/20/4179637738940318_6.jpg',
              height: 720
            },
            {
              name: '4179637738940318_7.jpg',
              width: 960,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpg',
              uri: '/meeyland-ai/images/2024/10/20/4179637738940318_7.jpg',
              url: 'https://io.meeymedia.com/meeyland-ai/images/2024/10/20/4179637738940318_7.jpg',
              height: 720
            },
            {
              name: '4179637738940318_8.jpg',
              width: 720,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpg',
              uri: '/meeyland-ai/images/2024/10/20/4179637738940318_8.jpg',
              url: 'https://io.meeymedia.com/meeyland-ai/images/2024/10/20/4179637738940318_8.jpg',
              height: 960
            },
            {
              name: '4179637738940318_9.jpg',
              width: 960,
              description: null,
              mediaType: 1,
              mimeType: 'image/jpg',
              uri: '/meeyland-ai/images/2024/10/20/4179637738940318_9.jpg',
              url: 'https://io.meeymedia.com/meeyland-ai/images/2024/10/20/4179637738940318_9.jpg',
              height: 720
            }
          ],
          isCrawl: false,
          isTourDisplayed: false,
          title: 'Bán nhà riêng quận Thủ Đức thành phố Hồ Chí Minh giá 8.0 tỷ',
          createdAt: '2024-10-20T02:34:19.041Z',
          totalBathroom: 2,
          contact: {
            fullName: 'Huy Bình Townhouse',
            phones: ['0568134891'],
            email: ''
          },
          floorNumber: null,
          area: 83,
          thumbnail: {
            size: 161844,
            name: '4179637738940318_0.jpg',
            width: 960,
            mimeType: 'image/jpg',
            uri: '/meeyland-ai/images/2024/10/20/4179637738940318_0.jpg',
            url: 'https://io.meeymedia.com/meeyland-ai/images/2024/10/20/4179637738940318_0.jpg',
            height: 720
          },
          publishedAt: '2024-10-23T16:57:44.989Z',
          tour: null,
          totalBedroom: 2,
          totalPoint: 5.615384615384615,
          depth: null,
          isBoughtElectron: false,
          createdBy: {
            _id: '6114ec214113a18775e36625',
            name: 'Tài khoản Tin Crawl (system)',
            email: 'contact@meeyland.com',
            phone: '0000000000',
            avatar: null,
            status: 1,
            phoneVerified: true,
            emailVerified: true
          },
          district: {
            code: '762',
            translation: [
              {
                prefix: 'Quận',
                name: 'Thủ Đức',
                languageCode: 'vi'
              }
            ],
            _id: '5e5501cbeb80a7245175e045',
            slug: 'thu-duc'
          },
          totalFloor: 2,
          category: {
            name: 'Mua bán',
            _id: '5deb722db4367252525c1d00',
            slugIncludeTypeOfHouse: 'ban',
            value: 'mua_ban',
            uri: '/mua-ban-nha-dat-a4',
            slug: 'mua-ban-nha-dat'
          },
          totalBalcony: null,
          userTypesLabel: 'Môi giới',
          addressLabel: 'Q. Thủ Đức, Tp. Hồ Chí Minh',
          priceLabel: {
            totalPrice: '8 tỷ',
            subTotalPrice: '96,39 tr/m²'
          },
          uri: '/ban-nha-rieng-thu-duc-ho-chi-minh-i1223/301995074'
        }
      ],
      totalResults: 268235,
      totalPages: 8942,
      page: 1,
      limit: 30
    }
  }

  console.log('data.......', data?.data?.results?.length)

  // const slides =

  const articles = data?.data?.results?.map((article: any) => {
    return {
      ...article,
      mediaSlides: (article?.media || []).map((item: any) => {
        console.log(item)
        return {
          src: item.uri
            ? resizeOnFlyUrl({
                uri: item.uri,
                width: 286,
                height: 192
              })
            : item.url,
          alt: item.description ?? ''
        }
      })
    }
  })

  return {
    articles: articles
  }
}
