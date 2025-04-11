import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New Contact Form Message from ${name}`,
      html: `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>New Contact Message</title>
            </head>
            <body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: Arial, sans-serif;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="padding: 20px 0; background-color: #f4f4f4;">
                <tr>
                  <td align="center">
                    <table role="presentation" width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                      <!-- Header Section -->
                      <tr>
                        <td align="center" style="background-color: #80ed99; padding: 20px;">
                          <h1 style="margin: 0; font-size: 24px; color: #ffffff;">New Contact Message</h1>
                        </td>
                      </tr>
                      <!-- Body Section -->
                      <tr>
                        <td style="padding: 20px; color: #333333; font-size: 16px; line-height: 1.5;">
                          <p style="margin: 0 0 10px;">You have received a new message from your contact form.</p>
                          <p style="margin: 0 0 10px;"><strong>Name:</strong> ${name}</p>
                          <p style="margin: 0 0 10px;"><strong>Email:</strong> ${email}</p>
                          <p style="margin: 0 0 10px;"><strong>Message:</strong> ${message}</p>
                        </td>
                      </tr>
                      <!-- Footer Section -->
                      <tr>
                        <td align="center" style="background-color: #f4f4f4; padding: 15px;">
                          <p style="margin: 0; font-size: 14px; color: #777777;">
                            This email was sent from your portfolio contact form.
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </body>
          </html>
        `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
