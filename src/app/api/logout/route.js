// app/api/logout/route.js
import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ message: 'Logout successful' });
  response.cookies.set('auth', '', { path: '/', maxAge: -1 });
  return response;
}
