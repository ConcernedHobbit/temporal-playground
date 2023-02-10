import { Temporal } from "@js-temporal/polyfill";
import { useState, useEffect } from "react";

const getNow = () => Temporal.Now.instant();

export const useNow = () => {
  const [now, setNow] = useState(getNow());

  useEffect(() => {
    const interval = setInterval(() => setNow(getNow()), 1000);
    return () => clearInterval(interval);
  }, []);
  return now;
};

export const useZonedNow = (options: {
  timeZone: "Europe/Helsinki";
  calendar: "gregory";
}) => {
  const now = useNow();
  return now.toZonedDateTime(options);
};
