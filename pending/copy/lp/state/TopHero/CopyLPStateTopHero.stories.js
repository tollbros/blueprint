import React from 'react';
import getCopyLPStateTopHero from './getCopyLPStateTopHero.js';
import copyLPStateTopHeroJson from '../../data/copyLPStateTopHero.json';
import EditableCopy from '../../../EditableCopy/EditableCopy.js';

const StorySchema = {
  title: 'Copy/lpState',
  component: getCopyLPStateTopHero,
  argTypes: {
    state: { control: 'text' },
  },
};

export default StorySchema;

const AllTemplate = (args) => {
  const targetsToUpdate = Object.keys(copyLPStateTopHeroJson);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <div>
        <b>copy &gt; lp &gt; data &gt; copyLPStateTopHero.json</b>
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
              getCopy={getCopyLPStateTopHero}
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

export const stateTopHeroCopies = AllTemplate.bind({});
stateTopHeroCopies.storyName = 'Top Hero';
stateTopHeroCopies.args = {
  state: 'Texas',
};
