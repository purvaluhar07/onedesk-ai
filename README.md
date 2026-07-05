<img width="1600" height="759" alt="image" src="https://github.com/user-attachments/assets/75f02f8c-5888-4497-99c3-a250a30fcf66" /># 🚀 OneDesk AI

> **A Multi-Agent AI Productivity Workspace built with Next.js and Google Gemini AI.**

OneDesk AI brings multiple productivity tools into one intelligent workspace. Instead of switching between different applications for emails, reminders, scheduling, research, and document summaries, users can simply chat with OneDesk AI.

---

# 📖 Project Description

Managing daily work often requires switching between multiple productivity applications. OneDesk AI solves this problem by providing a unified AI-powered workspace where specialized agents collaborate to complete different productivity tasks.

The system automatically routes each user request to the most suitable AI agent, enabling a seamless experience for email writing, task scheduling, reminders, research, document summarization, and general AI assistance.

---

# ✨ Features

- 🤖 Multi-Agent Architecture
- 📧 AI Email Assistant
- 📅 Smart Scheduler
- 🔍 Research Assistant
- 📄 Document Summarizer
- ⏰ Intelligent Reminder System
- 🔔 Browser Notifications
- 🔊 Reminder Sound Alerts
- 💾 Local Reminder Storage
- 🎨 Modern Glassmorphism UI
- ⚡ Fast Next.js App Router
- 🧠 Powered by Google Gemini AI

---

# 🏗️ Workflow

<p align="center">



</p>

### Workflow Steps

```
User
   │
   ▼
OneDesk AI Interface
   │
   ▼
Agent Router
   │
   ├──────────────┐
   │              │
   ▼              ▼
Email Agent    Reminder Agent
Scheduler      Research Agent
Summary Agent  General Agent
   │
   ▼
Google Gemini AI
   │
   ▼
Structured JSON Response
   │
   ▼
Beautiful UI Cards
```

---

# 🧠 Architecture

```
                  +---------------------+
                  |       User          |
                  +----------+----------+
                             |
                             v
                 +-----------------------+
                 |   OneDesk AI Client   |
                 +-----------+-----------+
                             |
                             v
                 +-----------------------+
                 |     Agent Router      |
                 +-----------+-----------+
                             |
      ---------------------------------------------------
      |        |          |          |         |        |
      v        v          v          v         v        v
   Email   Scheduler   Reminder   Research Summary General
    Agent     Agent      Agent      Agent     Agent  Agent
      \        |          |          |         |      /
       \       |          |          |         |     /
        ----------------------------------------------
                           |
                           v
                    Google Gemini API
                           |
                           v
                  Structured JSON Response
                           |
                           v
                 Beautiful React Components
```

---

# 🛠️ Tech Stack

| Technology            | Purpose              |
|---------------------- |----------------------|             
| Next.js 16            | Frontend Framework   |
| React                 | UI Development       |
| TypeScript            | Type Safety          |
| Tailwind CSS          | Styling              |
| Google Gemini AI      | AI Engine            |
| Browser Notifications | Reminder Alerts      |
| Local Storage         | Reminder Persistence |

---

# 📂 Project Structure

```
onedesk-ai
│
├── app/
│   ├── api/
│   └── page.tsx
│
├── agents/
│   ├── emailAgent.ts
│   ├── schedulerAgent.ts
│   ├── reminderAgent.ts
│   ├── researchAgent.ts
│   ├── documentAgent.ts
│   └── router.ts
│
├── components/
│   ├── dashboard/
│   ├── EmailCard.tsx
│   ├── ReminderCard.tsx
│   ├── SummaryCard.tsx
│   └── ...
│
├── lib/
├── public/
└── README.md
```

---

# 🚀 Installation Guide

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/onedesk-ai.git
```

## Go into the project

```bash
cd onedesk-ai
```

## Install dependencies

```bash
npm install
```


## Run the project

```bash
npm run dev
```

Visit:

```
http://localhost:3000
```

---

# 🎮 Demo Commands

### 📧 Email

```
Write a professional leave email.
```

### 📅 Scheduler

```
Plan my Monday from 9 AM to 6 PM.
```

### 🔍 Research

```
Research Artificial Intelligence.
```

### 📄 Summary

```
Summarize climate change.
```

### ⏰ Reminder

```
Remind me tomorrow at 5 PM to submit my project.
```

---

# 🔮 Future Improvements

- Google Calendar Integration
- Gmail Integration
- PDF Upload Support
- Voice Commands
- Multi-language Support
- Authentication
- Cloud Sync
- Mobile Application

---

# 👩‍💻 Author

**Purva Luhar**

Built for a Hackathon using **Next.js**, **TypeScript**, **Tailwind CSS**, and **Google Gemini AI**.

---

⭐ If you like this project, consider giving it a star!
