import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check, Search } from 'lucide-react';

interface Option {
  value: string;
  label: string;
  disabled?: boolean;
  description?: string;
  icon?: React.ElementType;
}

interface SelectProps {
  label?: string;
  error?: string;
  helperText?: string;
  options: Option[];
  placeholder?: string;
  variant?: 'default' | 'filled' | 'outlined' | 'minimal';
  selectSize?: 'sm' | 'md' | 'lg';
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  searchable?: boolean;
  maxHeight?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  error,
  helperText,
  options,
  placeholder = 'Select an option',
  variant = 'default',
  selectSize = 'md',
  value,
  onChange,
  disabled = false,
  searchable = false,
  maxHeight = '320px',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const selectedOption = options.find(opt => opt.value === value);

  const filteredOptions = searchable
    ? options.filter(opt =>
        opt.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : options;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && searchable && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen, searchable]);

  const handleSelect = (optionValue: string) => {
    onChange?.(optionValue);
    setIsOpen(false);
    setSearchQuery('');
    setHighlightedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    switch (e.key) {
      case 'Enter':
      case ' ':
        if (!isOpen) {
          setIsOpen(true);
        } else if ( highlightedIndex >= 0 &&
  highlightedIndex < filteredOptions.length) {
          const option = filteredOptions[highlightedIndex];
option && handleSelect(option.value);
        }
        e.preventDefault();
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setHighlightedIndex(prev =>
            prev < filteredOptions.length - 1 ? prev + 1 : prev
          );
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(prev => (prev > 0 ? prev - 1 : 0));
        break;
      case 'Escape':
        setIsOpen(false);
        setSearchQuery('');
        break;
    }
  };

  const baseClasses = `
    w-full font-medium
    transition-all duration-200 ease-out
    focus:outline-none
    disabled:opacity-50 disabled:cursor-not-allowed
    cursor-pointer
  `;

  const variants = {
    default: `
      bg-white border rounded-2xl
      shadow-sm hover:shadow-md
      ${isOpen ? 'shadow-lg ring-2 ring-blue-500/20 border-blue-500' : ''}
      ${error ? 'border-red-400' : 'border-gray-200'}
    `,
    filled: `
      bg-gray-100 border border-transparent rounded-2xl
      hover:bg-gray-150
      ${isOpen ? 'bg-white border-blue-500 ring-2 ring-blue-500/20' : ''}
      ${error ? 'bg-red-50' : ''}
    `,
    outlined: `
      bg-transparent border-2 rounded-2xl
      hover:border-gray-400
      ${isOpen ? 'border-blue-500 ring-4 ring-blue-500/10' : ''}
      ${error ? 'border-red-400' : 'border-gray-300'}
    `,
    minimal: `
      bg-transparent border-b-2 border-t-0 border-x-0 rounded-none
      px-0
      hover:border-gray-400
      ${isOpen ? 'border-blue-500' : ''}
      ${error ? 'border-red-400' : 'border-gray-300'}
    `,
  };

  const sizes = {
    sm: `text-sm ${variant === 'minimal' ? 'py-1.5 pr-6' : 'px-3 py-2 pr-9'}`,
    md: `text-base ${variant === 'minimal' ? 'py-2 pr-7' : 'px-4 py-3 pr-10'}`,
    lg: `text-lg ${variant === 'minimal' ? 'py-2.5 pr-8' : 'px-5 py-3.5 pr-11'}`,
  };

  const iconSizes = {
    sm: 16,
    md: 18,
    lg: 20,
  };

  const getIconPosition = () => {
    if (variant === 'minimal') return 'right-0';
    return selectSize === 'sm' ? 'right-3' : 'right-4';
  };

  return (
    <div className="w-full space-y-1.5" ref={containerRef}>
      {label && (
        <label className={`
          block text-sm font-medium mb-2
          transition-colors duration-200
          ${error ? 'text-red-500' : 'text-gray-700'}
          ${isOpen ? (error ? 'text-red-600' : 'text-blue-600') : ''}
        `}>
          {label}
        </label>
      )}

      <div className="relative">
        {/* Trigger Button */}
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          className={`
            ${baseClasses}
            ${variants[variant]}
            ${sizes[selectSize]}
            ${!selectedOption ? 'text-gray-400' : 'text-gray-900'}
            flex items-center justify-between
          `}
        >
          <span className="truncate flex items-center gap-2">
            {selectedOption?.icon && <selectedOption.icon size={iconSizes[selectSize]} />}
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown
            size={iconSizes[selectSize]}
            className={`
              transition-all duration-200
              ${error ? 'text-red-400' : 'text-gray-400'}
              ${isOpen ? `rotate-180 ${error ? 'text-red-500' : 'text-blue-500'}` : ''}
            `}
          />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className={`
            absolute z-50 w-full mt-2
            bg-white rounded-2xl border border-gray-200
            shadow-2xl shadow-gray-900/10
            overflow-hidden
            animate-in fade-in slide-in-from-top-2 duration-200
          `}>
            {/* Search Input */}
            {searchable && (
              <div className="p-2 border-b border-gray-100">
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              </div>
            )}

            {/* Options List */}
            <div
              className="overflow-y-auto py-1"
              style={{ maxHeight }}
            >
              {filteredOptions.length === 0 ? (
                <div className="px-4 py-8 text-center text-sm text-gray-400">
                  No options found
                </div>
              ) : (
                filteredOptions.map((option, index) => {
                  const isSelected = option.value === value;
                  const isHighlighted = index === highlightedIndex;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => !option.disabled && handleSelect(option.value)}
                      disabled={option.disabled}
                      onMouseEnter={() => setHighlightedIndex(index)}
                      className={`
                        w-full px-4 py-2.5 text-left
                        transition-all duration-150
                        flex items-center justify-between gap-3
                        ${option.disabled
                          ? 'opacity-50 cursor-not-allowed'
                          : 'cursor-pointer'
                        }
                        ${isSelected
                          ? 'bg-blue-50 text-blue-700'
                          : isHighlighted
                          ? 'bg-gray-50'
                          : 'hover:bg-gray-50'
                        }
                      `}
                    >
                      <div className="flex items-center gap-2.5 flex-1 min-w-0">
                        {option.icon && (
                          <option.icon
                            size={iconSizes[selectSize]}
                            className={isSelected ? 'text-blue-600' : 'text-gray-500'}
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <div className={`
                            font-medium truncate
                            ${isSelected ? 'text-blue-700' : 'text-gray-900'}
                          `}>
                            {option.label}
                          </div>
                          {option.description && (
                            <div className="text-xs text-gray-500 truncate mt-0.5">
                              {option.description}
                            </div>
                          )}
                        </div>
                      </div>
                      {isSelected && (
                        <Check size={16} className="text-blue-600 shrink-0" />
                      )}
                    </button>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>

      {/* Helper / Error Text */}
      {error ? (
        <p className="text-xs text-red-500 font-medium px-1 flex items-center gap-1">
          <span className="inline-block w-1 h-1 rounded-full bg-red-500"></span>
          {error}
        </p>
      ) : (
        helperText && (
          <p className="text-xs text-gray-500 px-1">{helperText}</p>
        )
      )}
    </div>
  );
};

export default Select;