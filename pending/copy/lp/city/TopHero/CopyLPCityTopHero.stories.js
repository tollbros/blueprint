import React from 'react';
import getCopyLPCityTopHero from './getCopyLPCityTopHero.js';
import copyLPCityTopHeroJson from '../../data/copyLPCityTopHero.json';
import EditableCopy from '../../../EditableCopy/EditableCopy.js';

const StorySchema = {
  title: 'Copy/lpCity/TopHero',
  component: getCopyLPCityTopHero,
  argTypes: {
    city: { control: 'text' },
    stateAbbreviation: { control: 'text' },
  },
};

export default StorySchema;

const AllTemplate = (args) => {
  const targetsToUpdate = Object.keys(copyLPCityTopHeroJson);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <div>
        <b>copy &gt; lp &gt; data &gt; copyLPCityTopHero.json</b>
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
              city={args.city}
              stateAbbreviation={args.stateAbbreviation}
              getCopy={getCopyLPCityTopHero}
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
              city={args.city}
              stateAbbreviation={args.stateAbbreviation}
              isNearBy={true}
              disabled={true}
              getCopy={getCopyLPCityTopHero}
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

export const cityTopHeroCopies = AllTemplate.bind({});
cityTopHeroCopies.storyName = 'Top Hero';
cityTopHeroCopies.args = {
  city: 'Austin',
  stateAbbreviation: 'TX',
};
