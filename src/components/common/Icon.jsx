/**
 * Single inline-SVG icon set.
 * Solid brand marks are flagged with `fill` so they render as silhouettes
 * while the outline icons stay stroke-based.
 */

const ICONS = {
  code: <path d="m8 8-4 4 4 4m8-8 4 4-4 4M14 4l-4 16" />,
  mobile: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M10.5 18.5h3" />
    </>
  ),
  clock: (
    <>
      <path d="M12 3v18M3 12h18" opacity=".35" />
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l2.5 2.5" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3 3 7.5l9 4.5 9-4.5L12 3Z" />
      <path d="M3 12.5 12 17l9-4.5M3 17 12 21.5 21 17" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.9 7.6 7 5a2 2 0 0 0 2.2 0l7-5" />
    </>
  ),
  phone: (
    <path d="M6.5 3h2.2l1.8 4.6-2.3 1.5a12 12 0 0 0 6.7 6.7l1.5-2.3L21 15.3v2.2a3 3 0 0 1-3.3 3A16.5 16.5 0 0 1 3.5 6.3 3 3 0 0 1 6.5 3Z" />
  ),
  arrowRight: <path d="M5 12h14m0 0-6-6m6 6-6 6" />,
  arrowUp: <path d="M12 20V5m0 0-6 6m6-6 6 6" />,
  download: <path d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5M4 19.5h16" />,
  external: (
    <path d="M14 4h6v6M20 4l-9 9M18 14v5.5A1.5 1.5 0 0 1 16.5 21h-11A1.5 1.5 0 0 1 4 19.5v-11A1.5 1.5 0 0 1 5.5 7H11" />
  ),
  github: (
    <path
      fillRule="evenodd"
      d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 2.5-.34c.85 0 1.71.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"
    />
  ),
  linkedin: (
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05a4.17 4.17 0 0 1 3.75-2.06c4.01 0 4.4 2.5 4.4 5.76V21h-4v-5.86c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1V21h-4V9Z" />
  ),
};

const FILLED = new Set(['github', 'linkedin']);

export default function Icon({ name, className = '', ...rest }) {
  const content = ICONS[name];

  if (!content) return null;

  return (
    <svg
      className={`icon ${FILLED.has(name) ? 'icon--fill' : ''} ${className}`.trim()}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {content}
    </svg>
  );
}
