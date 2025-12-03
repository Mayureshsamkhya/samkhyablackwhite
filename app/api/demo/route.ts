import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { DemoRequest } from '@/models/DemoRequest';

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const { name, email, company, fundType, fundSize } = body;
    const newDemoRequest = new DemoRequest({
      name,
      email,
      company,
      fundType,
      fundSize,
    });
    await newDemoRequest.save();
    return NextResponse.json({ success: true, data: newDemoRequest }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Server Error' }, { status: 500 });
  }
}