import React from 'react';
import getCopyLPCountyTopHero from './getCopyLPCountyTopHero.js';
import copyLPCountyTopHeroJson from './copyLPCountyTopHero.json';
import EditableCopy from '../../../EditableCopy/EditableCopy.js';

const StorySchema = {
  title: 'Copy/LP/County',
  component: getCopyLPCountyTopHero,
  argTypes: {
    county: { control: 'text' },
    state: { control: 'text' },
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
              county={args.county}
              state={args.state}
              getCopy={getCopyLPCountyTopHero}
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

export const countyTopHeroCopies = AllTemplate.bind({});
countyTopHeroCopies.storyName = 'Top Hero';
countyTopHeroCopies.args = {
  county: 'Williamson',
  state: 'Texas',
};
