import type { Handle, Reroute } from '@sveltejs/kit'

const redirects = {
  '/docs/amp': '/docs/seo#manual-setup-amp',
  '/docs/assets': '/docs/images',
  '/docs/typescript': '/docs/types'
}

const preload_types = ['js', 'css', 'font']

/** @type {import('@sveltejs/kit').Handle} */
export function handle({ event, resolve }) {
 


  return resolve(event, {
    preload: ({ type }) => preload_types.includes(type)
  })
}

export const reroute: Reroute = ({ url }) => {
  const pathname = url.pathname

  const regex = /\/([a-z0-9_-]+)-([a-z0-9]+)\/([0-9]{9,13})/
  if (regex.test(pathname)) {
    // Extract the slug from the matched URL
    const slug = pathname.match(regex)?.[3]

    console.log('slug.......', slug) // Redirect to the new URL pattern
    // return Response.redirect(`/article/${slug}`, 301) // Permanent redirect
    return `/article/${slug}`
  }

  return url.pathname
}

