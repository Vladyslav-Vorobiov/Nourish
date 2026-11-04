const drawings = {
  blackberry: (
    <>
      <path d="M16 7V3m0 4-5-3m5 3 5-3" />
      <circle cx="13" cy="10" r="3" />
      <circle cx="19" cy="10" r="3" />
      <circle cx="10" cy="15" r="3" />
      <circle cx="16" cy="15" r="3" />
      <circle cx="22" cy="15" r="3" />
      <circle cx="10" cy="21" r="3" />
      <circle cx="16" cy="21" r="3" />
      <circle cx="22" cy="21" r="3" />
      <circle cx="13" cy="26" r="3" />
      <circle cx="19" cy="26" r="3" />
    </>
  ),
  sweetcorn: (
    <>
      <path d="M10 17V9c0-4 3-6 6-6s6 2 6 6v8M16 29C8 26 5 19 5 12c7 2 11 8 11 17Zm0 0c8-3 11-10 11-17-7 2-11 8-11 17Z" />
      <path d="M16 4v17m-5-12h10m-11 5h12m-12 5h12M16 29v1" />
    </>
  ),
  fig: (
    <>
      <path d="M15 4h3v4c0 4 9 7 9 14 0 5-5 7-11 7S5 27 5 22c0-7 9-10 10-14V4Z" />
      <path d="M16 10c-1 5-6 8-6 12 0 3 2 4 6 4s6-1 6-4c0-4-5-7-6-12Z" />
      <path d="M14 19v1m4-1v1m-4 3v1m4-1v1" />
    </>
  ),
  basil: (
    <>
      <path d="M16 29V10m0 1c-5-4-5-7 0-9 5 2 5 5 0 9Z" />
      <path d="M16 17C8 19 3 14 5 8c7-1 11 3 11 9Zm0 0c8 2 13-3 11-9-7-1-11 3-11 9Zm0 9C8 28 3 24 5 18c7-1 11 2 11 8Zm0 0c8 2 13-2 11-8-7-1-11 2-11 8Z" />
      <path d="m8 11 8 6 8-6M8 21l8 5 8-5" />
    </>
  ),
  peach: (
    <>
      <path d="M16 10C8 5 3 11 4 18c1 6 6 11 12 11s11-5 12-11c1-7-4-13-12-8Z" />
      <path d="M16 10c-3 5-2 12 1 16m-1-16V6m0 1c3-5 7-5 11-3-2 5-6 6-11 3Z" />
    </>
  ),
  eggplant: (
    <>
      <path d="M19 9c-7 0-8 5-9 10-1 4-3 5-6 5 2 5 7 7 12 4 5-3 10-9 10-14 0-2-2-4-4-4" />
      <path d="M19 9c1-3 3-5 6-6m-6 6-4 1 5 3 1 5 3-4 4-1-6-3-3-1Z" />
      <path d="M13 19c-1 4-3 6-5 7" />
    </>
  ),
  "bean-pod": (
    <>
      <path d="M6 26C2 20 7 9 24 5c4 2 4 5 2 9C21 25 12 30 6 26Z" />
      <path d="m24 5 3-2M8 24c5-2 11-8 15-15" />
      <ellipse cx="11" cy="20" rx="2" ry="2.5" transform="rotate(35 11 20)" />
      <ellipse cx="16" cy="15" rx="2" ry="2.5" transform="rotate(35 16 15)" />
      <ellipse cx="21" cy="10" rx="2" ry="2.5" transform="rotate(35 21 10)" />
    </>
  ),
  wheat: (
    <>
      <path d="M16 29V9m0-6c-4 3-4 6 0 9 4-3 4-6 0-9Z" />
      <path d="M16 17c-6 0-9-3-9-7 6 0 9 3 9 7Zm0 0c6 0 9-3 9-7-6 0-9 3-9 7Zm0 7c-6 0-9-3-9-7 6 0 9 3 9 7Zm0 0c6 0 9-3 9-7-6 0-9 3-9 7Z" />
    </>
  ),
  tomato: (
    <>
      <path d="M16 10C9 5 3 11 4 18c1 6 6 10 12 10s11-4 12-10c1-7-5-13-12-8Z" />
      <path d="M16 9c-1-3 0-5 2-6m-2 6-5-3 2 5-5 2 6 1 2 4 2-4 6-1-5-2 2-5-5 3Z" />
      <path d="M8 18c0 3 2 5 4 6" />
    </>
  ),
  "olive-oil": (
    <>
      <path d="M12 3h8v5h-8zM13 8v4l-4 5v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V17l-4-5V8M9 18h14" />
      <path d="M13 26c0-4 2-6 6-7-1 4-3 6-6 7Zm0 0 5-6" />
    </>
  ),
  herb: (
    <>
      <path d="M9 29c4-9 9-16 14-25" />
      <path d="M20 10c-2-4-1-6 3-7 1 4 0 6-3 7Zm-3 5c-5-1-7-4-6-8 5 1 7 4 6 8Zm0 0c1-5 5-7 10-6-1 4-5 6-10 6Zm-5 8c-5-1-7-4-6-8 5 1 7 4 6 8Zm0 0c2-5 6-6 11-4-2 4-6 6-11 4Z" />
    </>
  ),
};

export function PantryIcon({ subject, className = "size-8" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={`${className} shrink-0 text-olive`}
    >
      {drawings[subject]}
    </svg>
  );
}
