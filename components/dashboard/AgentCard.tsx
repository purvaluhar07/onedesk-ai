type Props = {
  icon: string;
  title: string;
  description: string;
  color: string;
};

export default function AgentCard({
  icon,
  title,
  description,
  color,
}: Props) {
  return (
    <div
      className="
      group
      rounded-2xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-6
      transition-all
      duration-300
      hover:scale-[1.03]
      hover:border-white/30
      hover:bg-white/10
      cursor-pointer
      shadow-lg
      "
    >
      <div
        className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl text-3xl ${color}`}
      >
        {icon}
      </div>

      <h3 className="text-xl font-bold">{title}</h3>

      <p className="mt-2 text-sm text-gray-400 leading-6">
        {description}
      </p>
    </div>
  );
}