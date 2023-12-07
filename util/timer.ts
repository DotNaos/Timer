interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const getTime = (): TimeLeft  => {
  const targetDate = new Date("2024-04-19T00:00:00Z").getTime();
  const now = new Date().getTime();

  const difference = targetDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  const timeLeft = {
    days,
    hours,
    minutes,
    seconds,
  };

  return timeLeft;
};
