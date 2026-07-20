"use client";

const ITEMS = [
  "WEBSITES",
  "HOSTING",
  "SUPPORT",
];

const separator = " \u00B7 ";

function MarqueeContent() {
  return (
    <span className="inline-flex items-center whitespace-nowrap">
      {ITEMS.map((item, i) => (
        <span key={i}>
          {item}
          {separator}
        </span>
      ))}
    </span>
  );
}

export default function Marquee() {
  return (
    <div className="border-y border-border py-4 overflow-hidden">
      <div className="marquee-track hover:[animation-play-state:paused] text-muted font-body text-xs tracking-[0.2em] uppercase">
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  );
}
