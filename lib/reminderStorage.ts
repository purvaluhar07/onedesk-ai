export type ReminderNotification = {
  before: string;
  method: string;
};

export type Reminder = {
  id: string;
  title: string;

  // Original values from AI
  date: string;
  time: string;

  // Exact timestamp used by the reminder engine
  triggerAt: string;

  repeat: string;

  notifications: ReminderNotification[];

  completed: boolean;
};

const STORAGE_KEY = "onedesk-reminders";

export function getReminders(): Reminder[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) return [];

  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export function saveReminder(reminder: Reminder) {
  const reminders = getReminders();

  reminders.push(reminder);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(reminders)
  );
}

export function updateReminder(updated: Reminder) {
  const reminders = getReminders().map((r) =>
    r.id === updated.id ? updated : r
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(reminders)
  );
}

export function deleteReminder(id: string) {
  const reminders = getReminders().filter(
    (r) => r.id !== id
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(reminders)
  );
}

export function completeReminder(id: string) {
  const reminders = getReminders().map((r) =>
    r.id === id
      ? {
          ...r,
          completed: true,
        }
      : r
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(reminders)
  );
}

export function clearCompletedReminders() {
  const reminders = getReminders().filter(
    (r) => !r.completed
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(reminders)
  );
}