export default function parseReminderDateTime(
  date: string,
  time: string
): string {
  const now = new Date();

  const reminderDate = new Date(now);

  const normalizedDate = date.trim().toLowerCase();

  if (normalizedDate === "tomorrow") {
    reminderDate.setDate(reminderDate.getDate() + 1);
  } else if (normalizedDate === "today") {
    // keep today
  } else {
    const parsed = new Date(date);

    if (!isNaN(parsed.getTime())) {
      reminderDate.setFullYear(parsed.getFullYear());
      reminderDate.setMonth(parsed.getMonth());
      reminderDate.setDate(parsed.getDate());
    }
  }

  const match = time.match(/(\d+):(\d+)\s*(AM|PM)/i);

  if (match) {
    let hour = parseInt(match[1]);
    const minute = parseInt(match[2]);
    const period = match[3].toUpperCase();

    if (period === "PM" && hour !== 12) hour += 12;
    if (period === "AM" && hour === 12) hour = 0;

    reminderDate.setHours(hour);
    reminderDate.setMinutes(minute);
    reminderDate.setSeconds(0);
    reminderDate.setMilliseconds(0);
  }

  return reminderDate.toISOString();
}