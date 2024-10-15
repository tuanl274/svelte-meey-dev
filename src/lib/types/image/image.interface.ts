declare module 'Models' {
  export interface BaseResizeOnFlyOption {
    width?: number
    height?: number
    resizingType?: 'fit' | 'fill' | 'auto' | 'fill-down' | 'force' | 'crop'
    gravity?:
      | 'no' // North (top edge)
      | 'so' // South (bottom edge)
      | 'ea' // East (right edge)
      | 'we' // West (left edge)
      | 'noea' // North-East (top-right corner)
      | 'nowe' // North-West (top-left corner)
      | 'soea' // South-East (bottom-right corner)
      | 'sowe' // South-West (bottom-left corner)
      | 'ce' // Center
      | 'sm' // Smart gravity. Detects the most “interesting” section of the image and considers it as the center of the resulting image.
    watermark?: boolean
    quality?: number
    dpr?: number
    resizeDomain?: string
  }

  export interface ResizeOption extends BaseResizeOnFlyOption {
    maxWidth?: number
  }

  export interface IResizeOnFlyOption extends BaseResizeOnFlyOption {
    uri: string
  }
}
