"use client";

import { useEffect, useState } from "react";

type Reminder = {
  id: string;
  title: string;
  date: string;
  time: string;
  completed: boolean;
};

export default function ReminderDashboard() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem("onedesk-reminders") || "[]"
    );

    setReminders(data);
  }, []);

  const deleteReminder = (id: string) => {
    const updated = reminders.filter((r) => r.id !== id);

    setReminders(updated);

    localStorage.setItem(
      "onedesk-reminders",
      JSON.stringify(updated)
    );
  };

  const completeReminder = (id: string) => {
    const updated = reminders.map((r) =>
      r.id === id
        ? { ...r, completed: true }
        : r
    );

    setReminders(updated);

    localStorage.setItem(
      "onedesk-reminders",
      JSON.stringify(updated)
    );
  };

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        ⏰ Reminder Dashboard
      </h1>

      {reminders.length === 0 && (
        <div className="text-gray-400">
          No reminders found.
        </div>
      )}

      <div className="space-y-4">

        {reminders.map((r) => (

          <div
            key={r.id}
            className="rounded-xl border border-white/10 bg-white/5 p-5"
          >

            <h2 className="text-xl font-semibold">
              {r.title}
            </h2>

            <p className="text-gray-400">
              {r.date} • {r.time}
            </p>

            <p className="mt-2">
              Status:{" "}
              {r.completed ? "✅ Completed" : "🟡 Pending"}
            </p>

            <div className="mt-4 flex gap-3">

              {!r.completed && (
                <button
                  onClick={() => completeReminder(r.id)}
                  className="rounded-lg bg-green-500 px-4 py-2"
                >
                  Complete
                </button>
              )}

              <button
                onClick={() => deleteReminder(r.id)}
                className="rounded-lg bg-red-500 px-4 py-2"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}