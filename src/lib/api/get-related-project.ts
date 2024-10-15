export const getRelatedProject = async (code: string) => {
  const response = await fetch(
    `https://api5.meeyland.com/v1/articles/${code}`,
    {
      method: 'GET',
      headers: {
        'x-tenant': btoa('meeyland')
      }
    }
  )
  const data = await response?.json()

  return data
}
