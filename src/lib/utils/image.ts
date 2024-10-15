import {
  RESIZE_DOMAIN,
  RESIZE_KEY,
  RESIZE_MEEY_ID_DOMAIN,
  RESIZE_SALT
} from '$env/static/private'
import type { IResizeOnFlyOption } from 'Models'

// import { sign } from './crypto'
import { signHash } from './hash'

export const RESIZE_IMAGE_SUPPORT = /\.(jpg|jpeg|png)$/i

export const resizeOnFlyUrl = (resizeBody: IResizeOnFlyOption) => {
  const {
    uri = 'meeyland-test/images/2024/05/23/image-20-1716468820066.jpg',
    resizingType = 'fill',
    width = 0,
    height = 0,
    gravity = 'ce',
    watermark = false,
    quality = 100,
    resizeDomain
  } = resizeBody || {}

  // https://docs.imgproxy.net/usage/processing#watermark
  const wmOpacity = '0.8' // 80%
  const wmPosition = 'sowe' //south-west (bottom-left corner)
  const wmXOffset = '16'
  const wmYOffset = '16'
  const wmScale = '0.25'
  const dpr = '1'

  const resizeType =
    resizingType === 'crop' ? resizingType : `rs:${resizingType}`

  const resizing_type_query_string = resizeType.replace('rs:', '')

  const domain = RESIZE_DOMAIN

  const sourceImage = `s3:/${uri}`

  let pathGenerate = `/${resizeType}:${width}:${height}/q:${quality}/dpr:${dpr}/g:${gravity}`
  let imageUrl = `${domain}${uri}?rt=${resizing_type_query_string}&w=${width}&h=${height}&q=${quality}&dpr=${dpr}&g=${gravity}`
  if (watermark) {
    pathGenerate += `/wm:${wmOpacity}:${wmPosition}:${wmXOffset}:${wmYOffset}:${wmScale}`
    imageUrl += `&wmo=${wmOpacity}&wmg=${wmPosition}&wmx=${wmXOffset}&wmy=${wmYOffset}&wms=${wmScale}`
  }
  pathGenerate += `/plain/${sourceImage}`

  const signature = signHash(RESIZE_SALT, pathGenerate, RESIZE_KEY)

  return `${imageUrl}&s=${signature}`
}
