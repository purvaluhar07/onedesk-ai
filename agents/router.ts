export function getAgent(userMessage: string) {
  const message = userMessage.toLowerCase();

  // 📧 Email Agent
  if (
    message.includes("email") ||
    message.includes("mail") ||
    message.includes("reply") ||
    message.includes("compose")
  ) {
    return "email";
  }

  // 📅 Scheduler Agent
  if (
    message.includes("schedule") ||
    message.includes("plan") ||
    message.includes("calendar") ||
    message.includes("meeting")
  ) {
    return "scheduler";
  }

  // 🔔 Reminder Agent
  if (
    message.includes("remind") ||
    message.includes("reminder") ||
    message.includes("notify") ||
    message.includes("notification") ||
    message.includes("don't let me forget") ||
    message.includes("dont let me forget") ||
    message.includes("alert")
  ) {
    return "reminder";
  }

  // 🔍 Research Agent
  if (
    message.includes("research") ||
    message.includes("find") ||
    message.includes("search") ||
    message.includes("analyze")
  ) {
    return "research";
  }

  // 📄 Document Agent
  if (
    message.includes("document") ||
    message.includes("pdf") ||
    message.includes("file") ||
    message.includes("summarize") ||
    message.includes("summary")
  ) {
    return "document";
  }

  // 🤖 General Agent
  return "general";
}