'use client'

import BackButton from '@/components/ui/BackButton'
import { useSearchParams } from 'next/navigation'

const Main = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('search') ?? 'N/A'

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>query string: {search}</h1>
      <BackButton/>
    </main>
  )
}
export default Main