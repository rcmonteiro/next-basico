import { NextResponse } from "next/server"

const people: any[] = []

const GET = async (request: Request) => {
  return NextResponse.json(people, { status: 200 })
}

const POST = async (request: Request) => {
  const person = await request.json()
  people.push(person)
  return NextResponse.json({ message: 'New user added!'}, { status: 200 })
}

export { GET, POST }