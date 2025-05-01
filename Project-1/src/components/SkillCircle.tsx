import React, { useState, useEffect } from 'react';

interface SkillCircleProps {
  percentage: number;
}

const SkillCircle: React.FC<SkillCircleProps> = ({ percentage }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const circleRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => {
      if (circleRef.current) {
        observer.unobserve(circleRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setProgress(percentage);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, percentage]);

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div ref={circleRef} className="relative inline-flex items-center justify-center group">
      <svg className="w-32 h-32 transform transition-transform duration-300 group-hover:rotate-180" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#E5E7EB"
          strokeWidth="8"
          fill="none"
          className="transition-all duration-300"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#4F46E5"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 50 50)"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold transition-all duration-300 group-hover:scale-110">{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default SkillCircle;