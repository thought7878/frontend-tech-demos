'use client';
/* 
https://bigfrontend.dev/react/useHover
*/

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
  return (
    <div>
      <div ref={ref}>{isHovered ? 'hovered' : 'not hovered'}</div>
      <div className='bg-blue-500 p-5'>I do not use hover</div>
    </div>
  );
}
