import { Temporal } from "@js-temporal/polyfill";
import { useZonedNow } from "../useNow";

export default function TimestampExample() {
  const now = useZonedNow({ timeZone: "Europe/Helsinki", calendar: "gregory" });

  const timestamp = "2023-02-10T11:09:05Z";
  const instant = Temporal.Instant.from(timestamp);
  const zonedDateTime = instant.toZonedDateTime({
    timeZone: "Europe/Helsinki",
    calendar: "gregory",
  });

  return (
    <table>
      <tbody>
        <tr>
          <th>Raw string</th>
          <td>{timestamp}</td>
        </tr>
        <tr>
          <th>Instant</th>
          <td>{instant.toString()}</td>
        </tr>
        <tr>
          <th>Format ZonedDateTime</th>
          <td>{zonedDateTime.toLocaleString("fi-FI")}</td>
        </tr>
        <tr>
          <th>Minutes past</th>
          <td>{now.since(zonedDateTime).minutes}</td>
        </tr>
        <tr>
          <th>Total seconds past</th>
          <td>
            {now.since(zonedDateTime).total({ unit: "second" }).toFixed(0)}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
