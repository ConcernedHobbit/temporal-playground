import { useState } from "react";
import DateShower from "./DateShower";

const builtInCalendars = [
  "iso8601",
  "hebrew",
  "islamic",
  "islamic-umalqura",
  "islamic-tbla",
  "islamic-civil",
  "islamic-rgsa",
  "islamicc",
  "persian",
  "ethiopic",
  "ethioaa",
  "coptic",
  "chinese",
  "dangi",
  "roc",
  "indian",
  "buddhist",
  "japanese",
  "gregory",
];

export default function DateExample() {
  const [stamp, setStamp] = useState("2023-02-10");
  const [toggle, setToggle] = useState(true);
  const [calendar, setCalendar] = useState<string | undefined>();

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          type={toggle ? "date" : "text"}
          value={stamp}
          onChange={(e) => setStamp(e.target.value)}
          style={{ width: "15ch" }}
        />

        <label>
          Date input
          <input
            type="checkbox"
            checked={toggle}
            onChange={(e) => setToggle(e.target.checked)}
          />
        </label>

        <label>
          <p style={{ marginBottom: 0 }}>Calendar</p>
          <select
            name="calendar"
            onChange={(e) =>
              setCalendar(
                e.target.value === "none" ? undefined : e.target.value
              )
            }
            value={calendar}
          >
            <option value="none">None</option>
            {builtInCalendars.map((id) => (
              <option value={id} key={id}>
                {id}
              </option>
            ))}
          </select>
        </label>
      </div>

      <DateShower stamp={stamp} calendar={calendar} />
    </>
  );
}
