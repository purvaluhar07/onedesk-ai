type Props = {
  title: string;
  summary: string;
  keyPoints: string[];
  applications: string[];
  takeaway: string;
};

export default function ResearchCard({
  title,
  summary,
  keyPoints,
  applications,
  takeaway,
}: Props) {
  return (
    <div className="w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

      <h2 className="mb-6 text-3xl font-bold">
        🔍 {title}
      </h2>

      <div className="space-y-6">

        <div>
          <h3 className="mb-2 text-lg font-semibold text-blue-400">
            Summary
          </h3>

          <p className="text-gray-300 leading-7">
            {summary}
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold text-green-400">
            Key Points
          </h3>

          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            {keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold text-purple-400">
            Applications
          </h3>

          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            {applications.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold text-yellow-400">
            Takeaway
          </h3>

          <p className="text-gray-300">
            {takeaway}
          </p>
        </div>

      </div>

    </div>
  );
}