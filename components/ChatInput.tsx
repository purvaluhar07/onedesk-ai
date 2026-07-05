type Props = {
  input: string;
  setInput: (value: string) => void;
  handleSend: () => void;
};

export default function ChatInput({
  input,
  setInput,
  handleSend,
}: Props) {
  return (
    <div className="border-t border-white/10 bg-black/30 p-5 backdrop-blur-xl">

      <div className="mx-auto flex max-w-4xl gap-3">

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          placeholder="Ask OneDesk AI anything..."
          className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-blue-500"
        />

        <button
          onClick={handleSend}
          className="rounded-2xl bg-white px-8 font-bold text-black transition hover:scale-105"
        >
          🚀 Send
        </button>

      </div>

    </div>
  );
}