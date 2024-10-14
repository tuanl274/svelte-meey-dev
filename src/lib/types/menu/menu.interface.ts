export interface MenuItem {
  key: string
  label: string
  url: string
  target?: string
  rel?: string
  subLink?: MenuItem[]
}
