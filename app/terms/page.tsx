import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { OWNER_NAME } from "@/config";

export default function Terms() {
    return (
        <div className="w-full flex justify-center p-10">
            <div className="w-full max-w-screen-md space-y-6">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-700 underline"
                >
                    <ArrowLeftIcon className="w-4 h-4" />
                    Back to Chatbot
                </Link>

                <h1 className="text-3xl font-bold">InvestMate AI</h1>
                <h2 className="text-2xl font-semibold">
                    Terms of Use / Educational Disclaimer (U.S. Stock Explainer)
                </h2>

                <p className="text-gray-700">
                    The following terms govern access to and use of InvestMate AI
                    ("AI Chatbot"), an educational artificial intelligence tool developed by
                    {OWNER_NAME}. InvestMate AI is designed specifically to help users
                    understand U.S. stocks, companies, and basic investing concepts in plain English.
                    By using this AI Chatbot, you agree to these terms. If you do not agree,
                    you may not use the AI Chatbot.
                </p>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">General Information</h3>
                    <ol className="list-decimal list-inside space-y-3">

                        <li className="text-gray-700">
                            <span className="font-semibold">Provider and Purpose:</span> The
                            AI Chatbot is a tool developed and maintained by {OWNER_NAME}. It
                            is intended solely to provide educational explanations about U.S. stocks,
                            companies, and financial concepts (e.g., market cap, P/E ratio, revenue).
                            It does NOT provide personalized investment advice, recommendations,
                            or financial planning services. The AI Chatbot is not affiliated with,
                            endorsed by, or operated by any university or course provider.
                        </li>

                        <li className="text-gray-700">
                            <span className="font-semibold">Third-Party Involvement:</span>{" "}
                            The AI Chatbot utilizes third-party platforms and services. Your inputs
                            may be transmitted, processed, and stored by these systems. As such,
                            confidentiality, security, and privacy cannot be guaranteed.
                        </li>

                        <li className="text-gray-700">
                            <span className="font-semibold">No Guarantee of Accuracy:</span>{" "}
                            The AI Chatbot may generate inaccurate, incomplete, or outdated information.
                            Users must independently verify all information and assume full responsibility
                            for any decisions made based on the AI Chatbot’s responses.
                        </li>

                        <li className="text-gray-700">
                            <span className="font-semibold">No Financial Advice:</span>{" "}
                            The AI Chatbot does not provide financial, investment, legal, or tax advice.
                            All responses are for educational purposes only. You should consult a qualified
                            professional before making any financial decisions.
                        </li>

                    </ol>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Liability</h3>
                    <ol className="list-decimal list-inside space-y-3">

                        <li className="text-gray-700">
                            <span className="font-semibold">Use at Your Own Risk:</span> The
                            AI Chatbot is provided on an "as-is" and "as-available" basis.
                            {OWNER_NAME} disclaims all warranties, express or implied.
                        </li>

                        <li className="text-gray-700">
                            <span className="font-semibold">No Responsibility for Damages:</span>{" "}
                            {OWNER_NAME} is not liable for any damages arising from the use of the AI Chatbot,
                            including financial losses or decisions made based on its output.
                        </li>

                        <li className="text-gray-700">
                            <span className="font-semibold">Modification or Discontinuation:</span>{" "}
                            The AI Chatbot may be modified, suspended, or discontinued at any time.
                        </li>

                        <li className="text-gray-700">
                            <span className="font-semibold">Future Fees:</span>{" "}
                            The AI Chatbot is currently free, but fees may be introduced in the future.
                        </li>

                    </ol>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">User Responsibilities</h3>
                    <ol className="list-decimal list-inside space-y-3">

                        <li className="text-gray-700">
                            <span className="font-semibold">Eligibility:</span> Users must be 18 or older.
                        </li>

                        <li className="text-gray-700">
                            <span className="font-semibold">Appropriate Use:</span>{" "}
                            This AI Chatbot is intended for educational exploration of U.S. stocks.
                            It should not be used for real-time trading decisions or financial planning.
                        </li>

                        <li className="text-gray-700">
                            <span className="font-semibold">Prohibited Conduct:</span>
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                                <li>Engaging in illegal or unethical activities</li>
                                <li>Attempting to exploit or disrupt the system</li>
                                <li>Posting harmful, offensive, or misleading content</li>
                                <li>Reverse engineering or copying the system</li>
                            </ul>
                        </li>

                    </ol>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Data Privacy and Security</h3>
                    <ol className="list-decimal list-inside space-y-3">

                        <li className="text-gray-700">
                            <span className="font-semibold">No Privacy Guarantee:</span>{" "}
                            Conversations may be processed or reviewed for improvement purposes.
                        </li>

                        <li className="text-gray-700">
                            <span className="font-semibold">Public Information:</span>{" "}
                            Do not submit sensitive or confidential information.
                        </li>

                    </ol>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Ownership of Content</h3>
                    <p className="text-gray-700">
                        By using the AI Chatbot, you grant {OWNER_NAME} the right to use
                        inputs and outputs for research, improvement, and development purposes.
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Governing Law</h3>
                    <p className="text-gray-700">
                        These terms are governed by the laws of the State of North Carolina,
                        United States.
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Acceptance of Terms</h3>
                    <p className="text-gray-700">
                        By using the AI Chatbot, you confirm that you have read and agreed
                        to these terms. If you do not agree, do not use the AI Chatbot.
                    </p>
                </div>

                <div className="mt-8 text-sm text-gray-600">
                    <p>Last Updated: April 3, 2026</p>
                </div>

            </div>
        </div>
    );
}