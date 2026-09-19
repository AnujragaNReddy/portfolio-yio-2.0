import { useEffect, useRef, useState } from 'react';

function useTypewriter(words, options = {}) {
  const { typingSpeed = 70, deletingSpeed = 40, pauseMs = 1500 } = options;
  const prefersReducedMotion = useRef(
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ).current;

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(prefersReducedMotion ? words[0] : '');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const currentWord = words[wordIndex % words.length];
    let timeout;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseMs);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      const next = isDeleting ? currentWord.slice(0, text.length - 1) : currentWord.slice(0, text.length + 1);
      timeout = setTimeout(() => setText(next), isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseMs, prefersReducedMotion]);

  return text;
}

export default useTypewriter;
