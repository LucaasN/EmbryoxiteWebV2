import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineBackgroundProps {
  className?: string;
  opacity?: number;
}

const SplineBackground: React.FC<SplineBackgroundProps> = ({ 
  className = '', 
  opacity = 0.3 
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check for WebGL support on component mount
  React.useEffect(() => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      console.log('WebGL not supported, disabling Spline background');
      setHasError(true);
      setIsLoading(false);
    }
  }, []);
  const handleSplineError = () => {
    console.log('Spline background scene failed to load');
    setHasError(true);
    setIsLoading(false);
  };

  const handleSplineLoad = () => {
    console.log('Spline background loaded successfully');
    setIsLoading(false);
  };

  // Don't render anything if there's an error
  if (hasError) {
    return null;
  }

  return (
    <div 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ opacity }}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 animate-pulse" />
      )}
      <div style={{ 
        width: '100%', 
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1
      }}>
        <Spline
          scene="https://prod.spline.design/IZm43Bq6sFw2ragx/scene.splinecode"
          onLoad={handleSplineLoad}
          onError={handleSplineError}
        />
      </div>
    </div>
  );
};

export default SplineBackground;