import MessageRenderer from "@/components/MessageRenderer";

type Message = {
  role: "user" | "ai";
  content: any;
};

type Props = {
  messages: Message[];
  loading: boolean;
};

export default function ChatArea({
  messages,
  loading,
}: Props) {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-5">

      {messages.length === 0 && (
        <div className="mt-20 text-center">

          <h1 className="text-5xl font-bold mb-4">
            🤖 OneDesk AI
          </h1>

          <p className="text-gray-400 text-lg">
            Your AI Productivity Workspace
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              📧 Write professional emails
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              📅 Plan your schedule
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              🔍 Research any topic
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              ⏰ Smart reminders
            </div>

          </div>

        </div>
      )}

      {messages.map((msg, index) => (

        <div
          key={index}
          className={`flex ${
            msg.role === "user"
              ? "justify-end"
              : "justify-start"
          }`}
        >

          <div
            className={`max-w-3xl rounded-2xl p-5 ${
              msg.role === "user"
                ? "bg-white text-black"
                : "border border-white/10 bg-white/5 backdrop-blur-xl"
            }`}
          >

            {msg.role === "user" ? (
              msg.content
            ) : (
              <MessageRenderer data={msg.content} />
            )}

          </div>

        </div>

      ))}

      {loading && (

        <div className="mr-auto rounded-xl border border-white/10 bg-white/5 p-5 animate-pulse">

          🤖 Thinking...

        </div>

      )}

    </div>
  );
}