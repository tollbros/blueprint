import React from 'react';
import CopyLPCountyTopHero from './CopyLPCountyTopHero.js';
import copyLPCountyTopHeroJson from './copyLPCountyTopHero.json';
import EditableCopy from '../../../EditableCopy/EditableCopy.js';

const StorySchema = {
  title: 'Copy/LP/County/TopHero',
  component: CopyLPCountyTopHero,
  argTypes: {
    location: { control: 'text' },
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
  const targetsToUpdate = Object.keys(copyLPCountyTopHeroJson);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <div>
        <b>LP &gt; County &gt; H1 &gt; copyLPCountyTopHero.json</b>
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
              location={args.location}
              state={args.state}
              CopyComponent={CopyLPCountyTopHero}
              copyJson={copyLPCountyTopHeroJson}
              fileName={'copyLPCountyTopHero.json'}
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
  location: 'Williamson',
  state: 'Texas',
};

const BaseTemplate = (args) => {
  return <CopyLPCountyTopHero {...args} />;
};

export const base = BaseTemplate.bind({});

base.args = {
  location: 'Austin, Texas',
  isTownhome: false,
  isCondo: false,
  isActiveAdult: false,
  isSingleFamily: false,
  isFuture: false,
};
