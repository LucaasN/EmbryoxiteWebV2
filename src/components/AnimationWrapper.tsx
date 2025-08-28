import React, { useEffect, useRef, useState } from 'react';

interface AnimationWrapperProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale-in';
  delay?: number;
  threshold?: number;
  className?: string;
}

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold]);

  const getAnimationClass = () => {
    const baseClass = animation.replace('-', '-in-');
    return `${baseClass} ${isVisible ? 'animate' : ''}`;
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimationWrapper;