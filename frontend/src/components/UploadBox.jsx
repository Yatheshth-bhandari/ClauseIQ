import { useState } from "react";
import api from "../services/api";

export default function UploadBox({ setSummary, setDocumentId }) {

    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    async function uploadFile() {

        if (!file) return;

        setLoading(true);

        try {

            const formData = new FormData();
            formData.append("file", file);

            const response = await api.post("/upload", formData);

            setSummary(response.data.summary);
            setDocumentId(response.data.document_id);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }
    }

    return (

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all hover:shadow-xl">

            <div className="mb-4 text-center">

                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-1g">
                    📄
                </div>

                <h2 className="text-xl font-bold text-gray-800">
                    Upload Contract
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                    Upload a PDF to summarize, compare and chat with your contract.
                </p>

            </div>

            <div className="flex flex-col items-center">

                <label className="cursor-pointer rounded-xl border border-blue-200 bg-blue-50 px-5 py-3 font-medium text-blue-700 transition hover:bg-blue-100">

                    📁 Choose PDF

                    <input
                        type="file"
                        accept=".pdf"
                        onChange={(e) => setFile(e.target.files[0])}
                        className="hidden"
                    />

                </label>

                {file && (

                    <p className="mt-4 text-sm text-gray-600">

                        Selected:
                        <span className="ml-1 font-semibold">
                            {file.name}
                        </span>

                    </p>

                )}

                <button

                    onClick={uploadFile}
                    disabled={loading || !file}

                    className="mt-6 rounded-xl bg-blue-600 px-8 py-3 font-medium text-white transition-all hover:bg-blue-700 hover:shadow-lg disabled:cursor-not-allowed disabled:bg-gray-400"

                >

                    {loading ? "Analyzing Contract..." : "Upload & Analyze"}

                </button>

            </div>

        </div>

    );

}