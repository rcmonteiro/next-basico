'use client'

import Link from "next/link"
import { useRouter } from 'next/navigation'

const Main = () => {
  const router = useRouter()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Rotas...</h1>
      <div className="flex flex-row gap-2">
        <div className="grid grid-cols-1 gap-2 striped ">
          <Link href="/rotas/outraRota">
            <div className="rounded-md px-4 py-2 bg-slate-300">Outra Rota qualquer</div>
          </Link>
          <Link href="/rotas/query-params?search=qualquer coisa">
            <div className="rounded-md px-4 py-2 bg-slate-300">Usando query params</div>
          </Link>
          <Link href="/rotas/123/qualquer-coisa">
            <div className="rounded-md px-4 py-2 bg-slate-300">Usando [router]</div>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-2 striped ">
          <button onClick={() => router.push('/rotas/outraRota')} className="rounded-md px-4 py-2 bg-slate-300">Outra Rota qualquer</button>
          <button onClick={() => router.push('/rotas/query-params?search=qualquer coisa')} className="rounded-md px-4 py-2 bg-slate-300">Usando query params</button>
          <button onClick={() => router.push('/rotas/123/qualquer-coisa')} className="rounded-md px-4 py-2 bg-slate-300">Usando [router]</button>
        </div>
      </div>
      
    </main>
  )
}
export default Main