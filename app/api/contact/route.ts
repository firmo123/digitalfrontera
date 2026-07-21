import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log("API called");
  try {
    const body = await request.json();
    const { name, email, business, website, message, referral } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    console.log("API Key:", apiKey);
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    console.log("Sending email to info@digitalfrontera.com");
    const { data, error: resendError } = await resend.emails.send({
      from: "Digital Frontera <info@digitalfrontera.com>",
      to: "info@digitalfrontera.com",
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        business ? `Business: ${business}` : null,
        website ? `Website: ${website}` : null,
        `\nMessage:\n${message}`,
        referral ? `\nReferral: ${referral}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (resendError) {
      console.error("Resend error:", resendError);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
