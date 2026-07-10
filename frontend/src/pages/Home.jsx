import { useState } from "react";
import Navbar from "../components/Navbar";
import UploadBox from "../components/UploadBox";
import SummaryCard from "../components/SummaryCard";
import ChatBox from "../components/ChatBox";

export default function Home() {

    const [summary, setSummary] = useState("");
    const [documentId, setDocumentId] = useState("");

    return (
        <>
            <Navbar />

            <main className="mx-auto max-w-6xl px-6 py-6">

                {/* Hero Section */}

                <section className="mb-8 text-center">

                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        ClauseIQ
                    </h1>

                    <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-gray-500">
                        AI-powered contract analysis platform to summarize,
                        compare and chat with legal documents using Gemini AI.
                    </p>

                </section>

                {/* Upload */}

                <UploadBox
                    setSummary={setSummary}
                    setDocumentId={setDocumentId}
                />

                {/* Summary */}

                <section className="mt-6">
                    <SummaryCard summary={summary} />
                </section>

                {/* Chat */}

                <section className="mt-6">
                    <ChatBox documentId={documentId} />
                </section>

            </main>

        </>
    );
}