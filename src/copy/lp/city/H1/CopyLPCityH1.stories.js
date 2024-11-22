import React from 'react';
import getCopyLPCityH1 from './getCopyLPCityH1.js';
import copyLPCityH1Json from './copyLPCityH1.json';
import EditableCopy from '../../../EditableCopy/EditableCopy.js';

const StorySchema = {
  title: 'Copy/LP/City',
  component: getCopyLPCityH1,
  argTypes: {
    city: { control: 'text' },
  },
};

export default StorySchema;

const AllTemplate = (args) => {
  const targetsToUpdate = Object.keys(copyLPCityH1Json);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <div>
        <b>LP &gt; City &gt; H1 &gt; copyLPCityH1.json</b>
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
              getCopy={getCopyLPCityH1}
              copyJson={copyLPCityH1Json}
              fileName={'copyLPCityH1.json'}
              targetToUpdate={targetToUpdate}
            />
          );
        })}
      </div>
    </div>
  );
};

export const cityH1Copies = AllTemplate.bind({});
cityH1Copies.storyName = 'h1';
cityH1Copies.args = {
  city: 'Austin',
};
