import { useEffect } from 'react'
import useSWR from 'swr'

async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init)
  return res.json()
}

interface Views {
  slug: string
  total?: string
}

const ViewCounter: React.FC<Views> = ({ slug }) => {
  const { data } = useSWR<Views>(`/api/view/${slug}`, fetcher)
  const views = new Number(data?.total)

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/view/${slug}`, {
        method: 'POST',
      })

    registerView()
  }, [slug])

  return <span>{`${views > 0 ? views.toLocaleString() : '---'} views`}</span>
}

export default ViewCounter
