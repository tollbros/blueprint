import React from 'react';
import Button from './Button';
import styles from './ButtonStickerSheet.module.scss';

const ButtonStickerSheet = ({ disabled = false }) => {
  const ButtonVariants = () => {
    const variants = ['contained', 'outlined', 'text'];
    const colors = ['accent', 'primary', 'medium', 'success', 'error'];
    const sizes = ['small', 'medium', 'large'];

    return variants.reduce((acc, variant, index) => {
      const VariantButtons = () => (
        <div className={styles.buttonStickerSheet}>
          <div className={styles.title}>
            <h5>{variant}</h5>
          </div>
          <div className={styles.container}>
            {colors.map((color, indexColor) => {
              return (
                <div className={styles.rowContainer} key={color + indexColor}>
                  {sizes.map((size) => (
                    <div className={styles.cellContainer} key={color + size}>
                      <div className={styles.cell}>
                        {indexColor === 0 && (
                          <div className={styles.columnTitle}>
                            <h5>{size}</h5>
                          </div>
                        )}
                        <div className={styles.cell}>
                          <Button variant={variant} color={color} size={size} disabled={disabled}>
                            {color}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      );
      return [...acc, <VariantButtons key={variant + index} />];
    }, []);
  };

  return (
    <>
      <ButtonVariants />
    </>
  );
};

export default ButtonStickerSheet;
