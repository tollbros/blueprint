import React from 'react';
import styles from './PaletteTokenTypes.module.scss';

const PaletteTokenTypes = ({ data, dataKey, numbersOnly = false, isDeep = false }) => {
  switch (typeof data) {
    case 'string':
      if (data.startsWith('#') || data.startsWith('rgb')) {
        return (
          <div className={styles.string}>
            {!isDeep && (
              <div className={styles.stringKey}>
                <p>{dataKey}</p>
              </div>
            )}
            <div className={styles.stringColor}>
              <div className={styles.stringBox} style={{ backgroundColor: data }} />
            </div>
            <div className={styles.stringDescription}>
              {isDeep && (
                <pre>
                  <b>{dataKey}</b>
                </pre>
              )}
              <pre>{data}</pre>
            </div>
          </div>
        );
      }

      return (
        <div>
          <pre>
            <b>{dataKey}</b>
          </pre>
          <pre>{data}</pre>
        </div>
      );
    case 'object':
      if (Array.isArray(data)) {
        return (
          <div>
            <pre>{dataKey}</pre>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        );
      }

      return (
        <div>
          <div>
            <div>
              <p>{dataKey}</p>
            </div>
            <div>
              {Object.keys(data).map((key) => (
                <PaletteTokenTypes key={key} dataKey={key} data={data[key]} isDeep />
              ))}
            </div>
          </div>
        </div>
      );
    case 'number':
      if (!numbersOnly) {
        return null;
      }

      return (
        <div>
          <pre>{dataKey}</pre>
          <pre>{data}</pre>
        </div>
      );

    case 'function': {
      return null;
    }

    default:
      return (
        <div>
          <pre>{typeof data}</pre>
          <pre>{dataKey}</pre>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      );
  }
};

export default PaletteTokenTypes;
