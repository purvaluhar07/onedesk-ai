type Props = {
  title: string;
 summary: string;
  keyPoints: string[];
  conclusion: string;
};

export default function SummaryCard({
  title,
  summary,
  keyPoints,
  conclusion,
}: Props) {
  return (
    <div className="w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

      <h2 className="mb-6 text-3xl font-bold">
        📄 {title}
      </h2>

      <div className="space-y-6">

        <div>
          <h3 className="mb-2 text-lg font-semibold text-blue-400">
            Summary
          </h3>

          <p className="leading-7 text-gray-300">
            {summary}
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold text-green-400">
            Key Points
          </h3>

          <ul className="list-disc space-y-2 pl-5 text-gray-300">
            {keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold text-yellow-400">
            Conclusion
          </h3>

          <p className="text-gray-300">
            {conclusion}
          </p>
        </div>

      </div>

    </div>
  );
}