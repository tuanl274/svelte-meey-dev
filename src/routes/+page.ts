import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params }) => {
  console.time('init')
  const response = await fetch(
    'https://api-meeyland.meey.dev/v1/articles/300064091',
    {
      method: 'GET',
      headers: {
        'x-tenant': btoa('meeyland')
      }
    }
  )
  const data = await response?.json()

  console.timeEnd('init')

  return {
    article: data?.data,
    largeImage: 'https://placehold.co/737x422.webp',
    smallImage: 'https://placehold.co/172x118.webp',
    slides: [
      {
        src: 'https://image.meeyland.com/meeyland/images/2024/10/10/z5914938049056b0e52f474fb368f5c0f8db1a51c2dcdc-1728544185262-590104.jpg?rt=fill&w=737&h=422&q=100&dpr=1&g=ce&wmo=0.8&wmg=sowe&wmx=16&wmy=16&wms=0.25&s=xqzVF9lJQ1CQqxRbcrBq1aSW-V2wyff0Rq8Y9elEvgk',
        alt: 'image 1'
      },
      {
        src: 'https://image.meeyland.com/meeyland/images/2024/10/10/z5914938037439d0a98c69c90c1f7b189d41056791696a-1-1728544190154-422175.jpg?rt=fill&w=737&h=422&q=100&dpr=1&g=ce&wmo=0.8&wmg=sowe&wmx=16&wmy=16&wms=0.25&s=vJjhq6S5pow038-DBxEiDpixdIOVGKjYfz_2u8BGSPM',
        alt: 'image 1'
      },
      {
        src: 'https://image.meeyland.com/meeyland/images/2024/10/10/z5914933482573b02e4cfe65f8a6a312697d07a9ac468d-1728544196140-055360.jpg?rt=fill&w=737&h=422&q=100&dpr=1&g=ce&wmo=0.8&wmg=sowe&wmx=16&wmy=16&wms=0.25&s=44DR89btFN00x9kTYID8dYZm8RnhVj9YLDQv42EvbRU',
        alt: 'image 1'
      },
      {
        src: 'https://image.meeyland.com/meeyland/images/2024/10/10/z5914938004320e683c684ebd5295d87522254f7988322-1-1728544201237-946294.jpg?rt=fill&w=737&h=422&q=100&dpr=1&g=ce&wmo=0.8&wmg=sowe&wmx=16&wmy=16&wms=0.25&s=YywwaIehKNIKQQ7bD6kf7-5EaLGcUg2lnYFF7isl6pQ',
        alt: 'image 1'
      },
      {
        src: 'https://image.meeyland.com/meeyland/images/2024/10/10/z591493798220657c2284d5673691067a8ff83cac33bab-1728544208950-074489.jpg?rt=fill&w=737&h=422&q=100&dpr=1&g=ce&wmo=0.8&wmg=sowe&wmx=16&wmy=16&wms=0.25&s=-MbFwpIVBH-aTiinnhKErbHLtbtmDDqPR9qcL-Wp4o8',
        alt: 'image 1'
      }
    ]
  }
}
