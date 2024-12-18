const RejectionEmailTemplate = (name) => {
    return `
   <!DOCTYPE html>
<html>
<head>
  <title>Janakpur Hackathon Application Update</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 20px;
      background-color: #f4f4f4;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: #ffffff;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 20px;
      text-align: center;
    }
    .header {
      text-align: center;
      margin-bottom: 20px;
    }
    .header h1 {
      color: #3c5573; /* Red for rejection */
    }
    .content {
      text-align: left;
      margin: 20px 0;
    }
    .content p {
      margin-bottom: 15px;
    }
    .highlight {
      font-weight: bold;
    }
    .footer {
      margin-top: 20px;
      font-size: 12px;
      color: #888;
    }
    a {
      color: #007bff;
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Janakpur Hackathon</h1>
    </div>
    <div class="content">
      <p>Dear <span class="highlight">${name}</span>,</p>
      <p>
        Thank you for taking the time to apply for the <strong>Janakpur Hackathon</strong>. We truly appreciate the effort you put into your application.
      </p>
      <p>
        Unfortunately, we regret to inform you that your application was not selected for this year's event. The selection process was highly competitive, with a large number of talented individuals applying. 
      </p>
      <p>
        Please do not be discouraged! We believe in your potential and encourage you to keep building, learning, and innovating. There will be more opportunities in the future, and we would love to see you reapply in the coming editions.
      </p>
      <p>
        Stay connected with us for updates and upcoming events by following us on 
        <a href="https://www.facebook.com/profile.php?id=61558400588347" target="_blank">Facebook</a>, <a href="https://www.instagram.com/Neelgaitech/" target="_blank">Instagram</a>, and 
        <a href="https://www.facebook.com/profile.php?id=61558400588347" target="_blank">LinkedIn</a>.
      </p>
    </div>
    <div class="footer">
      <p>Warm regards,</p>
      <p><strong>Janakpur Hackathon Team</strong></p>
    </div>
  </div>
</body>
</html>

    `
}

module.exports = RejectionEmailTemplate;