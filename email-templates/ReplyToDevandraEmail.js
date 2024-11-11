const ReplyToDevendraEmailTemplate = (name) => {
    return `
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Response to Hackathon Inquiry</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        color: #333;
                        background-color: #f6f6f6;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        width: 100%;
                        max-width: 600px;
                        margin: 20px auto;
                        padding: 20px;
                        background-color: #ffffff;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                    }
                    .logo {
                        text-align: center;
                        margin-bottom: 20px;
                    }
                    h1, h2 {
                        color: #2c3e50;
                    }
                    h2 {
                        font-size: 1.2em;
                        margin-top: 20px;
                    }
                    p, ul {
                        font-size: 1em;
                        line-height: 1.8;
                        color: #333;
                    }
                    .bold {
                        font-weight: bold;
                    }
                    .highlight {
                        font-size: 1.1em;
                    }
                    .footer {
                        margin-top: 30px;
                        font-size: 0.9em;
                        color: #555;
                        text-align: center;
                    }
                    .footer a {
                        color: #2980b9;
                        text-decoration: none;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="logo">
                        <img src="https://scontent.fktm21-2.fna.fbcdn.net/v/t39.30808-6/437748207_7783060311727898_985196282831963356_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=1AMqu7W8EAgQ7kNvgEzbup9&_nc_zt=23&_nc_ht=scontent.fktm21-2.fna&_nc_gid=AMDa4f0mwFVH8a8aQb8xg5R&oh=00_AYAedemNHXf_W9fXfGcCen-3tBliNeJdUdEme_hteJpHmg&oe=673779B2" alt="Neelgai Logo" width="150">
                    </div>

                    <p>Dear ${name},</p>
                    <p>Thank you for reaching out to us with your questions about the upcoming hackathon! We’re happy to provide further information to help you prepare for this exciting event.</p>

                    <h2 class="highlight">Response to Your Queries:</h2>

                    <ul>
                        <li><span class="bold">Financial Support:</span> We are pleased to offer free accommodation, meals, and a travel allowance of up to NPR 500 per participant, ensuring a comfortable experience during the hackathon.</li>
                        <li><span class="bold">Program Model and Schedule:</span> The hackathon will be a 48-hour continuous event filled with coding, innovation, mentorship sessions, and networking opportunities. The schedule includes an opening ceremony, development time, and a closing ceremony with awards.</li>
                        <li><span class="bold">Target Student Level:</span> We welcome students at both the bachelor’s level and +2 level. Anyone passionate about technology, regardless of academic background, is encouraged to participate.</li>
                        <li><span class="bold">Prerequisite Skills:</span> While no specific technical skills are mandatory, experience in programming, design, or project management can be beneficial. However, we encourage anyone with a strong interest in problem-solving and innovation to join!</li>
                    </ul>

                    <p>We hope this answers your questions, and we look forward to seeing you at the hackathon. Please feel free to reach out if you need any additional information.</p>

                    <p>Best regards,</p>
                    <p>Mikey Sharma<br>
                        Tech Support<br>
                        <span class="bold">Neelgai Team</span><br>
                        hackathon@neelgai.com<br>
                        <a href="https://neelgai.com/hackathon">https://neelgai.com/hackathon</a>
                    </p>

                    <div class="footer">
                        <p>&copy; Neelgai, Janakpur. All rights reserved.</p>
                    </div>
                </div>
            </body>
        </html>`;
};

module.exports = ReplyToDevendraEmailTemplate;
