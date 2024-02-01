'use client';

import { useState, useEffect, useRef } from 'react';

function useHover(): [React.RefObject<any>, boolean] {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const ref = useRef<any>(null);

  const handleMouseOver = (): void => setIsHovered(true);
  const handleMouseOut = (): void => setIsHovered(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);

      return () => {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, [ref.current]);

  return [ref, isHovered];
}

// if you want to try your code on the right panel
// remember to export App() component like below

export default function UseHoverPage() {
  const [ref, isHovered] = useHover();
  return <div ref={ref}>{isHovered ? 'hovered' : 'not hovered'}</div>;
}
