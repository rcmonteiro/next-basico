import { NextResponse } from 'next/server'
 
export async function GET(request: Request, context: { params: any }) {
  return NextResponse.json({ message: 'Healthy!' }, { status: 200 })
}