"use client";

type SidebarProps = {
  selectedPage: string;
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
};

const menu = [
  { id: "dashboard", icon: "🏠", label: "Dashboard" },
  { id: "agents", icon: "🧠", label: "Agents" },
  { id: "email", icon: "📧", label: "Email" },
  { id: "scheduler", icon: "📅", label: "Scheduler" },
  { id: "research", icon: "🔍", label: "Research" },
  { id: "summary", icon: "📄", label: "Summary" },
  { id: "reminder", icon: "⏰", label: "Reminder" },
];

export default function Sidebar({
  selectedPage,
  setSelectedPage,
}: SidebarProps) {
  return (
    <div className="w-64 border-r border-white/10 bg-white/5 backdrop-blur-xl p-5">

      <h1 className="mb-8 text-2xl font-bold">
        OneDesk AI
      </h1>

      <div className="space-y-2">

        {menu.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedPage(item.id)}
            className={`flex w-full items-center gap-3 rounded-xl p-3 transition ${
              selectedPage === item.id
                ? "bg-white text-black font-semibold"
                : "text-gray-300 hover:bg-white/10"
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}

      </div>

    </div>
  );
}