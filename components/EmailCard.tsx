"use client";

type EmailCardProps = {
  subject: string;
  body: string;
};

export default function EmailCard({
  subject,
  body,
}: EmailCardProps) {
  const copySubject = async () => {
    await navigator.clipboard.writeText(subject);
    alert("Subject copied!");
  };

  const copyBody = async () => {
    await navigator.clipboard.writeText(body);
    alert("Email copied!");
  };

  return (
    <div className="max-w-3xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl">

      <h2 className="text-2xl font-bold mb-6">
        📧 Email Draft
      </h2>

      <div className="mb-6">
        <p className="text-sm text-gray-400 mb-2">
          Subject
        </p>

        <div className="rounded-xl bg-black/30 p-4">
          {subject}
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm text-gray-400 mb-2">
          Email
        </p>

        <div className="rounded-xl bg-black/30 whitespace-pre-wrap p-4">
          {body}
        </div>
      </div>

      <div className="flex gap-3">

        <button
          onClick={copySubject}
          className="rounded-lg bg-white text-black px-4 py-2 font-medium hover:bg-gray-200"
        >
          📋 Copy Subject
        </button>

        <button
          onClick={copyBody}
          className="rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-700"
        >
          📋 Copy Email
        </button>

      </div>

    </div>
  );
}