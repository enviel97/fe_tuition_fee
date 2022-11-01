import { useEffect, useState } from "react";
const useCountDown = (limit: number) => {
  const [tick, setTick] = useState(limit);

  const reset = () => {
    setTick(limit);
  };

  useEffect(() => {
    const interval = tick > 0 && setInterval(() => setTick(tick - 1), 1000);
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [limit, tick]);

  return { tick, reset };
};

export default useCountDown;
