type Props = {
  title: string;
  value: string | number;
  icon: string;
};

export default function StatsCard({
  title,
  value,
  icon,
}: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
      <div className="flex items-center justify-between">
        <span className="text-gray-400">{title}</span>
        <span className="text-2xl">{icon}</span>
      </div>

      <h2 className="mt-4 text-3xl font-bold">
        {value}
      </h2>
    </div>
  );
}