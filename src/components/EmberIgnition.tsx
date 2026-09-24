"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function EmberIgnition() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<"hold" | "dissolve" | "gone">("hold");

  useEffect(() => {
    if (pathname !== "/") {
      window.dispatchEvent(new Event("p6-ember-done"));
      return;
    }
    if (document.documentElement.classList.contains("skip-ignition")) {
      setPhase("gone");
      window.dispatchEvent(new Event("p6-ember-done"));
      return;
    }
    try {
      sessionStorage.setItem("p6-ember", "1");
    } catch {
      /* private mode */
    }
    const dissolve = window.setTimeout(() => setPhase("dissolve"), 1150);
    const done = window.setTimeout(() => {
      setPhase("gone");
      window.dispatchEvent(new Event("p6-ember-done"));
    }, 1550);
    return () => {
      window.clearTimeout(dissolve);
      window.clearTimeout(done);
    };
  }, [pathname]);

  if (pathname !== "/" || phase === "gone") return null;

  return (
    <div
      className="ember-ignition fixed inset-0 z-[80] flex flex-col items-center justify-center bg-[#100e0c]"
      style={{
        opacity: phase === "dissolve" ? 0 : 1,
        transition: "opacity 400ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 112" className="h-28 w-28 sm:h-36 sm:w-36">
        <polygon className="ember-hex" points="50,4 94,29 94,79 50,104 6,79 6,29" />
      </svg>
      <p
        className="mt-8 font-semibold uppercase text-[#f7f4ef]"
        style={{
          letterSpacing: "0.42em",
          fontSize: "clamp(1.1rem, 3vw, 1.7rem)",
          animation: "ember-word 1.15s cubic-bezier(0.22, 1, 0.36, 1) both",
        }}
      >
        Prime 6
      </p>
      <style>{`@keyframes ember-word{0%{opacity:0;letter-spacing:0.12em}100%{opacity:1;letter-spacing:0.42em}}`}</style>
    </div>
  );
}
