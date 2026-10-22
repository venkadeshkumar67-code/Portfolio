import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently in the middle of the viewport
 * so the navigation can highlight the matching link.
 *
 * @param {string[]} ids Section ids, in document order.
 * @returns {string} The id of the active section ('' when none).
 */
export default function useActiveSection(ids) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element) => Boolean(element));

    if (elements.length === 0) return undefined;

    const visible = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });

        // Keep document order so the first visible section wins.
        const next = ids.find((id) => visible.has(id));
        setActiveId(next ?? '');
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
