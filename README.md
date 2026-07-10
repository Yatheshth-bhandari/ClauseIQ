# ⚖️ ClauseIQ

> AI-powered Contract Intelligence Platform for contract analysis, semantic search, and comparison using Retrieval-Augmented Generation (RAG).

---

## ✨ Features

- 📄 Upload PDF contracts
- 🤖 AI-generated contract summaries
- 💬 Chat with contracts using RAG
- ⚖️ Compare two contracts
- 📑 Export AI comparison reports as PDF
- ⚡ Fast and responsive interface

---

## 🛠️ Tech Stack

### Frontend
- React
- Tailwind CSS
- Axios
- React Markdown

### Backend
- FastAPI
- Gemini 2.5 Flash API
- FAISS (Vector Search)
- PyMuPDF
- ReportLab

---

## 🏗️ Architecture

```text
PDF Upload
     │
     ▼
PyMuPDF Text Extraction
     │
     ▼
Chunking
     │
     ▼
FAISS Vector Store
     │
     ▼
Relevant Context Retrieval
     │
     ▼
Gemini AI
     │
     ▼
Summary / Chat / Comparison
```

---

## 🚀 Current Features

- Contract Upload
- AI Summary
- Chat with Contract
- Contract Comparison
- PDF Report Generation

---

## 📂 Project Structure

```text
ClauseIQ
│
├── backend
│
├── frontend
│
└── README.md
```

---

## 🔮 Future Improvements

- User Authentication
- Contract History
- Dynamic Risk Scoring
- Clause Highlighting
- Database Integration


