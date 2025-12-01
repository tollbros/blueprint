import React from 'react';
import styles from './NoIndexHeader.module.scss';

const LOGO_ON_DARK = 'https://cdn.tollbrothers.com/sites/comtollbrotherswww/svg/toll_logo.svg';
const LOGO_FALLBACK = '/toll-brothers-logo-light.svg';

const SearchIcon = () => (
  <svg aria-hidden='true' className={styles.icon} fill='none' height='16' viewBox='0 0 18 18' width='16'>
    <circle cx='7.5' cy='7.5' r='6.5' stroke='currentColor' strokeWidth='1.5' />
    <line x1='12.439' x2='17' y1='12.5' y2='17.061' stroke='currentColor' strokeWidth='1.5' />
  </svg>
);

const MenuIcon = () => (
  <svg aria-hidden='true' className={styles.icon} fill='none' height='16' viewBox='0 0 20 16' width='18'>
    <line stroke='currentColor' strokeWidth='2' x1='1' x2='19' y1='2' y2='2' />
    <line stroke='currentColor' strokeWidth='2' x1='1' x2='19' y1='8' y2='8' />
    <line stroke='currentColor' strokeWidth='2' x1='1' x2='19' y1='14' y2='14' />
  </svg>
);

const UtilityIcon = () => (
  <svg aria-hidden='true' className={styles.icon} fill='currentColor' height='16' viewBox='0 0 16 16' width='16'>
    <circle cx='8' cy='3' r='1.4' />
    <circle cx='8' cy='8' r='1.4' />
    <circle cx='8' cy='13' r='1.4' />
  </svg>
);

const EllipsisIcon = () => (
  <svg aria-hidden='true' className={styles.ellipsisIcon} fill='currentColor' height='6' viewBox='0 0 16 4' width='16'>
    <circle cx='2' cy='2' r='2' />
    <circle cx='8' cy='2' r='2' />
    <circle cx='14' cy='2' r='2' />
  </svg>
);

const IconButton = ({ label, onClick, children }) => (
  <button aria-label={label} className={styles.iconButton} onClick={onClick} type='button'>
    {children}
  </button>
);

const NoIndexHeader = ({
  backgroundImage,
  backgroundFallback = '/contemplative-reptile.jpg',
  title = 'Non-Index',
  onSearchClick,
  onMenuClick,
  onHomeClick,
  onLogoClick,
  className = '',
  logoSrc = LOGO_ON_DARK,
}) => {
  const handleLogoError = (event) => {
    if (event?.currentTarget?.src !== LOGO_FALLBACK) {
      event.currentTarget.src = LOGO_FALLBACK;
    }
  };

  return (
    <header
      className={`${styles.hero} ${className}`}
      style={{
        backgroundImage: [backgroundImage && `url(${backgroundImage})`, backgroundFallback].filter(Boolean).join(', '),
      }}
    >
      <div className={styles.overlay} />
      <div className={styles.inner}>
        <div className={styles.topBlock}>
          <div className={styles.topRow}>
            <button className={styles.logo} onClick={onLogoClick} type='button'>
              <img
                alt="Toll Brothers — America's Luxury Home Builder"
                className={styles.logoImage}
                onError={handleLogoError}
                src={logoSrc || LOGO_ON_DARK}
              />
            </button>
            <div className={styles.actions}>
              <IconButton label='Search' onClick={onSearchClick}>
                <SearchIcon />
              </IconButton>
              <IconButton label='Open menu' onClick={onMenuClick}>
                <MenuIcon />
              </IconButton>
            </div>
          </div>
          <div className={styles.breadcrumbRow}>
            <EllipsisIcon />
            <span className={styles.divider} aria-hidden='true' />
            <button className={styles.homeTrigger} onClick={onHomeClick} type='button'>
              Home
            </button>
          </div>
        </div>
      </div>
      <div className={styles.titleOverlay}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </header>
  );
};

export default NoIndexHeader;
