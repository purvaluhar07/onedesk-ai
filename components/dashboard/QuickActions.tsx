type Props = {
  onSelect: (text: string) => void;
};

const actions = [
  {
    icon: "📧",
    label: "Write Email",
    prompt: "Write a professional email",
  },
  {
    icon: "📅",
    label: "Plan Day",
    prompt: "Plan my day",
  },
  {
    icon: "🔍",
    label: "Research",
    prompt: "Research Artificial Intelligence",
  },
  {
    icon: "📄",
    label: "Summarize",
    prompt: "Summarize this document",
  },
  {
    icon: "⏰",
    label: "Reminder",
    prompt: "Remind me tomorrow at 5 PM",
  },
];

export default function QuickActions({
  onSelect,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">

      {actions.map((action) => (
        <button
          key={action.label}
          onClick={() => onSelect(action.prompt)}
          className="rounded-full border border-white/10 bg-white/5 px-5 py-2 transition hover:bg-white/10"
        >
          {action.icon} {action.label}
        </button>
      ))}

    </div>
  );
}