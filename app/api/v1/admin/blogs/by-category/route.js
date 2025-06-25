import { NextResponse } from 'next/server';

export async function GET(request) {
  return NextResponse.json({ message: "This is an empty GET API" });
}