export const baseUrl = 'https://jsonplaceholder.typicode.com'

export const api = {
  get: async <Res, T = unknown>(url: string, opts?: Omit<RequestInit, 'body'> & { body: T }): Promise<Res> => {
    try {
      const res = await fetch(baseUrl + url, {
        method: 'GET',
        body: opts?.body ? JSON.stringify(opts.body) : undefined,
      })

      const data: Res = await res.json()

      return data
    } catch (e) {
      throw new Error(`Request failed with error: ${e}`)
    }
  },
}
