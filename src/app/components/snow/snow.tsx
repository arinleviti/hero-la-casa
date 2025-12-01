"use client";

import { useEffect, useState } from "react";
import Snowfall from "react-snowfall";

export default function Snow() {
  const [active, setActive] = useState(true);

  // ❄ Stop after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setActive(false), 90000);
    return () => clearTimeout(timer);
  }, []);

  if (!active) return null;

  return (
    <Snowfall
      snowflakeCount={30}
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",  // ❄ users can still click your site
        zIndex: 99999
      }}
    />
  );
}
