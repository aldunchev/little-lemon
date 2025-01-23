export function formatDate(date) {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const day = new Date(date);
  const dayName = dayNames[day.getDay()];
  const dayOfMonth = day.getDate();

  // Add appropriate suffix (th, st, nd, rd)
  const suffix = getDaySuffix(dayOfMonth);

  return `${dayName}, ${dayOfMonth}${suffix}`;
}

function getDaySuffix(day) {
  if (day >= 11 && day <= 13) {
    return "th";
  }

  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
