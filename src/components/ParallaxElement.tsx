import React, { useEffect, useRef, useState } from 'react';

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxElement: React.FC<ParallaxElementProps> = ({
  children,
  speed = 0.5,
  className = ''
}) => {
  const [offsetY, setOffsetY] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * -speed;
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setOffsetY(rate);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={elementRef}
      className={`parallax-element ${className}`}
      style={{
        transform: `translateY(${offsetY}px)`,
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxElement;