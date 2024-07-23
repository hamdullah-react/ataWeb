// app/api/login/route.js
import { NextResponse } from 'next/server';
import prisma from '@/app/api/lib/dbconnection';
import bcrypt from 'bcryptjs';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user && bcrypt.compareSync(password, user.password)) {
      const response = NextResponse.json({ message: 'Login successful' });
      response.cookies.set('auth', 'true', { path: '/', maxAge: 3600 }); // Adjust maxAge as needed
      return response;
    } else {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
