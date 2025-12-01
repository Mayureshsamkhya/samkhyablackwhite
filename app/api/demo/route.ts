import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { DemoRequest } from '@/models/DemoRequest';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, fundType, fundSize } = body;

    // Connect to MongoDB
    await connectDB();

    // Create demo request
    await DemoRequest.create({
      name,
      email,
      company,
      fundType,
      fundSize,
    });

    // Calendly functionality temporarily disabled
    /*
    // Generate Calendly link with pre-filled information
    const calendlyLink = `https://calendly.com/YOUR_CALENDLY_USERNAME?email=${encodeURIComponent(email)}&name=${encodeURIComponent(name)}&custom1=${encodeURIComponent(company)}&custom2=${encodeURIComponent(fundType)}&custom3=${encodeURIComponent(fundSize)}`;

    // Update demo request with Calendly link
    await DemoRequest.findByIdAndUpdate(demoRequest._id, {
      calendlyLink,
    });
    */

    return NextResponse.json(
      { 
        success: true, 
        message: 'Demo request created successfully',
        // calendlyLink 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating demo request:', error);
    return NextResponse.json(
      { success: false, message: 'Error creating demo request' },
      { status: 500 }
    );
  }
} 