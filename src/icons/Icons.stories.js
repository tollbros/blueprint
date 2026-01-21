import React from 'react';
import { icons } from './index';

const StorySchema = {
  title: 'Icons/All',
  component: () => {
    return (
      <div style={{ display: 'grid', gap: '12px' }}>
        {icons.map((icon) => {
          const resolvedSrc = typeof icon.src === 'string' ? icon.src : icon.src?.src || icon.src?.default || '';
          return (
          <div
            key={icon.name}
            style={{
              display: 'grid',
              gridTemplateColumns: '48px 1fr',
              alignItems: 'center',
              gap: '12px',
              padding: '8px 12px',
              border: '1px solid #e0e0e0',
              borderRadius: '6px',
            }}
          >
            <div
              style={{
                width: 'var(--tb-Icons-size-base)',
                height: 'var(--tb-Icons-size-base)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#f5f5f5',
                borderRadius: '6px',
                color: 'var(--tb-globalTokens-contentColor)',
              }}
            >
              <img alt={`${icon.name} icon`} src={resolvedSrc} style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{ display: 'grid', gap: '2px' }}>
              <div style={{ font: 'var(--tb-typography-Gotham-B-700-font)' }}>{icon.name}</div>
              <div style={{ font: 'var(--tb-typography-Gotham-XS-400-font)', color: '#666' }}>{resolvedSrc}</div>
            </div>
          </div>
          );
        })}
      </div>
    );
  },
  parameters: {
    layout: 'centered',
  },
  args: {},
  argTypes: {},
};

export default StorySchema;

export const Default = {
  args: {},
};
