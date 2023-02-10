import { useNow } from "../useNow";

export default function CurrentTime({
  locales = "fi-FI",
}: {
  locales?: string | string[];
}) {
  const now = useNow();
  return <>It is currently {now.toLocaleString(locales)}</>;
}
