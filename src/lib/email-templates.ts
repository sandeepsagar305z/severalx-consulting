interface AdminEmailData {
  name: string
  email: string
  phone: string
  service: string
  message: string
  timestamp: string
}

interface AutoResponseData {
  name: string
  email: string
  phone: string
  service: string
  message: string
  timestamp: string
  responseTime: string
  companyPhone: string
  companyWebsite: string
  calendarLink: string
}

export function generateAdminEmailTemplate(data: AdminEmailData): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; }
        .header { background-color: #1a365d; color: white; padding: 20px; text-align: center; }
        .content { background-color: white; padding: 30px; border-radius: 8px; margin: 20px 0; }
        .field { margin-bottom: 15px; }
        .field-label { font-weight: bold; color: #1a365d; }
        .field-value { background-color: #f8f9fa; padding: 10px; border-radius: 4px; margin-top: 5px; }
        .message-section { margin-top: 20px; }
        .message-content { background-color: #f8f9fa; padding: 15px; border-radius: 4px; white-space: pre-wrap; }
        .footer { text-align: center; color: #666; font-size: 12px; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Severalx Consulting - New Contact Form Submission</h1>
          <p>Received on: ${data.timestamp}</p>
        </div>

        <div class="content">
          <div class="field">
            <div class="field-label">Name:</div>
            <div class="field-value">${data.name}</div>
          </div>

          <div class="field">
            <div class="field-label">Email:</div>
            <div class="field-value"><a href="mailto:${data.email}">${data.email}</a></div>
          </div>

          <div class="field">
            <div class="field-label">Phone:</div>
            <div class="field-value">${data.phone}</div>
          </div>

          <div class="field">
            <div class="field-label">Service Interest:</div>
            <div class="field-value">${data.service}</div>
          </div>

          <div class="message-section">
            <div class="field-label">Message:</div>
            <div class="message-content">${data.message}</div>
          </div>
        </div>

        <div class="footer">
          <p>This email was generated from the Severalx Consulting contact form.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

export function generateAutoResponseTemplate(data: AutoResponseData): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank you for contacting Severalx Consulting</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; }
        .header { background-color: #1a365d; color: white; padding: 30px 20px; text-align: center; }
        .content { background-color: white; padding: 30px; border-radius: 8px; margin: 20px 0; }
        .welcome-message { font-size: 18px; margin-bottom: 20px; }
        .response-info { background-color: #e6f3ff; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #1a365d; }
        .contact-info { background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin: 20px 0; }
        .contact-item { margin-bottom: 10px; }
        .contact-label { font-weight: bold; color: #1a365d; }
        .cta-button { display: inline-block; background-color: #1a365d; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
        .footer { text-align: center; color: #666; font-size: 12px; margin-top: 20px; }
        .original-message { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; }
        .original-message h4 { color: #1a365d; margin-bottom: 10px; }
        .message-content { background-color: #f8f9fa; padding: 15px; border-radius: 4px; white-space: pre-wrap; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thank You for Contacting Severalx Consulting!</h1>
          <p>We appreciate your interest in our consulting services</p>
        </div>

        <div class="content">
          <div class="welcome-message">
            Dear ${data.name},
          </div>

          <p>Thank you for reaching out to Severalx Consulting. We have received your message and appreciate you taking the time to contact us.</p>

          <div class="response-info">
            <h3>What happens next?</h3>
            <p>Our team will review your inquiry and get back to you ${data.responseTime}. We'll provide a thoughtful response to your specific needs regarding ${data.service}.</p>
          </div>

          <div class="contact-info">
            <h3>In the meantime, feel free to reach out directly:</h3>
            <div class="contact-item">
              <span class="contact-label">Phone:</span> ${data.companyPhone}
            </div>
            <div class="contact-item">
              <span class="contact-label">Email:</span> <a href="mailto:info@severalx.com">info@severalx.com</a>
            </div>
            <div class="contact-item">
              <span class="contact-label">Website:</span> <a href="${data.companyWebsite}" target="_blank">${data.companyWebsite}</a>
            </div>
          </div>

          <div style="text-align: center;">
            <a href="${data.calendarLink}" class="cta-button">Schedule a Consultation</a>
          </div>

          <div class="original-message">
            <h4>Your Original Message:</h4>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Service:</strong> ${data.service}</p>
            <div class="message-content">${data.message}</div>
            <p><em>Submitted on: ${data.timestamp}</em></p>
          </div>
        </div>

        <div class="footer">
          <p>This is an automated response. Please do not reply to this email.</p>
          <p>Severalx Consulting | ${data.companyWebsite}</p>
        </div>
      </div>
    </body>
    </html>
  `
}
