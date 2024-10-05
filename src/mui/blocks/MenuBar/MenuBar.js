import { cloneElement } from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Button from '../../primitives/Button/Button';
import ContactButtons from '../../partials/ContactButtons';
import styles from './MenuBar.module.scss';

const pages = ['Details', 'Amenities', 'Homes', 'Gallery', 'Availability', 'Financing'];

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const MenuBar = (props) => {
  return (
    <ElevationScroll {...props}>
      <div className={styles.menuBar}>
        <div>
          <div>
            <div>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{
                    my: 2,
                    color: (theme) => theme.palette.text.primary,
                    display: 'block',
                    textTransform: 'capitalize',
                    fontWeight: '500',
                    padding: '0 1rem',
                  }}
                  variant='text'
                >
                  {page}
                </Button>
              ))}
            </div>

            <ContactButtons />
          </div>
        </div>
      </div>
    </ElevationScroll>
  );
};

export default MenuBar;
