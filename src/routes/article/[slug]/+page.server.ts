import { resizeOnFlyUrl } from '$lib/utils/image'
import type { PageServerLoad } from './$types'

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const load: PageServerLoad = async ({ params }) => {
  console.time('init')
  const response = await fetch(
    `https://api5.meeyland.com/v1/articles/${params.slug}`,
    {
      method: 'GET',
      headers: {
        'x-tenant': btoa('meeyland')
      }
    }
  )
  const data = await response?.json()

  console.timeEnd('init')

  const slides = (data?.data?.media || []).map((item: any) => {
    return {
      src: item.uri
        ? resizeOnFlyUrl({
            uri: item.uri,
            width: 737,
            height: 422
          })
        : item.url,
      alt: item.description ?? ''
    }
  })

  await sleep(300)

  return {
    article: data?.data,
    slides
  }
}
