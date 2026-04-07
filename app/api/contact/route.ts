import nodemailer from "nodemailer";
import { siteConfig } from "../../siteConfig";

export const runtime = "nodejs";

type ContactPayload = {
  fullName?: unknown;
  email?: unknown;
  phone?: unknown;
  projectType?: unknown;
  projectLocation?: unknown;
  timeline?: unknown;
  projectDescription?: unknown;
};

const getText = (value: unknown) => (typeof value === "string" ? value.trim() : "");
const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character] ?? character
  );

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ message: "Invalid form submission." }, { status: 400 });
  }

  const fullName = getText(payload.fullName);
  const email = getText(payload.email);
  const phone = getText(payload.phone);
  const projectType = getText(payload.projectType);
  const projectLocation = getText(payload.projectLocation);
  const timeline = getText(payload.timeline);
  const projectDescription = getText(payload.projectDescription);

  if (!fullName || !email || !phone || !projectType || !projectDescription) {
    return Response.json(
      { message: "Please complete the required fields." },
      { status: 400 }
    );
  }

  const smtpHost = process.env.SMTP_HOST ?? "smtp.hostinger.com";
  const smtpPort = Number(process.env.SMTP_PORT ?? 465);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const mailTo = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  const mailFrom = process.env.SMTP_FROM ?? smtpUser;

  if (!smtpUser || !smtpPass || !mailFrom) {
    return Response.json(
      { message: "Mail server is not configured yet." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const submittedAt = new Intl.DateTimeFormat("en-AU", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Australia/Melbourne",
  }).format(new Date());

  const text = [
    "New quote request from Elite Finish website",
    "",
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Project type: ${projectType}`,
    `Project location: ${projectLocation || "Not provided"}`,
    `Timeline: ${timeline || "Not provided"}`,
    "",
    "Project description:",
    projectDescription,
    "",
    `Submitted: ${submittedAt}`,
  ].join("\n");

  const customerText = [
    `Hi ${fullName},`,
    "",
    "Thank you for contacting Elite Finish Painting Service.",
    "We have received your quote request and will be contacting you shortly.",
    "",
    "Your submitted details:",
    `Project type: ${projectType}`,
    `Project location: ${projectLocation || "Not provided"}`,
    `Timeline: ${timeline || "Not provided"}`,
    "",
    "Project description:",
    projectDescription,
    "",
    `Regards,`,
    "Elite Finish Painting Service",
    siteConfig.phoneDisplay,
    siteConfig.email,
  ].join("\n");

  const customerHtml = `
    <!doctype html>
    <html lang="en">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Thank you for contacting ${escapeHtml(siteConfig.businessName)}</title>
      </head>
      <body style="margin:0; padding:0; background:#F8FAFC; color:#1E293B; font-family:Arial, Helvetica, sans-serif;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#F8FAFC; margin:0; padding:32px 16px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="width:100%; max-width:680px; overflow:hidden; border-radius:24px; background:#FFFFFF; border:1px solid #E2E8F0; box-shadow:0 24px 70px rgba(20,43,88,0.12);">
                <tr>
                  <td style="padding:0; background:#142B58;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="padding:34px 34px 28px;">
                          <div style="display:inline-block; margin-bottom:22px; padding:8px 12px; border-radius:999px; background:rgba(245,166,35,0.14); color:#F5A623; font-size:11px; font-weight:800; letter-spacing:2px; text-transform:uppercase;">
                            Quote Request Received
                          </div>
                          <h1 style="margin:0; color:#FFFFFF; font-size:34px; line-height:1.12; font-weight:800; letter-spacing:-0.5px;">
                            Thank you, ${escapeHtml(fullName)}.
                          </h1>
                          <p style="max-width:520px; margin:16px 0 0; color:rgba(255,255,255,0.78); font-size:16px; line-height:1.7;">
                            We have received your painting quote request. Our team will review the details and contact you shortly.
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="padding:34px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate; border-spacing:0 12px;">
                      <tr>
                        <td colspan="2" style="padding:0 0 6px;">
                          <h2 style="margin:0; color:#142B58; font-size:22px; line-height:1.3; font-weight:800;">
                            Your Project Details
                          </h2>
                        </td>
                      </tr>
                      <tr>
                        <td style="width:42%; padding:16px; border-radius:14px 0 0 14px; background:#F8FAFC; color:#64748B; font-size:12px; font-weight:800; letter-spacing:1.5px; text-transform:uppercase;">Project Type</td>
                        <td style="padding:16px; border-radius:0 14px 14px 0; background:#F8FAFC; color:#142B58; font-size:15px; font-weight:800;">${escapeHtml(projectType)}</td>
                      </tr>
                      <tr>
                        <td style="width:42%; padding:16px; border-radius:14px 0 0 14px; background:#F8FAFC; color:#64748B; font-size:12px; font-weight:800; letter-spacing:1.5px; text-transform:uppercase;">Location</td>
                        <td style="padding:16px; border-radius:0 14px 14px 0; background:#F8FAFC; color:#142B58; font-size:15px; font-weight:800;">${escapeHtml(projectLocation || "Not provided")}</td>
                      </tr>
                      <tr>
                        <td style="width:42%; padding:16px; border-radius:14px 0 0 14px; background:#F8FAFC; color:#64748B; font-size:12px; font-weight:800; letter-spacing:1.5px; text-transform:uppercase;">Timeline</td>
                        <td style="padding:16px; border-radius:0 14px 14px 0; background:#F8FAFC; color:#142B58; font-size:15px; font-weight:800;">${escapeHtml(timeline || "Not provided")}</td>
                      </tr>
                    </table>

                    <div style="margin-top:20px; padding:22px; border-left:4px solid #F5A623; border-radius:16px; background:#FFF8EA;">
                      <p style="margin:0 0 10px; color:#142B58; font-size:12px; font-weight:800; letter-spacing:1.5px; text-transform:uppercase;">
                        Project Description
                      </p>
                      <p style="margin:0; color:#1E293B; font-size:15px; line-height:1.7; white-space:pre-wrap;">${escapeHtml(projectDescription)}</p>
                    </div>

                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top:30px;">
                      <tr>
                        <td style="padding:24px; border-radius:18px; background:#142B58;">
                          <p style="margin:0 0 12px; color:#FFFFFF; font-size:18px; line-height:1.4; font-weight:800;">
                            Need to add anything?
                          </p>
                          <p style="margin:0 0 18px; color:rgba(255,255,255,0.72); font-size:14px; line-height:1.6;">
                            Reply to this email or call us directly and we will add it to your request.
                          </p>
                          <a href="${siteConfig.phoneHref}" style="display:inline-block; margin-right:10px; padding:12px 18px; border-radius:999px; background:#F5A623; color:#142B58; font-size:12px; font-weight:800; letter-spacing:1.5px; text-decoration:none; text-transform:uppercase;">
                            Call ${escapeHtml(siteConfig.phoneDisplay)}
                          </a>
                          <a href="${siteConfig.emailHref}" style="display:inline-block; padding:12px 18px; border-radius:999px; border:1px solid rgba(255,255,255,0.25); color:#FFFFFF; font-size:12px; font-weight:800; letter-spacing:1.5px; text-decoration:none; text-transform:uppercase;">
                            Email Us
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="padding:24px 34px 32px; border-top:1px solid #E2E8F0; background:#FFFFFF;">
                    <p style="margin:0; color:#142B58; font-size:16px; font-weight:800;">
                      ${escapeHtml(siteConfig.businessName)}
                    </p>
                    <p style="margin:8px 0 0; color:#64748B; font-size:13px; line-height:1.6;">
                      ${escapeHtml(siteConfig.addressSingleLine)}<br />
                      <a href="${siteConfig.emailHref}" style="color:#008080; text-decoration:none;">${escapeHtml(siteConfig.email)}</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  try {
    await transporter.sendMail({
      from: `"Elite Finish Website" <${mailFrom}>`,
      to: mailTo,
      replyTo: email,
      subject: `New quote request from ${fullName}`,
      text,
    });

    await transporter.sendMail({
      from: `"Elite Finish Painting Service" <${mailFrom}>`,
      to: email,
      replyTo: mailFrom,
      subject: "Thank you for contacting Elite Finish Painting Service",
      text: customerText,
      html: customerHtml,
    });
  } catch (error) {
    console.error("Contact form email failed", error);
    return Response.json(
      { message: "We could not send the request right now. Please call or email us directly." },
      { status: 502 }
    );
  }

  return Response.json({ message: "Your request has been sent." });
}
