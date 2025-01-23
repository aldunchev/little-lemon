export function Pill({ text }) {
  return (
    <div className="pill flex items-center justify-center p-2 bg-primary text-white rounded-sm">
      <span>{text}</span>
    </div>
  );
}
