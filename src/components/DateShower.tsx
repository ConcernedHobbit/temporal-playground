import { Temporal } from "@js-temporal/polyfill";

export default function DateShower({
  stamp,
  calendar,
}: {
  stamp: string;
  calendar?: string;
}) {
  try {
    const plainDate = Temporal.PlainDate.from(stamp);
    const date = calendar ? plainDate.withCalendar(calendar) : plainDate;

    return (
      <div>
        <pre>{date.toString()}</pre>
        <pre>
          {date.year} has {date.daysInYear} days in year
        </pre>
        {date.inLeapYear && <pre>Leap year</pre>}
        <pre>Era: {date.era}</pre>
        <pre></pre>
      </div>
    );
  } catch (e: any) {
    return <pre>{e.message}</pre>;
  }
}
