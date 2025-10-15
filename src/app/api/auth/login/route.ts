import { NextRequest, NextResponse } from 'next/server';
import * as bcrypt from 'bcryptjs';

// This is a simple in-memory store - in production, you'd use a database
interface User {
  id: string;
  name: string;
  email: string;
  company: string;
  password: string;
  createdAt: string;
}

const users: User[] = [];

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
    }

    // Find user
    const user = users.find(user => user.email === email);
    if (!user) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    // In a real app, you'd create a JWT token here
    // For now, we'll just return success

    return NextResponse.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
