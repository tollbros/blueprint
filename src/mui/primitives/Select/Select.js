import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import styles from './Select.module.scss';

const Select = ({ options, placeholder = 'Select an option' }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);
  const theme = useTheme();

  const handleSelect = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

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

  const selectedLabel = options.find((option) => option.value === selectedOption)?.label || '';

  return (
    <div
      ref={selectRef}
      className={`${styles.selectContainer} ${selectedOption && styles.filled} ${isOpen && styles.open}`}
      onClick={toggleDropdown}
      style={{
        borderColor: theme.palette?.TB?.Brand?.Gray,
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
            onClick={() => handleSelect(option.value)}
          >
            {option.label}
          </div>
        ))}
      </div>
      <span className={styles.arrowIcon}>▼</span>
    </div>
  );
};

export default Select;
