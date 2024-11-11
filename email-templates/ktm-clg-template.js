const KTMClgEmailTemplate = (name) => {
    return (
        `
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Hackathon Invitation</title>
                        <style>
                            body {
                                font - family: Arial, sans-serif;
                            color: #333;
                            line-height: 1.6;
                            margin: 0;
                            padding: 0;
        }
                            .container {
                                width: 100%;
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                            background-color: #f9f9f9;
                            border: 1px solid #ddd;
                            border-radius: 5px;
        }
                            .logo {
                                text - align: center;
                            margin-bottom: 20px;
        }
                            h1, h2 {
                                color: #2c3e50;
        }
                            h2 {
                                font - size: 1.2em;
                            margin-top: 20px;
        }
                            p, ul {
                                font - size: 1em;
                            line-height: 1.8;
                            color: #333;
        }
                            .bold {
                                font - weight: bold;
        }
                            .highlight {
                                font - size: 1.1em;
        }
                            .footer {
                                margin - top: 30px;
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
                            <p>Greetings from Team Neelgai!</p>

                            <p>We are excited to announce the <span class="bold">First Ever Tech Hackathon of Madhesh Province</span>, organized by <span class="bold">Neelgai</span>, an IT company based in Janakpur, Nepal. As part of our ongoing mission to transform Janakpur into a thriving tech hub, we are bringing together students, innovators, and tech enthusiasts for an exhilarating 48-hour hackathon that promises to be a game-changer for the region’s tech ecosystem.</p>

                            <h2 class="highlight">Event Details:</h2>
                            <ul>
                                <li><span class="bold">Date:</span> 23rd Nov, 2024</li>
                                <li><span class="bold">Location:</span>Janakpur Tech Bootcamp Office, Janakpur, Madhesh Province, Nepal</li>
                                <li><span class="bold">Prize Pool:</span> NPR 100,000</li>
                                <li><span class="bold">Duration:</span> 48 hours (Continuous coding and innovation!)</li>
                            </ul>

                            <h2 class="highlight">Why Should You Participate?</h2>
                            <ul>
                                <li><span class="bold">Free Stay & Meals</span> – We are providing <span class="bold">free accommodation</span>, <span class="bold">meals</span>, and <span class="bold">travel allowances upto NRs 500 per participant</span> for all participants, ensuring a seamless experience.</li>
                                <li><span class="bold">Exciting Prize Pool</span> – Compete for a grand prize pool of NPR 100,000, with opportunities for recognition and valuable prizes.</li>
                                <li><span class="bold">Explore Janakpur’s Culture</span> – As a historical city rich in cultural heritage, Janakpur offers an exciting opportunity to explore its temples, historical sites, and vibrant culture while engaging in the hackathon.</li>
                                <li><span class="bold">Networking Opportunities</span> – Meet and collaborate with like-minded individuals, industry experts, and potential employers from across Nepal’s growing tech community.</li>
                                <li><span class="bold">Develop Real-World Solutions</span> – Work on innovative tech solutions that can have a real impact on local businesses, communities, and society at large.</li>
                            </ul>

                            <h2 class="highlight">How to Participate?</h2>
                            <p>To register your team for the hackathon, please register at https://neelgai.com/hackathon. The deadline for team registration is 15 Nov 2024. We encourage you to form teams of four participants or can also register as individual and submit your ideas and solutions in any of the following categories:</p>
                            <ul>
                                <li>Healthtech</li>
                                <li>Environment</li>
                                <li>E-commerce</li>
                                <li>BlockChain</li>
                                <li>Open to any theme</li>
                            </ul>

                            <h2 class="highlight">Why Janakpur?</h2>
                            <p>Janakpur is not just a city with historical significance; it is rapidly emerging as a center of innovation and technology in Nepal. The hackathon offers a unique opportunity to combine learning, tech innovation, and cultural exploration, making it an unforgettable experience for your students.</p>

                            <p>We sincerely hope that you will encourage your students to participate and represent your institution in this exciting event.</p>

                            <p>Should you have any questions or need more details, please feel free to reach out to us at hackathon@neelgai.com .</p>

                            <p>Looking forward to your participation!</p>

                            <p>Best regards,</p>
                            <p>Mikey Sharma<br>
                                Tech Support<br>
                                    <span class="bold">Neelgai Team</span><br>
                                        hackathon@neelgai.com<br>
                                            https://neelgai.com/hackathon</p>

                                        <div class="footer">
                                            <p>&copy; Neelgai, Janakpur. All rights reserved.</p>
                                        </div>
                                    </div>
                                </body>
                            </html>`

    )
}
module.exports = KTMClgEmailTemplate