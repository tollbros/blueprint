import React from 'react';
import CopyLPStateTopHero from './CopyLPStateTopHero.js';
import copyLPStateTopHeroJson from './copyLPStateTopHero.json';
import EditableCopy from '../../../EditableCopy/EditableCopy.js';

const StorySchema = {
  title: 'Copy/LP/State/TopHero',
  component: CopyLPStateTopHero,
  argTypes: {
    state: { control: 'text' },
    isTownhome: { control: 'boolean' },
    isCondo: { control: 'boolean' },
    isActiveAdult: { control: 'boolean' },
    isSingleFamily: { control: 'boolean' },
    isFuture: { control: 'boolean' },
  },
};

export default StorySchema;

const AllTemplate = (args) => {
  const targetsToUpdate = Object.keys(copyLPStateTopHeroJson);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <div>
        <b>LP &gt; State &gt; H1 &gt; copyLPStateTopHero.json</b>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: targetsToUpdate.map(() => '1fr').join(' '),
        }}
      >
        {targetsToUpdate.map((targetToUpdate, index) => {
          return (
            <EditableCopy
              key={`key-${index}`}
              state={args.state}
              CopyComponent={CopyLPStateTopHero}
              copyJson={copyLPStateTopHeroJson}
              fileName={'copyLPStateTopHero.json'}
              targetToUpdate={targetToUpdate}
            />
          );
        })}
      </div>
    </div>
  );
};

export const all = AllTemplate.bind({});
all.args = {
  state: 'Texas',
};

const BaseTemplate = (args) => {
  return <CopyLPStateTopHero {...args} />;
};

export const base = BaseTemplate.bind({});

base.args = {
  state: 'Texas',
  isTownhome: false,
  isCondo: false,
  isActiveAdult: false,
  isSingleFamily: false,
  isFuture: false,
};
