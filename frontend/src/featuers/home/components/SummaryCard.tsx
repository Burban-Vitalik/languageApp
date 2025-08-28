export function SummaryCard({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div className="bg-gray-100 shadow-md rounded-2xl p-6 flex flex-col items-center justify-center text-center w-full max-w-xs hover:shadow-lg transition-shadow">
      <p className="text-3xl font-extrabold">{value}</p>
      <p className="text-md font-semibold text-gray-800 mt-2">{title}</p>
    </div>
  );
}

