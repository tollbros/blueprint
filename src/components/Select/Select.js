import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../themes/ThemeProvider';
import styles from './Select.module.scss';

const ChevronDown = () => (
  <svg aria-hidden='true' className={styles.arrowIcon} fill='none' height='10' viewBox='0 0 12 8' width='12'>
    <path d='M1 1.5L6 6.5L11 1.5' stroke='currentColor' strokeWidth='1.5' />
  </svg>
);

const Select = ({ options, placeholder = 'Select an option', value, onChange, className = '', fullWidth = false }) => {
  const [selectedOption, setSelectedOption] = useState(value ?? '');
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);
  const theme = useTheme();

  const handleSelect = (nextValue) => {
    if (value === undefined) {
      setSelectedOption(nextValue);
    }
    if (typeof onChange === 'function') {
      onChange(nextValue);
    }
    setIsOpen(false);
  };

  const toggleDropdown = () => setIsOpen((open) => !open);

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (value !== undefined) {
      setSelectedOption(value);
    }
  }, [value]);

  const selectedLabel = options.find((option) => option.value === selectedOption)?.label || '';
  const containerClassNames = [
    styles.selectContainer,
    selectedOption && styles.filled,
    isOpen && styles.open,
    fullWidth && styles.fullWidth,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      ref={selectRef}
      className={containerClassNames}
      onClick={toggleDropdown}
      style={{
        borderColor: theme?.palette?.TB?.Brand?.Gray,
      }}
    >
      <div className={styles.textContainer}>
        <label
          className={`${styles.placeholder} ${selectedOption ? styles.placeholderSmall : styles.placeholderLarge}`}
        >
          {placeholder}
        </label>
        {selectedOption && <span className={styles.selectedText}>{selectedLabel}</span>}
      </div>
      <div className={styles.dropdown}>
        {options.map((option) => (
          <div
            key={option.value}
            className={`${styles.option} ${option.value === selectedOption ? styles.selected : ''}`}
            onClick={(event) => {
              event.stopPropagation();
              handleSelect(option.value);
            }}
          >
            {option.label}
          </div>
        ))}
      </div>
      <ChevronDown />
    </div>
  );
};

export default Select;
