export function Pill({ text }) {
  return (
    <div className="pill flex items-center justify-center px-2 py-1 rounded-sm bg-primary text-white rounded-sm">
      <span>{text}</span>
    </div>
  );
}
