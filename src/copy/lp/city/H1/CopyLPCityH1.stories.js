import React from 'react';
import CopyLPCityH1 from './CopyLPCityH1.js';
import copyLPCityH1Json from './copyLPCityH1.json';
import EditableCopy from '../../../EditableCopy/EditableCopy.js';

const StorySchema = {
  title: 'Copy/LP/City/H1',
  component: CopyLPCityH1,
  argTypes: {
    location: { control: 'text' },
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
              location={args.location}
              CopyComponent={CopyLPCityH1}
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

export const all = AllTemplate.bind({});
all.args = {
  location: 'Austin, Texas',
};
