import React from 'react';
import getCopyLPCountyH1 from './getCopyLPCountyH1.js';
import copyLPCountyH1Json from './copyLPCountyH1.json';
import EditableCopy from '../../../EditableCopy/EditableCopy.js';

const StorySchema = {
  title: 'Copy/LP/County',
  component: getCopyLPCountyH1,
  argTypes: {
    county: { control: 'text' },
  },
};

export default StorySchema;

const AllTemplate = (args) => {
  const targetsToUpdate = Object.keys(copyLPCountyH1Json);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <div>
        <b>LP &gt; County &gt; H1 &gt; copyLPCountyH1.json</b>
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
              getCopy={getCopyLPCountyH1}
              copyJson={copyLPCountyH1Json}
              fileName={'copyLPCountyH1.json'}
              targetToUpdate={targetToUpdate}
            />
          );
        })}
      </div>
    </div>
  );
};

export const countyH1Copies = AllTemplate.bind({});
countyH1Copies.storyName = 'h1';
countyH1Copies.args = {
  county: 'Williamson',
};
