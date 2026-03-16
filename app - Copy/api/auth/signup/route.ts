import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'users.json');

export async function POST(request: Request) {
  try {
    const { fullName, email, password } = await request.json();

    if (!email || !password || (!fullName && request.url.includes('signup'))) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const fileData = fs.readFileSync(DB_PATH, 'utf8');
    const users = JSON.parse(fileData);

    // Check if user exists
    if (users.find((u: any) => u.email === email)) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    const newUser = {
      id: Date.now().toString(),
      fullName,
      email,
      password, // In a real app, hash this!
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    fs.writeFileSync(DB_PATH, JSON.stringify(users, null, 2));

    console.log(`New user registered: ${email}`);

    return NextResponse.json({ message: 'User created successfully', user: { email, fullName } });
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
