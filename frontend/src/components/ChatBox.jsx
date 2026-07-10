import { useState } from "react";
import api from "../services/api";
import ReactMarkdown from "react-markdown";

export default function ChatBox({ documentId }) {

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);


    async function askQuestion() {

    if (!question) return;

    setLoading(true);

    try {

        const response = await api.post("/chat", {
            document_id: documentId,
            question: question
        });

        setAnswer(response.data.answer);

    } catch (error) {

        console.log(error);

    } finally {

        setLoading(false);

    }
}

    return (
        <div className="rounded-xl border p-5 shadow-sm">

            <h2 className="mb-4 text-xl font-semibold">
                Chat with Contract
            </h2>

            <input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full rounded-lg border p-3"
                placeholder="Ask anything..."
            />

            <button
    onClick={askQuestion}
    disabled={loading}
    className="mt-3 rounded-lg bg-blue-600 px-5 py-2 text-white disabled:bg-gray-400"
>
    {loading ? "Thinking..." : "Ask"}
</button>

           {answer && (
    <div className="prose mt-5 max-w-none rounded-lg border bg-gray-50 p-5">

        <ReactMarkdown>
            {answer}
        </ReactMarkdown>

    </div>
)}

        </div>
    );
}