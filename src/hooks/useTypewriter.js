import { useEffect, useState } from 'react';

/**
 * Cycles through a list of words with a typewriter effect.
 * Respects the user's reduced-motion preference (renders the first word statically).
 *
 * @param {string[]} words
 * @param {{ typeSpeed?: number, deleteSpeed?: number, holdTime?: number }} options
 */
export default function useTypewriter(
  words,
  { typeSpeed = 78, deleteSpeed = 45, holdTime = 1900 } = {},
) {
  const [text, setText] = useState(words[0] ?? '');

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || words.length < 2) {
      setText(words[0] ?? '');
      return undefined;
    }

    let wordIndex = 0;
    let charIndex = (words[0] ?? '').length;
    let deleting = false;
    let timer;

    const tick = () => {
      const word = words[wordIndex] ?? '';

      if (!deleting) {
        charIndex += 1;
        if (charIndex >= word.length) {
          charIndex = word.length;
          deleting = true;
          setText(word);
          timer = window.setTimeout(tick, holdTime);
          return;
        }
      } else {
        charIndex -= 1;
        if (charIndex <= 0) {
          charIndex = 0;
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setText('');
          timer = window.setTimeout(tick, 260);
          return;
        }
      }

      setText(word.slice(0, charIndex));
      timer = window.setTimeout(tick, deleting ? deleteSpeed : typeSpeed);
    };

    timer = window.setTimeout(tick, 2100);

    return () => window.clearTimeout(timer);
  }, [words, typeSpeed, deleteSpeed, holdTime]);

  return text;
}
