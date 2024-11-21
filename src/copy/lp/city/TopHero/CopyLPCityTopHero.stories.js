import React from 'react';
import CopyLPCityTopHero from './CopyLPCityTopHero.js';
import copyLPCityTopHeroJson from './copyLPCityTopHero.json';
import EditableCopy from '../../../EditableCopy/EditableCopy.js';

const StorySchema = {
  title: 'Copy/LP/City/TopHero',
  component: CopyLPCityTopHero,
  argTypes: {
    location: { control: 'text' },
    isTownhome: { control: 'boolean' },
    isCondo: { control: 'boolean' },
    isActiveAdult: { control: 'boolean' },
    isSingleFamily: { control: 'boolean' },
    isFuture: { control: 'boolean' },
    isNearBy: { control: 'boolean' },
  },
};

export default StorySchema;

const AllTemplate = (args) => {
  const targetsToUpdate = Object.keys(copyLPCityTopHeroJson);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <div>
        <b>LP &gt; City &gt; H1 &gt; copyLPCityTopHero.json</b>
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
              CopyComponent={CopyLPCityTopHero}
              copyJson={copyLPCityTopHeroJson}
              fileName={'copyLPCityTopHero.json'}
              targetToUpdate={targetToUpdate}
            />
          );
        })}
      </div>
      <div>
        <b>IF nearby city:</b>
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
              isNearBy={true}
              disabled={true}
              CopyComponent={CopyLPCityTopHero}
              copyJson={copyLPCityTopHeroJson}
              fileName={'copyLPCityTopHero.json'}
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
  location: 'Austin, Texas',
};

const BaseTemplate = (args) => {
  return <CopyLPCityTopHero {...args} />;
};

export const base = BaseTemplate.bind({});

base.args = {
  location: 'Austin, Texas',
  isTownhome: false,
  isCondo: false,
  isActiveAdult: false,
  isSingleFamily: false,
  isFuture: false,
  isNearBy: true,
};
