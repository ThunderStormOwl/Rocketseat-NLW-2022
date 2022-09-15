export function convertMinutesToHourString(minutes: number) {
  const resultMinutes = minutes % 60;
  const resultHours = (minutes - resultMinutes) / 60;

  return `${String(resultHours).padStart(2, '0')}:${String(resultMinutes).padStart(2, '0')}`;
}
