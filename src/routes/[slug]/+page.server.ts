import { resizeOnFlyUrl } from '$lib/utils/image'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
  console.time('init')
  const response = await fetch(`https://api5.meeyland.com/v1/articles/search`, {
    method: 'POST',
    headers: {
      'x-tenant': btoa('meeyland'),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      category: '5deb722db4367252525c1d00'
    })
  })

  const data = await response?.json()

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
