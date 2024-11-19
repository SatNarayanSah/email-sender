const fs = require('fs');
const path = require('path');

const generatePdf = async (userName) => {
  try {
    // Paths for assets
    const logoPath = path.join(__dirname, '../assets/logo.png');
    const signaturePath = path.join(__dirname, '../assets/signature-nandani.jpg');

    // Check if the assets exist
    if (!fs.existsSync(logoPath)) {
      throw new Error(`Logo image not found at: ${logoPath}`);
    }
    if (!fs.existsSync(signaturePath)) {
      throw new Error(`Signature image not found at: ${signaturePath}`);
    }

    // Read images and encode in Base64
    const logoBase64 = fs.readFileSync(logoPath, { encoding: 'base64' });
    const signatureBase64 = fs.readFileSync(signaturePath, { encoding: 'base64' });

    // HTML template
    const htmlTemplate = `
   <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Acceptance Letter</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 20px;
      line-height: 1.6;
      background-color: #f4f4f4;
    }
    .container {
      max-width: 100%;
      margin: 20px auto;
      background: #fff;
      padding: 30px;
      border: 1px solid #ddd;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .header {
      text-align: center;
      margin-bottom: 30px;
    }
    .header img {
      max-width: 120px;
      margin-bottom: 10px;
    }
    .header h1 {
      font-size: 28px;
      color: #2b5fbf;
      margin: 0;
    }
    .header p {
      font-size: 16px;
      color: #555;
    }
    .content p {
      margin: 15px 0;
    }
    .highlight {
      color: #2b5fbf;
      font-weight: bold;
    }
    .details {
      margin-top: 20px;
      padding: 15px;
      background-color: #f2f7ff;
      border: 1px solid #2b5fbf;
      border-radius: 5px;
    }
    .details p {
      margin: 10px 0;
      font-size: 14px;
    }
    .footer {
      margin-top: 40px;
      text-align: left;
    }
    .signature-section {
      display: flex;
      justify-content: flex-end;
    }
    .signature {
      text-align: center;
    }
    .signature img {
      max-width: 70px;
      margin-bottom: 5px;
    }
    .signature p {
      margin: 5px 0;
      font-size: 17px;
    }
    .footer p {
      color: #555;
      font-size: 15px;
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header Section -->
    <div class="header">
      <img src="data:image/png;base64,${logoBase64}" alt="Janakpur Hackathon Logo">
      <h1>Janakpur Hackathon Acceptance Letter</h1>
      <p>2024-11-23 | Janak Chowk, Janakpur</p>
    </div>

    <!-- Content Section -->
    <div class="content">
      <p>Dear <span class="highlight">${userName}</span>,</p>
      <p>Congratulations on your acceptance to the <span class="highlight">Janakpur Hackathon 2024</span>!</p>
      <p>
        We are thrilled to inform you that your application has been reviewed and accepted. We can't wait to see the
        innovative ideas you'll bring to life in this exciting event. Your creativity and expertise will be a valuable
        addition to the hackathon.
      </p>
      <div class="details">
        <p><strong>Date:</strong> November 23, 2024</p>
        <p><strong>Arrival Time:</strong> 7:00 AM</p>
        <p><strong>Location:</strong> Janakpur Tech Bootcamp Office, Janak Chowk, Janakpur</p>
      </div>
      <p>
        We encourage you to prepare your tools and ideas in advance. Remember to bring your laptop and charger.
        Mentors will be present throughout the event to provide guidance.
      </p>
      <p>
        This will be a day filled with innovation, teamwork, and learning. We look forward to your contributions and
        wish you the best for a fantastic hackathon experience!
      </p>
    </div>

    <!-- Footer Section -->
    <div class="footer">
      <p>Best Regards,</p>
      <div class="signature-section">
        <div class="signature">
          <img src="data:image/png;base64,${signatureBase64}" alt="Signature">
          <p><strong>Nandani Sah</strong></p>
          <p>Event Coordinator</p>
          <p>Janakpur Hackathon</p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

    return htmlTemplate;
  } catch (error) {
    console.error(`Error generating PDF template: ${error.message}`);
    throw error; // Rethrow to notify the caller of the error
  }
};

module.exports = generatePdf;
