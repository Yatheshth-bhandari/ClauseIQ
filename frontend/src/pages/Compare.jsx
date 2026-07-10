import { useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";
import ReactMarkdown from "react-markdown";

export default function Compare() {

    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);

    const [comparison, setComparison] = useState("");

    const [loading, setLoading] = useState(false);

    async function compareContracts() {

        if (!file1 || !file2) return;

        setLoading(true);

        try {

            const formData = new FormData();

            formData.append("file1", file1);
            formData.append("file2", file2);

            const response = await api.post(
                "/compare",
                formData
            );

            setComparison(response.data.comparison);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    }

    return (

        <>
            <Navbar />

            <div className="mx-auto mt-8 max-w-5xl">

                <h1 className="mb-8 text-center text-3xl font-bold">

                    Compare Contracts

                </h1>

                <div className="grid grid-cols-2 gap-8">

                    <div className="rounded-xl border-2 border-dashed p-8">

                        <input
                            type="file"
                            accept=".pdf"
                            onChange={(e)=>setFile1(e.target.files[0])}
                        />

                    </div>

                    <div className="rounded-xl border-2 border-dashed p-8">

                        <input
                            type="file"
                            accept=".pdf"
                            onChange={(e)=>setFile2(e.target.files[0])}
                        />

                    </div>

                </div>

                <div className="mt-8 text-center">

                    <button
                        onClick={compareContracts}
                        disabled={loading}
                        className="rounded-lg bg-blue-600 px-6 py-3 text-white"
                    >

                        {loading ? "Comparing..." : "Compare"}

                    </button>

                </div>

               {comparison && (

    <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">

        <div className="mb-6 flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
                ⚖️
            </div>

            <div>

                <h2 className="text-2xl font-bold">
                    AI Comparison Report
                </h2>

                <p className="text-sm text-gray-500">
                    Generated using Gemini AI
                </p>

            </div>

        </div>

        <div className="prose prose-lg max-w-none">

            <ReactMarkdown>
                {comparison}
            </ReactMarkdown>

        </div>

    </div>

)}
            </div>

        </>

    );

}