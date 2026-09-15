import React, { useEffect, useId, useRef, useState } from 'react';

export function FilterOption({ checked, onToggle, children }) {
  const inputId = useId();

  const handleClick = event => {
    event.preventDefault();
    onToggle();
  };

  return (
    <label htmlFor={inputId} className="filter-checkbox" onClick={handleClick}>
      <input id={inputId} type="checkbox" checked={checked} readOnly />
      <span>{children}</span>
    </label>
  );
}

export default function FilterDropdown({ label, selectedCount = 0, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const groupRef = useRef(null);
  const buttonRef = useRef(null);
  const baseId = useId();
  const buttonId = `${baseId}-button`;
  const optionsId = `${baseId}-options`;

  useEffect(() => {
    if (!isOpen) return undefined;

    const handlePointerDown = event => {
      if (!groupRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleFocusIn = event => {
      if (!groupRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('focusin', handleFocusIn);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('focusin', handleFocusIn);
    };
  }, [isOpen]);

  const closeAndRestoreFocus = () => {
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  const handleKeyDown = event => {
    if (event.key === 'Escape' && isOpen) {
      event.preventDefault();
      event.stopPropagation();
      closeAndRestoreFocus();
    }
  };

  return (
    <div
      ref={groupRef}
      className={`filter-group${isOpen ? ' is-open' : ''}${selectedCount > 0 ? ' has-selection' : ''}`}
      onKeyDown={handleKeyDown}
    >
      <button
        ref={buttonRef}
        id={buttonId}
        type="button"
        className="filter-dropdown-button"
        aria-expanded={isOpen}
        aria-controls={optionsId}
        onClick={() => setIsOpen(open => !open)}
      >
        {label} {selectedCount > 0 && `(${selectedCount})`}
      </button>
      <div
        id={optionsId}
        className="filter-dropdown-content"
        role="group"
        aria-labelledby={buttonId}
      >
        {children}
      </div>
    </div>
  );
}
