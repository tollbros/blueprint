import React, { useState } from 'react';
import Button from '../Button/Button';
import Select from '../Select/Select';
import NoIndexHeader from './NoIndexHeader';
import styles from './NoIndexPage.module.scss';

const HERO_IMAGE_FIGMA = 'http://localhost:3845/assets/9ad8a246204f9dae190c8027e4a5b56fb50cbf2a.png';
const HERO_IMAGE_FALLBACK = 'linear-gradient(120deg, rgba(12,34,63,0.92), rgba(12,34,63,0.75))';

const HouseIcon = () => (
  <svg aria-hidden='true' className={styles.houseIcon} fill='none' height='28' viewBox='0 0 32 28' width='32'>
    <path
      d='M4 13.5L16 3L28 13.5V25H4V13.5Z'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinejoin='round'
    />
    <path d='M12 25V17H20V25' stroke='currentColor' strokeWidth='1.5' strokeLinejoin='round' />
  </svg>
);

const TownhomeIcon = () => (
  <svg aria-hidden='true' className={styles.houseIcon} fill='none' height='28' viewBox='0 0 32 28' width='32'>
    <path d='M5 12L11 7L17 12V25H5V12Z' stroke='currentColor' strokeWidth='1.5' strokeLinejoin='round' />
    <path d='M17 12L23 7L29 12V25H17V12Z' stroke='currentColor' strokeWidth='1.5' strokeLinejoin='round' />
  </svg>
);

const CondoIcon = () => (
  <svg aria-hidden='true' className={styles.houseIcon} fill='none' height='28' viewBox='0 0 32 28' width='32'>
    <rect height='22' rx='1.5' stroke='currentColor' strokeWidth='1.5' width='12' x='5' y='5' />
    <rect height='22' rx='1.5' stroke='currentColor' strokeWidth='1.5' width='12' x='15' y='1' />
    <line stroke='currentColor' strokeWidth='1.3' x1='9' x2='13' y1='10' y2='10' />
    <line stroke='currentColor' strokeWidth='1.3' x1='9' x2='13' y1='14' y2='14' />
    <line stroke='currentColor' strokeWidth='1.3' x1='9' x2='13' y1='18' y2='18' />
    <line stroke='currentColor' strokeWidth='1.3' x1='19' x2='23' y1='6' y2='6' />
    <line stroke='currentColor' strokeWidth='1.3' x1='19' x2='23' y1='10' y2='10' />
    <line stroke='currentColor' strokeWidth='1.3' x1='19' x2='23' y1='14' y2='14' />
    <line stroke='currentColor' strokeWidth='1.3' x1='19' x2='23' y1='18' y2='18' />
    <line stroke='currentColor' strokeWidth='1.3' x1='19' x2='23' y1='22' y2='22' />
  </svg>
);

const BedroomPill = ({ label, selected, onClick }) => (
  <button className={`${styles.bedroomPill} ${selected ? styles.pillSelected : ''}`} onClick={onClick} type='button'>
    {label}
  </button>
);

const TileOption = ({ label, selected, onClick, icon: Icon }) => (
  <button className={`${styles.tile} ${selected ? styles.tileSelected : ''}`} onClick={onClick} type='button'>
    <Icon />
    <span className={styles.tileLabel}>{label}</span>
  </button>
);

const CheckboxRow = ({ label, helper, checked, onChange }) => (
  <label className={styles.checkboxRow}>
    <div className={styles.checkboxCopy}>
      <span className={styles.checkboxHeading}>{label}</span>
      <span className={styles.checkboxHelper}>{helper}</span>
    </div>
    <input checked={checked} onChange={(event) => onChange(event.target.checked)} type='checkbox' />
    <span className={styles.customCheckbox} aria-hidden='true' />
  </label>
);

const NoIndexPage = ({
  heroImage = HERO_IMAGE_FIGMA,
  heading = 'Non-Index',
  description = 'Select your location and discover the perfect home to make your own',
  logoSrc,
  heroFallback = HERO_IMAGE_FALLBACK,
  onSearchClick,
  onMenuClick,
  onUtilityClick,
  onSubmit,
  onHomeClick,
  onLogoClick,
}) => {
  const [selectedState, setSelectedState] = useState('');
  const [bedroom, setBedroom] = useState('Any');
  const [homeType, setHomeType] = useState('single-family');
  const [timeline, setTimeline] = useState({
    quickMove: true,
    designerAppointed: false,
    buildToOrder: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      state: selectedState,
      bedroom,
      homeType,
      timeline,
    };
    if (onSubmit) {
      onSubmit(payload);
    }
  };

  const resolvedHero = heroImage || HERO_IMAGE_FALLBACK;

  return (
    <div className={styles.page}>
      <NoIndexHeader
        backgroundImage={resolvedHero}
        backgroundFallback={heroFallback}
        onHomeClick={onHomeClick}
        onLogoClick={onLogoClick}
        onMenuClick={onMenuClick}
        onSearchClick={onSearchClick}
        onUtilityClick={onUtilityClick}
        logoSrc={logoSrc}
        title={heading}
      />

      <div className={styles.cardArea}>
        <form className={styles.card} onSubmit={handleSubmit}>
          <p className={styles.bodyCopy}>{description}</p>

          <Select
            className={styles.selectField}
            fullWidth
            onChange={setSelectedState}
            options={[
              { value: 'az', label: 'Arizona' },
              { value: 'ca', label: 'California' },
              { value: 'co', label: 'Colorado' },
              { value: 'fl', label: 'Florida' },
            ]}
            placeholder='Select a State'
            value={selectedState}
          />

          <div className={styles.divider} />

          <div className={styles.sectionHeading}>Bedroom</div>
          <div className={styles.pillRow}>
            {['Any', '1+', '2+', '3+', '4+', '5+'].map((pill) => (
              <BedroomPill key={pill} label={pill} onClick={() => setBedroom(pill)} selected={bedroom === pill} />
            ))}
          </div>

          <div className={styles.divider} />

          <div className={styles.section}>
            <div className={styles.sectionHeading}>Home Types</div>
            <div className={styles.tileGrid}>
              <TileOption
                icon={HouseIcon}
                label='Single-Family Homes'
                onClick={() => setHomeType('single-family')}
                selected={homeType === 'single-family'}
              />
              <TileOption
                icon={TownhomeIcon}
                label='Townhomes'
                onClick={() => setHomeType('townhome')}
                selected={homeType === 'townhome'}
              />
              <TileOption
                icon={CondoIcon}
                label='Condos'
                onClick={() => setHomeType('condo')}
                selected={homeType === 'condo'}
              />
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.section}>
            <div className={styles.sectionHeading}>Timeline</div>
            <div className={styles.checkboxList}>
              <CheckboxRow
                checked={timeline.quickMove}
                helper='Close within 30-180 days'
                label='Quick Move-In Homes'
                onChange={(checked) => setTimeline((prev) => ({ ...prev, quickMove: checked }))}
              />
              <CheckboxRow
                checked={timeline.designerAppointed}
                helper='Close within 90-180 days'
                label='Designer-Appointed Homes'
                onChange={(checked) => setTimeline((prev) => ({ ...prev, designerAppointed: checked }))}
              />
              <CheckboxRow
                checked={timeline.buildToOrder}
                helper='Close within 10 - 14 months'
                label='Build to Order Homes'
                onChange={(checked) => setTimeline((prev) => ({ ...prev, buildToOrder: checked }))}
              />
            </div>
          </div>

          <Button className={styles.cta} fullWidth type='submit'>
            Find Homes
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NoIndexPage;
