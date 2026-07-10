export default function RiskCard({ risk = "Medium" }) {

    const config = {
        Low: {
            emoji: "🟢",
            color: "text-green-600",
            bg: "bg-green-100"
        },
        Medium: {
            emoji: "🟡",
            color: "text-yellow-600",
            bg: "bg-yellow-100"
        },
        High: {
            emoji: "🔴",
            color: "text-red-600",
            bg: "bg-red-100"
        }
    };

    const current = config[risk] || config.Medium;

    return (

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">

            <h2 className="text-xl font-bold">
                ⚠️ Risk Analysis
            </h2>

            <div className="mt-8 text-center">

                <div
                    className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full ${current.bg}`}
                >
                    <span className="text-4xl">
                        {current.emoji}
                    </span>
                </div>

                <p className={`mt-5 text-2xl font-bold ${current.color}`}>
                    {risk} Risk
                </p>

                <p className="mt-2 text-gray-500">
                    AI Generated Assessment
                </p>

            </div>

        </div>

    );
}