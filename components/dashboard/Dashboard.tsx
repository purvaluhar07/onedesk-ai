import AgentCard from "./AgentCard";
import StatsCard from "./StatsCard";

export default function Dashboard() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold">
          👋 Welcome back, Purva
        </h1>

        <p className="mt-2 text-gray-400">
          Your AI Productivity Workspace
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-4">

        <StatsCard
          title="Agents"
          value="6"
          icon="🤖"
        />

        <StatsCard
          title="Emails"
          value="12"
          icon="📧"
        />

        <StatsCard
          title="Research"
          value="8"
          icon="🔍"
        />

        <StatsCard
          title="Reminders"
          value="5"
          icon="⏰"
        />

      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

        <AgentCard
          icon="📧"
          title="Email Assistant"
          description="Write professional emails instantly."
          color="bg-blue-500/20"
        />

        <AgentCard
          icon="📅"
          title="Schedule Planner"
          description="Plan meetings and organize your day."
          color="bg-green-500/20"
        />

        <AgentCard
          icon="🔍"
          title="Research Agent"
          description="Research any topic with AI."
          color="bg-purple-500/20"
        />

        <AgentCard
          icon="📄"
          title="Document Summary"
          description="Summarize PDFs and documents."
          color="bg-yellow-500/20"
        />

        <AgentCard
          icon="⏰"
          title="Reminder Agent"
          description="Never miss an important task."
          color="bg-red-500/20"
        />

        <AgentCard
          icon="🤖"
          title="General AI"
          description="Ask anything and get instant answers."
          color="bg-cyan-500/20"
        />

      </div>

    </div>
  );
}