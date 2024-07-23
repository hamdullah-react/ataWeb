// app/api/auth/check/route.js
import { NextResponse } from 'next/server';

export async function GET(request) {
  const auth = request.cookies.get('auth');
  if (auth === 'true') {
    return NextResponse.json({ authenticated: true });
  } else {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}