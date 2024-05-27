export const baseUrl = 'https://jsonplaceholder.typicode.com'

export const api = {
  get: async <Res>(url: string, opts?: RequestInit): Promise<Res> => {
    try {
      const res = await fetch(baseUrl + url, {
        method: 'GET',
        ...opts,
      })

      if (!res.ok) {
        throw new Error(`Request failed`)
      }

      return await res.json()
    } catch (e) {
      throw new Error(`Request failed with error: ${e}`)
    }
  },
}
