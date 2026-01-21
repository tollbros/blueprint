import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../themes/ThemeProvider';
import styles from './Select.module.scss';
import ErrorTag from '../Tag/ErrorTag';
import SuccessTag from '../Tag/SuccessTag';
import { icons } from '../../icons';

const resolveIconSrc = (src) => (typeof src === 'string' ? src : src?.src || src?.default || '');

const Select = ({ options, placeholder = 'Select an option', state = 'Base', className = '' }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);
  const theme = useTheme();
  const isErrorState = state === 'Error';
  const isSuccessState = state === 'Success';
  const isDisabled = state === 'Disabled';
  const isOpenState = state === 'OpenUnselected' || state === 'OpenSelected' || isOpen;
  const chevronIcon = icons.find((iconItem) => iconItem.name === 'ChevronDown');
  const iconSrc = resolveIconSrc(chevronIcon?.src || '');

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
  const containerClassName = [
    styles.selectContainer,
    selectedOption && styles.filled,
    isOpen && styles.open,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={styles.selectWrapper}>
      <div
        ref={selectRef}
        className={containerClassName}
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
        <div className={styles.dropdown} data-preview-dropdown data-open={isOpen}>
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
        <span className={[styles.arrowIcon, isOpenState && styles.arrowIconOpen].filter(Boolean).join(' ')}>
          <img alt='' className={styles.arrowIconImage} src={iconSrc} />
        </span>
      </div>
      {isErrorState && <ErrorTag className={styles.stateTag} />}
      {isSuccessState && <SuccessTag className={styles.stateTag} />}
    </div>
  );
};

export default Select;
