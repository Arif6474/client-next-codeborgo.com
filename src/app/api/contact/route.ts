import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, message } = body;

    // Server-side validation
    if (!name || !name.trim()) {
      return NextResponse.json({ error: "Full Name is required" }, { status: 400 });
    }
    if (!email || !email.trim()) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 });
    }
    if (!service) {
      return NextResponse.json({ error: "Please select a service" }, { status: 400 });
    }
    if (!message || !message.trim()) {
      return NextResponse.json({ error: "Message details are required" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable");
      return NextResponse.json({ error: "Email service is currently misconfigured." }, { status: 500 });
    }

    const sender = process.env.RESEND_SENDER || "Ventelli <info@megatooler.com>";
    
    // Parse recipients list
    const recipientsString = process.env.RECIPIENTS;
    if (!recipientsString) {
      console.error("Missing RECIPIENTS environment variable");
      return NextResponse.json({ error: "Email service has no recipients configured." }, { status: 500 });
    }
    const to = recipientsString.split(",").map(email => email.trim()).filter(Boolean);
    if (to.length === 0) {
      console.error("Parsed RECIPIENTS list is empty");
      return NextResponse.json({ error: "Email service has no valid recipients configured." }, { status: 500 });
    }

    // Initialize Resend client
    const resend = new Resend(apiKey);

    // Send email
    const { data, error } = await resend.emails.send({
      from: sender,
      to: to,
      subject: `New Inquiry from ${name} - ${service}`,
      text: `
New Inquiry Received:

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}
Service Category: ${service}

Message:
${message}
      `,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px; border: 1px solid #1a1a1a; border-radius: 16px; background-color: #050505; color: #ffffff;">
          <div style="border-bottom: 1px solid #1a1a1a; padding-bottom: 16px; margin-bottom: 24px;">
            <h1 style="font-size: 20px; font-weight: 700; margin: 0; color: #ffffff; letter-spacing: -0.02em;">New Agency Inquiry</h1>
            <p style="font-size: 12px; font-family: monospace; margin: 4px 0 0 0; color: #666666; text-transform: uppercase; letter-spacing: 0.15em;">Ventelli Venezia</p>
          </div>
          
          <div style="margin-bottom: 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 6px 0; font-size: 12px; font-family: monospace; color: #666666; text-transform: uppercase; tracking-wider; width: 120px; vertical-align: top;">Name</td>
                <td style="padding: 6px 0; font-size: 14px; color: #ffffff; font-weight: 500; vertical-align: top;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-size: 12px; font-family: monospace; color: #666666; text-transform: uppercase; tracking-wider; vertical-align: top;">Email</td>
                <td style="padding: 6px 0; font-size: 14px; color: #ffffff; vertical-align: top;"><a href="mailto:${email}" style="color: #06b6d4; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-size: 12px; font-family: monospace; color: #666666; text-transform: uppercase; tracking-wider; vertical-align: top;">Company</td>
                <td style="padding: 6px 0; font-size: 14px; color: #a3a3a3; vertical-align: top;">${company || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-size: 12px; font-family: monospace; color: #666666; text-transform: uppercase; tracking-wider; vertical-align: top;">Service</td>
                <td style="padding: 6px 0; font-size: 14px; color: #ffffff; font-weight: 500; vertical-align: top;">${service}</td>
              </tr>
            </table>
          </div>
          
          <div style="margin-top: 32px; padding: 20px; background-color: #0a0a0a; border: 1px solid #141414; border-radius: 12px;">
            <p style="margin: 0 0 8px 0; font-size: 11px; font-family: monospace; color: #525252; text-transform: uppercase; letter-spacing: 0.1em;">Message Details</p>
            <p style="margin: 0; font-size: 13px; line-height: 1.6; color: #e5e5e5; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 32px; border-top: 1px solid #1a1a1a; padding-top: 16px; text-align: center;">
            <p style="margin: 0; font-size: 11px; color: #404040;">This inquiry was sent automatically from the CodeBorgo website contact form.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error: error.message || "Failed to send email inquiry." }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Contact API route exception:", error);
    return NextResponse.json({ error: error.message || "Internal server error." }, { status: 500 });
  }
}
