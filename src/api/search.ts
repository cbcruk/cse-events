import axios, { AxiosRequestConfig } from 'axios'

async function search(query: AxiosRequestConfig['params']) {
  const { data } = await axios.get(
    `https://www.googleapis.com/customsearch/v1/siterestrict`,
    {
      params: {
        key: import.meta.env.VITE_CSE_KEY,
        cx: import.meta.env.VITE_CSE_CX,
        sort: 'date',
        ...query
      }
    }
  )

  return JSON.stringify(data)
}

export default search
