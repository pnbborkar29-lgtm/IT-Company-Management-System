interface StatCardProps {
  title: string;
  value: number;
}

export default function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="mt-3 text-2xl font-bold">{value}</p>
    </div>
  );
}
