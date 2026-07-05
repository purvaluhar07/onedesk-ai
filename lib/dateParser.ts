export function parseReminderDateTime(
  date: string,
  time: string
): string {
  const now = new Date();

  const reminder = new Date(now);

  const lowerDate = date.toLowerCase();

  if (lowerDate.includes("tomorrow")) {
    reminder.setDate(reminder.getDate() + 1);
  }

  if (lowerDate.includes("today")) {
    // keep today's date
  }

  const match = time.match(/(\d+):(\d+)\s*(AM|PM)/i);

  if (match) {
    let hour = parseInt(match[1]);
    const minute = parseInt(match[2]);
    const period = match[3].toUpperCase();

    if (period === "PM" && hour !== 12) hour += 12;
    if (period === "AM" && hour === 12) hour = 0;

    reminder.setHours(hour);
    reminder.setMinutes(minute);
    reminder.setSeconds(0);
    reminder.setMilliseconds(0);
  }

  return reminder.toISOString();
}