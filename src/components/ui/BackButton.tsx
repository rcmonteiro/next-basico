'use client'

import Link from "next/link"

const BackButton = () => {
  return (
    <Link href="/rotas">
      <button className="px-6 py-2 bg-slate-300 hover:bg-slate-200 rounded-md">Voltar</button>
    </Link>
  )
}
export default BackButton