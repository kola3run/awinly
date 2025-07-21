import { NextResponse } from 'next/server';

let listings = [];

export async function GET() {
  return NextResponse.json(listings);
}

export async function POST(request) {
  const data = await request.json();
  listings.push(data);
  return NextResponse.json({ success: true });
}