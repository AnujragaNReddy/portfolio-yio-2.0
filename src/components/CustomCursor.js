import { useEffect, useRef } from 'react';
import './CustomCursor.css';

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    if (isCoarsePointer) return undefined;

    const handleMove = (e) => {
      const { clientX: x, clientY: y } = e;
      if (dotRef.current) dotRef.current.style.transform = `translate(${x}px, ${y}px)`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    const handleOver = (e) => {
      const isInteractive = e.target.closest('a, button, .cursor-hover');
      ringRef.current?.classList.toggle('cursor-ring--active', Boolean(isInteractive));
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseover', handleOver);
    document.body.classList.add('has-custom-cursor');

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
      document.body.classList.remove('has-custom-cursor');
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}

export default CustomCursor;
