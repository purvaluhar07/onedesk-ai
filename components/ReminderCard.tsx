type Notification = {
  before: string;
  method: string;
};

type Props = {
  title: string;
  date: string;
  time: string;
  repeat: string;
  notifications: Notification[];
};

export default function ReminderCard({
  title,
  date,
  time,
  repeat,
  notifications,
}: Props) {
  return (
    <div className="w-full max-w-3xl rounded-2xl border border-amber-500/20 bg-white/5 p-6 backdrop-blur-xl">

      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">
          ⏰ Reminder Created
        </h2>

        <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
          Active
        </span>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <div>
          <p className="text-sm text-gray-400">Title</p>
          <p className="mt-1 text-lg font-semibold">
            {title}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-400">Date</p>
          <p className="mt-1 text-lg font-semibold">
            {date}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-400">Time</p>
          <p className="mt-1 text-lg font-semibold">
            {time}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-400">Repeat</p>
          <p className="mt-1 text-lg font-semibold">
            {repeat}
          </p>
        </div>

      </div>

      <div className="mt-8">

        <h3 className="mb-3 text-lg font-semibold text-amber-400">
          🔔 Notifications
        </h3>

        <div className="space-y-2">

          {notifications.map((item, index) => (
            <div
              key={index}
              className="rounded-lg border border-white/10 bg-white/5 p-3"
            >
              🔔 {item.before} ({item.method})
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}