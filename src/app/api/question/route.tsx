import { NextResponse } from 'next/server'
 
export async function GET(request: Request, context: { params: any }) {
  return NextResponse.json({ error: 'Not found' }, { status: 404 })
}