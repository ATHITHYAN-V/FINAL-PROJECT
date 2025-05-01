import React from 'react';

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ to, children, className = '' }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Dispatch a custom event for navigation
    window.dispatchEvent(
      new CustomEvent('navigate', { detail: { to } })
    );
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};