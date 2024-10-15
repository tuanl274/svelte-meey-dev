import type { MenuItem } from '$lib/types/menu/menu.interface'
import type { PageLoad } from './$types'

// export const prerender = true

let configs: any = null

export const load: PageLoad = async () => {
  if (!configs) {
    console.log('fetch configs....')
    const response = await fetch('https://api5.meeyland.com/v1/configs', {
      method: 'GET',
      headers: {
        'x-tenant': btoa('meeyland')
      }
    })

    const data = await response?.json()

    configs = data?.data
  }

  return {
    mainRoutes: configs.menu?.map((cate: any) => {
      return {
        type: 'link',
        key: cate._id ?? cate.value,
        title: cate.label,
        label: cate.label,
        url: `${cate.value}`,
        target: cate.target ?? null,
        rel: cate.rel ?? null,
        subLink: cate.subMenu?.map((item: any, index: number) => ({
          type: 'link',
          key: cate._id + ` ${index}` + Math.random(),
          title: item.label,
          label: item.label,
          url: `${item.value}`,
          target: item.target ?? null,
          rel: item.rel ?? null
        }))
      }
    }) as MenuItem[]
  }
}
