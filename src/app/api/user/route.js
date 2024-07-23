import { NextResponse } from 'next/server';

export async function GET(request) {
  const auth = request.cookies.get('auth');
  if (auth === 'true') {
    // Fetch the user information from the database or session
    // Here you would typically use your ORM or database client to get user data
    const user = { username: 'John Doe' }; // Replace with actual user fetching logic
    return NextResponse.json(user);
  } else {
    return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
  }
}