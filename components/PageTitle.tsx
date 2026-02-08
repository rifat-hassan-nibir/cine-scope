export default function PageTitle({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2 md:p-3 bg-primary/10 rounded-xl">{icon}</div>
      <div>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">{title}</h1>
        <p className="text-gray-400 text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
}
