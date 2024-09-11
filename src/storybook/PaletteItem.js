import React from 'react';

const PaletteItem = ({ backgroundColor, classKey }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        flexBasis: '33%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
      }}
    >
      <div
        style={{
          color: 'transparent',
          backgroundColor,
          width: '48px',
          minWidth: '48px',
          height: '48px',
          marginRight: '8px',
          border: '1px solid #e0e0e0',
          borderRadius: '4px',
        }}
      >
        -
      </div>
      <div>
        <p style={{ margin: '0' }}>{classKey}</p>
        <b>{backgroundColor}</b>
      </div>
    </div>
  );
};

export default PaletteItem;
