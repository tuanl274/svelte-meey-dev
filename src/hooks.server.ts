import type { Handle, Reroute } from '@sveltejs/kit'

const redirects = {
  '/docs/amp': '/docs/seo#manual-setup-amp',
  '/docs/assets': '/docs/images',
  '/docs/typescript': '/docs/types'
}

const preload_types = ['js', 'css', 'font']

/** @type {import('@sveltejs/kit').Handle} */
// export function handle({ event, resolve }) {
//   const pathname = event.url.pathname
//   console.log('pathname.........', pathname)
//   const regex = /\/([a-z0-9_-]+)-([a-z0-9]+)\/([0-9]{9,13})/

//   console.log('regex.test(pathname)........', regex.test(pathname))

//   if (regex.test(pathname)) {
//     // Extract the slug from the matched URL
//     const slug = pathname.match(regex)?.[3]

//     console.log('slug.......', slug)

//     // Redirect to the new URL pattern
//     // return Response.redirect(`/article/${slug}`, 301) // Permanent redirect
//     return new Response(undefined, {
//       status: 308,
//       headers: {
//         location: `/article/${slug}`
//       }
//     })
//   }

//   // if (event.url.pathname in redirects) {
//   // 	return new Response(undefined, {
//   // 		status: 308,
//   // 		headers: {
//   // 			location: redirects[event.url.pathname]
//   // 		}
//   // 	});
//   // }

//   return resolve(event, {
//     preload: ({ type }) => preload_types.includes(type)
//   })
// }

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

export const handle: Handle = async ({ event, resolve }) => {
  const { url } = event

  // Example: Rewrite /ban-can-ho... to /article/[slug]
  // if (
  //   url.pathname.startsWith('/ban-can-ho-chung-cu-bac-tu-liem-ha-noi-i1432')
  // ) {
  //   // Modify the request URL (rewrite it)
  //   const newUrl = url.pathname.replace(
  //     '/ban-can-ho-chung-cu-bac-tu-liem-ha-noi-i1432',
  //     '/article/ban-can-ho-chung-cu-bac-tu-liem-ha-noi-i1432'
  //   )

  //   // Create a new response based on the rewritten URL
  //   const response = await resolve({
  //     ...event,
  //     url: new URL(newUrl, url.origin)
  //   })

  //   return response
  // }

  // Allow other requests to pass through
  return resolve(event)
}
