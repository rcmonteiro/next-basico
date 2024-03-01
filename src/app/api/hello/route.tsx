import { NextResponse } from 'next/server'
 
export async function GET(request: Request, context: { params: any }) {
  return NextResponse.json(
    [
      { name: 'John Doe!' },
      { name: 'Jane Doe!' }
    ],
    { status: 200 }
  )
}

export async function POST(request: Request, context: { params: any }) {
  return NextResponse.json(
    [
      { name: 'Luke Skywalker' },
      { name: 'Han Solo' }
    ],
    { status: 200 }
  )
}