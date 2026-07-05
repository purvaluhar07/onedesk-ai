type ScheduleItem = {
  time: string;
  task: string;
};

type Props = {
  title: string;
  schedule: ScheduleItem[];
};

export default function ScheduleCard({
  title,
  schedule,
}: Props) {
  return (
    <div className="w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <h2 className="mb-6 text-3xl font-bold">
        📅 {title}
      </h2>

      <div className="overflow-hidden rounded-xl border border-white/10">
        <div className="grid grid-cols-2 bg-white/10 font-semibold">
          <div className="border-r border-white/10 p-4">
            Time
          </div>

          <div className="p-4">
            Task
          </div>
        </div>

        {schedule.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-2 border-t border-white/10 hover:bg-white/5 transition"
          >
            <div className="border-r border-white/10 p-4 text-gray-300">
              {item.time}
            </div>

            <div className="p-4">
              {item.task}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}