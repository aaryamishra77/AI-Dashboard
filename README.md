
# AI-Powered Analytics Dashboard

An interactive web dashboard that visualizes key analytics and generates insights using HuggingFace's AI model.

## 🚀 Live Demo
[🔗 Visit the deployed app](https://ai-dasboard.netlify.app/)

## 🧠 Features
- 📊 Visualize revenue and user growth with charts
- 🧠 Generate AI-based insights
- 💻 Responsive layout
- ⚙️ Built with Vite + React + Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: HuggingFace API (for AI insight generation)
- **Build Tool**: Vite
- **Deployment**: Netlify

## 📁 Project Structure

├── public/
├── src/
│ ├── components/
│ │ ├── Sidebar.jsx
│ │ ├── Header.jsx
│ │ ├── Dashboard.jsx
│ │ ├── AIInsight.jsx
│ │ └── AnalyticsChart.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── .env.example
└── README.md
## 🔧 Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/your-username/AI-Dashboard.git
cd AI-Dashboard
Install dependencies:
npm install

Setup API Key
Create a .env file in the root folder.

Add your Hugging Face API key:

VITE_HF_API_KEY=your_actual_key_here

Run the development server:
npm run dev
How It Works
The AI Insight button sends user traffic data to HuggingFace's gpt2 model and returns a text-based insight. This demonstrates real-world AI + frontend integration.

📦 Deployment
Deployed on Netlify. Setup instructions:

Connect your GitHub repo to Netlify.

Set the build command to: npm run build

Publish directory: dist

Add your VITE_HF_API_KEY in Netlify environment variables

🙋‍♂️ Author
Name: Aarya Mishra

GitHub: @aaryamishra77

Due to free-tier API limitations and to ensure consistent functionality during assessment, the AI Insight section uses mocked data simulating an API response.
