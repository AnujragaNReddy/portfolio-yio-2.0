import { useEffect, useRef } from 'react';

function useMagnetic(strength = 0.35) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    if (isCoarsePointer) return undefined;

    node.style.transition = 'transform 0.2s ease-out';

    const handleMove = (e) => {
      const rect = node.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      node.style.transform = `translate(${x * strength}px, ${y * strength}px) scale(1.05)`;
    };

    const handleLeave = () => {
      node.style.transform = 'translate(0, 0) scale(1)';
    };

    node.addEventListener('mousemove', handleMove);
    node.addEventListener('mouseleave', handleLeave);

    return () => {
      node.removeEventListener('mousemove', handleMove);
      node.removeEventListener('mouseleave', handleLeave);
    };
  }, [strength]);

  return ref;
}

export default useMagnetic;
