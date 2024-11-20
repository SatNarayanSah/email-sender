const AcceptanceEmailTemplate = (name) => {
  return `<!DOCTYPE html>
<html>
<head>
  <title>Janakpur Hackathon Acceptance</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 20px;
      background-color: #eef2f7;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: #ffffff;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    }
    .header {
      text-align: center;
      margin-bottom: 20px;
      background-color: #3c5573;
      color: white;
      padding: 15px;
      border-radius: 8px 8px 0 0;
    }
    .header h1 {
      margin: 0;
      font-size: 2em; /* Default size for larger screens */
    }
    .content h3 {
      color: #3c5573;
    }
    .highlight {
      color: #3c5573;
      font-weight: bold;
    }
    .content ul {
      padding-left: 20px;
    }
    .content ul li {
      margin-bottom: 10px;
    }
    .footer {
      margin-top: 20px;
      text-align: center;
      font-size: 12px;
      color: #888;
      background-color: #f1f1f1;
      padding: 10px;
      border-radius: 0 0 8px 8px;
    }
    a {
      color: #107bff;
      text-decoration: underline;
    }
    a:hover {
      text-decoration: underline;
    }

    /* Media query for smaller devices */
    @media (max-width: 480px) {
      .header h1 {
        font-size: 1.5em; /* Smaller font size for smaller screens */
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Congratulations!</h1>
      <p>You’re officially part of the Janakpur Hackathon.</p>
    </div>
    <div class="content">
      <p>Dear ${name},</p>
      <p>We are thrilled to inform you that you have been accepted to participate in the <strong>Janakpur Hackathon</strong>! Your application has been reviewed, and we are excited to welcome you to a thrilling day of innovation, collaboration, and creativity.</p>
      
      <h3>Event Details</h3>
      <p>The Janakpur Hackathon will be held on <span class="highlight">November 23, 2024</span>. Please ensure you arrive at <span class="highlight">7:00 AM</span> at <span class="highlight">Janak Chowk at Neelgai Office</span>,also marked with a "Janakpur Tech Bootcamp" banner. The office can also be located either by searching  </p>
      
      <h3>Exciting Updates for Participants</h3>
      <ul>
        <li>Please ensure you’ve downloaded and reviewed all provided resources such as the rules, Janakpur guide, and schedule (refer to the links below).</li>
        <li>Access the Janakpur guide <a href="https://neelgai.vercel.app/hackathon/Janakpur%20Hackathon%20Guide.pdf" target="_blank">here</a>.</li>
      </ul>

      <h3>Prizes</h3>
      <p>The winning teams will receive:</p>
      <ul>
        <li><span class="highlight">Cash prizes</span></li>
        <li><span class="highlight">Datacamp Licenses</span></li>
        <li>A <span class="highlight">one-year free Basic Shared Hosting plan</span> for each team member in the top 3 teams</li>
      </ul>
      
      <h3>Rules and Important Information</h3>
      <ul>
        <li>Teams may be formed at the event or beforehand (to be finalized).</li>
        <li>The hackathon theme will be provided at the start of the event.</li>
        <li><span class="highlight">No sleep accommodation will be provided on November 24</span>.</li>
        <li>Ensure you’ve reviewed the <a href="https://neelgai.vercel.app/hackathon/Rules%20for%20Janakpur%20Hackathon%202024.pdf" target="_blank">Rules PDF</a>.</li>
      </ul>

      <h3>Day Schedule</h3>
      <p>Stay on top of the event timeline! Access the complete schedule <a href="https://neelgai.vercel.app/hackathon/hackathon%20schedule.png" target="_blank">here</a>.</p>

      <h3>Social Media Engagement</h3>
      <p>Help us spread the word! Share the event flyer on your social media and tag us to participate in a lottery for prizes such as keyboards, mouse, and more. (Details will be confirmed by our team.)</p>
      
      <h3>Stay Connected</h3>
      <p>Follow us on <a href="https://www.facebook.com/profile.php?id=61558400588347" target="_blank">Facebook</a>, <a href="https://www.instagram.com/Neelgaitech/" target="_blank">Instagram</a>, and <a href="https://www.linkedin.com/company/neelgai" target="_blank">LinkedIn</a> for updates.</p>
      
      <p>We can’t wait to see your innovative ideas come to life on <span class="highlight">November 23rd</span>! Should you have any questions, feel free to reach out at any time.</p>
      
      <p><strong>P.S. Please find the acceptance letter and shareable flyer attached.</strong></p>
    </div>
    <div class="footer">
      <p>Best regards,</p>
      <p><strong>Janakpur Hackathon Team</strong></p>
    </div>
  </div>
</body>
</html>

  `;
}

module.exports = AcceptanceEmailTemplate;
