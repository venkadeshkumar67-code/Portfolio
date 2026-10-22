import { useMemo } from 'react';
import { codeSnippet } from '../../data/siteData';
import './CodeCard.css';

/** Renders one token of the syntax-highlighted snippet. */
function Token({ token }) {
  if (token.t === 'plain') return token.v;
  return <span className={`code-card__tok code-card__tok--${token.t}`}>{token.v}</span>;
}

/**
 * Decorative window that shows the developer's profile as a JS object.
 */
export default function CodeCard() {
  const lines = useMemo(
    () =>
      codeSnippet.map((tokens, index) =>
        tokens.length === 0 ? (
          <span key={index}>{'\n'}</span>
        ) : (
          <span key={index}>
            {tokens.map((token, tokenIndex) => (
              <Token key={tokenIndex} token={token} />
            ))}
            {index < codeSnippet.length - 1 ? '\n' : null}
          </span>
        ),
      ),
    [],
  );

  return (
    <div className="code-card">
      <div className="code-card__bar">
        <span className="code-card__dot code-card__dot--red" />
        <span className="code-card__dot code-card__dot--yellow" />
        <span className="code-card__dot code-card__dot--green" />
        <span className="code-card__file mono">developer.js</span>
      </div>
      <pre className="code-card__body mono" aria-label="Developer profile as a JavaScript object">
        <code>{lines}</code>
      </pre>
    </div>
  );
}
