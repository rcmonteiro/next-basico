import { NextResponse } from 'next/server'
 
const GET = async (request: Request, context: { params: any }) => {
  const id = context.params.id ?? null
  if(!id) return NextResponse.json({ error: "Error" }, { status: 500 })

  const question = {
    id: id,
    question: "Qual é a sua cor favorita?",
    answers: [
      'Azul',
      'Roxo',
      'Laranja',
      'Vermelho',
      'Amarelo'
    ]
  }

  return NextResponse.json(question, { status: 200 })
}


const POST = async () => {
  return NextResponse.json({ error: "Error" }, { status: 500 })
}

export {
  GET,
  POST
}


