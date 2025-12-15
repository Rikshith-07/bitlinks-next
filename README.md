🔗 BitLinks – URL Shortener

BitLinks is a full-stack URL shortener built using Next.js 15, MongoDB Atlas, and Vercel.
It allows users to generate custom short URLs and automatically redirects them to the original long URL.

This project demonstrates real-world concepts like dynamic routing, API routes, database integration, and production deployment.

🌐 Live Demo

👉 Live URL: https://bitlinks-next.vercel.app

👉 Shorten Page: https://bitlinks-next.vercel.app/shorten

🛠️ Tech Stack

Frontend: Next.js 15 (App Router), React 18

Backend: Next.js API Routes

Database: MongoDB Atlas

Styling: Tailwind CSS

Deployment: Vercel

Language: JavaScript

✨ Features

🔗 Generate custom short URLs

🚀 Instant redirection to original URL

🗂️ MongoDB-based persistent storage

🌍 Dynamic routing using [shorturl]

⚠️ Prevents duplicate short URLs

📱 Fully responsive UI

☁️ Deployed on Vercel

📂 Project Structure
bitlinks/
│
├── app/
│   ├── api/
│   │   └── generate/
│   │       └── route.js        # API to generate short URLs
│   │
│   ├── [shorturl]/
│   │   └── page.js             # Dynamic redirect route
│   │
│   ├── shorten/
│   │   └── page.js             # URL shortening page
│   │
│   ├── layout.js
│   └── page.js
│
├── components/
│   └── Navbar.js
│
├── lib/
│   └── mongodb.js              # MongoDB connection
│
├── public/
├── styles/
│
├── .env.local
├── package.json
├── README.md
└── tailwind.config.js

⚙️ Environment Variables

Create a .env.local file in the root directory:

MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_HOST=http://localhost:3000


⚠️ On Vercel, add these variables under
Project → Settings → Environment Variables

🚀 Getting Started (Local Setup)
1️⃣ Clone the Repository
git clone https://github.com/Rikshith-07/bitlinks-next.git
cd bitlinks-next

2️⃣ Install Dependencies
npm install

3️⃣ Run the Development Server
npm run dev


Open 👉 http://localhost:3000

🔄 How It Works
➤ Generating a Short URL

User enters a long URL and custom short text

/api/generate API:

Checks if short URL already exists

Saves the URL in MongoDB

Returns the generated short link

➤ Redirecting

Visiting /abc123 triggers [shorturl]/page.js

Fetches original URL from MongoDB

Redirects user using redirect()

📌 Example Document (MongoDB)
{
  "_id": "ObjectId",
  "url": "https://example.com",
  "shorturl": "ex123",
  "createdAt": "2025-12-15T10:40:52Z"
}

❗ Common Issues Solved

React & Next.js dependency conflicts

Vercel build failures

Environment variable misconfiguration

Dynamic routing errors

MongoDB connection issues

📈 Future Improvements

📊 Click count analytics

🔐 Authentication (login/signup)

🧠 Auto-generated short URLs

📋 Copy-to-clipboard button

📅 URL expiry feature

📱 Progressive Web App (PWA)

🧑‍💻 Author

Rikshith Raviteja

GitHub: https://github.com/Rikshith-07

LinkedIn: (add your LinkedIn here)

⭐ Acknowledgements

Next.js Documentation

MongoDB Atlas

Vercel Platform

🏁 Final Note

This project was built to practice real-world full-stack development and deployment.
Feel free to fork, improve, and use it in your portfolio 🚀
