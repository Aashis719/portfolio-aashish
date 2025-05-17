import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Get the request body
    const body = await request.json();
    const { name, email, message } = body;

    // Validate the data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In a real application, you would send an email or store the message in a database
    // This is a dummy implementation
    console.log("Contact form submission:", { name, email, message });

    // Return a success response
    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request" },
      { status: 500 }
    );
  }
} 
 