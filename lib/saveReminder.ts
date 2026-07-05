import { Reminder, saveReminder as saveToStorage } from "./reminderStorage";
import { parseReminderDateTime } from "./dateParser";

type ReminderAI = {
  title: string;
  date: string;
  time: string;
  repeat: string;
  notifications: {
    before: string;
    method: string;
  }[];
};

export default function saveReminder(data: ReminderAI) {
  const reminder: Reminder = {
    id: crypto.randomUUID(),
    title: data.title,
    date: data.date,
    time: data.time,
    triggerAt: parseReminderDateTime(
      data.date,
      data.time
    ),
    repeat: data.repeat,
    notifications: data.notifications,
    completed: false,
  };

  saveToStorage(reminder);

  return reminder;
}