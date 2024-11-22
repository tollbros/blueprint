import React from 'react';
import getCopyLPStateH1 from './getCopyLPStateH1.js';
import copyLPStateH1Json from './copyLPStateH1.json';
import EditableCopy from '../../../EditableCopy/EditableCopy.js';

const StorySchema = {
  title: 'Copy/LP/State',
  component: getCopyLPStateH1,
  argTypes: {
    state: { control: 'text' },
  },
};

export default StorySchema;

const AllTemplate = (args) => {
  const targetsToUpdate = Object.keys(copyLPStateH1Json);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <div>
        <b>LP &gt; State &gt; H1 &gt; copyLPStateH1.json</b>
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
              getCopy={getCopyLPStateH1}
              copyJson={copyLPStateH1Json}
              fileName={'copyLPStateH1.json'}
              targetToUpdate={targetToUpdate}
            />
          );
        })}
      </div>
    </div>
  );
};

export const stateH1Copies = AllTemplate.bind({});
stateH1Copies.storyName = 'h1';
stateH1Copies.args = {
  state: 'Texas',
};
