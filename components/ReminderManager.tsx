"use client";

import { useEffect } from "react";
import {
  getReminders,
  completeReminder,
} from "@/lib/reminderStorage";

export default function ReminderManager() {
  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission();
    }

    const interval = setInterval(() => {
      const reminders = getReminders();

      const now = new Date();

      reminders.forEach((reminder) => {
        if (reminder.completed) return;

        // Compare actual timestamps instead of text
        const reminderTime = new Date(reminder.triggerAt);

        if (now >= reminderTime) {

          // 🔊 Play reminder sound
          const audio = new Audio("/reminder.mp3");

          audio.play().catch((err) => {
            console.error("Unable to play reminder sound:", err);
          });

          // 📢 Browser notification
          if (
            "Notification" in window &&
            Notification.permission === "granted"
          ) {
            new Notification("⏰ OneDesk Reminder", {
              body: reminder.title,
            });
          }

          // ✅ Prevent duplicate notifications
          completeReminder(reminder.id);
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return null;
}