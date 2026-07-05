"use client";

import { useMemo, useState } from "react";

import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/dashboard/Dashboard";
import QuickActions from "@/components/dashboard/QuickActions";

import ReminderDashboard from "@/components/ReminderDashboard";
import ReminderManager from "@/components/ReminderManager";
import MessageRenderer from "@/components/MessageRenderer";

import saveReminder from "@/lib/saveReminder";
import parseReminderDateTime from "@/lib/parseReminderDateTime";

type Message = {
  role: "user" | "ai";
  content: any;
};

export default function Home() {
  const [selectedPage, setSelectedPage] =
    useState("dashboard");

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<Message[]>([]);

  const [loading, setLoading] = useState(false);

  const pageTitle = useMemo(() => {
    switch (selectedPage) {
      case "dashboard":
        return "Dashboard";

      case "agents":
        return "AI Assistant";

      case "email":
        return "Email Assistant";

      case "scheduler":
        return "Schedule Planner";

      case "research":
        return "Research Assistant";

      case "summary":
        return "Document Summary";

      case "reminder":
        return "Reminder Center";

      default:
        return "OneDesk AI";
    }
  }, [selectedPage]);

  const handleSend = async (
    customPrompt?: string
  ) => {
    const prompt = customPrompt ?? input;

    if (!prompt.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: prompt,
      },
    ]);

    if (!customPrompt) {
      setInput("");
    }

    setLoading(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          message: prompt,
        }),
      });

      const data = await res.json();

      let parsedData = data.reply;

      try {
        if (
          typeof data.reply === "string"
        ) {
          parsedData = JSON.parse(
            data.reply
          );
        }
      } catch {
        parsedData = {
          text: data.reply,
        };
      }

      if (
        parsedData &&
        parsedData.type === "reminder"
      ) {
        saveReminder({
          title: parsedData.title,
          date: parsedData.date,
          time: parsedData.time,
          repeat:
            parsedData.repeat ?? "None",
          notifications:
            parsedData.notifications ??
            [],
        });

        parsedData.triggerAt =
          parseReminderDateTime(
            parsedData.date,
            parsedData.time
          );
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: parsedData,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: {
            text:
              "⚠️ Unable to connect to AI.",
          },
        },
      ]);
    }

    setLoading(false);
  };

  const renderPage = () => {
    switch (selectedPage) {
      case "dashboard":
        return (
          <div className="space-y-8">
            <Dashboard />

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h2 className="mb-5 text-2xl font-semibold">
                ⚡ Quick Actions
              </h2>

              <QuickActions
                onSelect={(prompt) =>
                  handleSend(prompt)
                }
              />
            </div>
	          </div>
        );

      case "reminder":
        return (
          <div className="space-y-8">
            <ReminderDashboard />
          </div>
        );

      default:
        return (
          <div className="space-y-6">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

              <div className="flex items-center justify-between">

                <div>
                  <h2 className="text-2xl font-bold">
                    {pageTitle}
                  </h2>

                  <p className="mt-1 text-gray-400">
                    Ask OneDesk AI anything.
                  </p>
                </div>

              </div>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">

              <div className="h-[520px] overflow-y-auto p-6 space-y-5">

                {messages.length === 0 && (

                  <div className="flex h-full items-center justify-center">

                    <div className="text-center">

                      <div className="mb-4 text-6xl">
                        🤖
                      </div>

                      <h3 className="text-2xl font-bold">
                        Welcome to OneDesk AI
                      </h3>

                      <p className="mt-3 text-gray-400">
                        Start a conversation or use a quick action.
                      </p>

                    </div>

                  </div>

                )}

                {messages.map((message, index) => (

                  <div
                    key={index}
                    className={`flex ${
                      message.role === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >

                    <div
                      className={`max-w-3xl rounded-2xl p-4 ${
                        message.role === "user"
                          ? "bg-blue-600 text-white"
                          : "bg-white/10 border border-white/10"
                      }`}
                    >

                      {message.role === "user" ? (

                        <div className="whitespace-pre-wrap">
                          {message.content}
                        </div>

                      ) : (

                        <MessageRenderer
                          data={message.content}
                        />

                      )}

                    </div>

                  </div>

                ))}

                {loading && (

                  <div className="flex justify-start">

                    <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4">

                      <div className="animate-pulse">
                        OneDesk AI is thinking...
                      </div>

                    </div>

                  </div>

                )}

              </div>

              <div className="border-t border-white/10 p-5">

                <div className="flex gap-3">

                  <input
                    type="text"
                    value={input}
                    onChange={(e) =>
                      setInput(e.target.value)
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSend();
                      }
                    }}
                    placeholder="Ask OneDesk AI anything..."
                    className="flex-1 rounded-xl border border-white/10 bg-black/20 px-5 py-4 outline-none focus:border-blue-500"
                  />

                  <button
                    onClick={() => handleSend()}
                    disabled={loading}
                    className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700 disabled:opacity-50"
                  >
                    {loading ? "..." : "Send"}
                  </button>

                </div>

              </div>

            </div>

          </div>
        );
    }
  };
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#050816] via-[#0b1220] to-[#111827] text-white">

      {/* Runs reminder notifications in the background */}
      <ReminderManager />

      <div className="flex min-h-screen">

        {/* Sidebar */}
        <Sidebar
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />

        {/* Main Content */}
        <section className="flex-1 overflow-y-auto">

          {/* Top Bar */}
          <div className="sticky top-0 z-20 border-b border-white/10 bg-black/20 backdrop-blur-xl">

            <div className="flex items-center justify-between px-8 py-5">

              <div>
                <h1 className="text-3xl font-bold">
                  {pageTitle}
                </h1>

                <p className="mt-1 text-sm text-gray-400">
                  Your all-in-one AI productivity workspace
                </p>
              </div>

              <div className="flex items-center gap-4">

                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
                  ⚡ OneDesk AI
                </div>

              </div>

            </div>

          </div>

          {/* Page Content */}
          <div className="p-8">

            {renderPage()}

          </div>

        </section>

      </div>

    </main>
  );
}