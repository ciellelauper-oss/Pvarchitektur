import { useState, useRef } from 'react';

interface DropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export function Dropdown({ label, options, value, onChange }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-base bg-transparent border-none cursor-pointer p-0 transition-colors duration-300 text-[#777777] hover:text-black"
      >
        {label}: {value}
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full left-0 mt-2 bg-white border border-[#e5e5e5] min-w-[200px] z-50 transition-all duration-300 opacity-100">
            {options.map(option => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className={`block w-full text-left px-4 py-3 text-sm border-none bg-transparent cursor-pointer transition-colors duration-300 ${
                  value === option ? 'text-black' : 'text-[#777777] hover:text-black'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}