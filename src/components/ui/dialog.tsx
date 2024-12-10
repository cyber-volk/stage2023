import React from 'react';

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        open ? 'block' : 'hidden'
      }`}
      onClick={() => onOpenChange(false)}
    >
      <div
        className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

interface DialogContentProps {
  children: React.ReactNode;
  className?: string;
}

export function DialogContent({ children, className }: DialogContentProps) {
  return <div className={className}>{children}</div>;
}

interface DialogTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

export function DialogTrigger({ children, asChild }: DialogTriggerProps) {
  return asChild ? <>{children}</> : <div>{children}</div>;
} 