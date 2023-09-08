import { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Confirmed() {
  const [percentage, setPercentage] = useState(0);
  const [text, setText] = useState("🍪");

  useEffect(() => {
    const t1 = setTimeout(() => setPercentage(100), 100);
    const t2 = setTimeout(() => setText("✅"), 1100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ height: "12rem", width: "12rem" }}>
        <CircularProgressbar
          value={percentage}
          text={text}
          styles={buildStyles({
            pathColor: "#50EA95",
          })}
        />
      </div>
    </div>
  );
}
