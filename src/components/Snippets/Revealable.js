'use client';
import React from 'react'

export default function Revealable({ children }) {
  const [isSnippetShown, setIsSnippetShown] = React.useState(false);
  return isSnippetShown ? (
    children
  ) : (
    <div className="reveal">
      <button onClick={() => setIsSnippetShown(true)}>
        Reveal Content
      </button>
    </div>
  );
}
