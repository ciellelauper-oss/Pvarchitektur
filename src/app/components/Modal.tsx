import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center px-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80" />
      
      {/* Modal */}
      <div 
        className="relative bg-black border border-[#333333] w-full max-w-[800px] max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-black border-b border-[#333333] px-12 py-8 flex items-center justify-between">
          <h2 className="text-xl text-white font-heading">{title}</h2>
          <button
            onClick={onClose}
            className="text-[#999999] hover:text-white transition-colors duration-300 text-2xl leading-none"
            aria-label="Schließen"
          >
            ×
          </button>
        </div>
        
        {/* Content */}
        <div className="px-12 py-12">
          {children}
        </div>
      </div>
    </div>
  );
}