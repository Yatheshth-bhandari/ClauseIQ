import ReactMarkdown from "react-markdown";

export default function SummaryCard({ summary }) {

    return (

        <div className="rounded-xl border bg-white p-6 shadow-md">

            <div className="mb-5 flex items-center gap-3">

                <div className="rounded-lg bg-blue-100 p-3">
                    📑
                </div>

                <div>

                    <h2 className="text-xl font-bold">
                        AI Contract Summary
                    </h2>

                    <p className="text-sm text-gray-500">
                        Generated using Gemini AI
                    </p>

                </div>

            </div>

            {summary ? (

                <div className="prose max-w-none">

                    <ReactMarkdown>
                        {summary}
                    </ReactMarkdown>

                </div>

            ) : (

                <div className="rounded-lg border border-dashed p-8 text-center text-gray-500">

                    Upload a contract to generate an AI summary.

                </div>

            )}

        </div>

    );

}