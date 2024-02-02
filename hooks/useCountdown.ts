import { useState, useEffect } from "react";

function useCountdown(targetDate: string) {
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    const targetTime = new Date(targetDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        setCountdown(difference);
      }
    };

    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => clearInterval(countdownInterval);
  }, [targetDate]);

  const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

export default useCountdown;
