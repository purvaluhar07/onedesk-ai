import EmailCard from "./EmailCard";
import ScheduleCard from "./ScheduleCard";
import ResearchCard from "./ResearchCard";
import SummaryCard from "./SummaryCard";
import ReminderCard from "./ReminderCard";

type Props = {
  data: any;
};

export default function MessageRenderer({ data }: Props) {
  if (!data) return null;

  switch (data.type) {
    case "email":
      return (
        <EmailCard
          subject={data.subject}
          body={data.body}
        />
      );

    case "schedule":
      return (
        <ScheduleCard
          title={data.title}
          schedule={data.schedule}
        />
      );

    case "research":
      return (
        <ResearchCard
          title={data.title}
          summary={data.summary}
          keyPoints={data.keyPoints}
          applications={data.applications}
          takeaway={data.takeaway}
        />
      );

    case "summary":
      return (
        <SummaryCard
          title={data.title}
          summary={data.summary}
          keyPoints={data.keyPoints}
          conclusion={data.conclusion}
        />
      );

    case "reminder":
      return (
        <ReminderCard
          title={data.title}
          date={data.date}
          time={data.time}
          repeat={data.repeat}
          notifications={data.notifications}
        />
      );

    default:
      return (
        <div className="rounded-xl border border-white/10 bg-white/5 p-5 whitespace-pre-wrap">
          {data.text}
        </div>
      );
  }
}