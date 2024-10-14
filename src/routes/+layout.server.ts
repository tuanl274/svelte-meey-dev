import type { PageLoad } from './$types'

export const load: PageLoad = async () => {
  console.time('configs')
  const response = await fetch('https://api-meeyland.meey.dev/v1/configs', {
    method: 'GET',
    headers: {
      'x-tenant': btoa('meeyland')
    }
  })
  const data = await response?.json()

  console.timeEnd('configs.........')
  console.log('....', data?.data?.menu)

  return {
    mainRoutes: data?.data?.menu?.map((cate: any) => {
      return {
        type: 'link',
        key: cate._id ?? cate.value,
        title: cate.label,
        label: cate.label,
        url: `${cate.value}`,
        target: cate.target ?? null,
        rel: cate.rel ?? null
        // subLink: cate.subMenu?.map((item, index) => ({
        //   type: 'link',
        //   key: cate._id + ` ${index}` + Math.random(),
        //   title: item.label,
        //   label: item.label,
        //   url: `${item.value}`,
        //   target: item.target ?? null,
        //   rel: item.rel ?? null
        // }))
      }
    })
  }
}
