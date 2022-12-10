import { DEFAULT_HEADERS } from '~/services'

export const useFetch = async (url: string) => {
  const res = await fetch(url, {
    headers: DEFAULT_HEADERS,
  })

  const data = await res.json()

  return data
}
