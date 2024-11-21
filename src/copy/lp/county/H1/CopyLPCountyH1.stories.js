import React from 'react';
import CopyLPCountyH1 from './CopyLPCountyH1.js';
import copyLPCountyH1Json from './copyLPCountyH1.json';
import EditableCopy from '../../../EditableCopy/EditableCopy.js';

const StorySchema = {
  title: 'Copy/LP/County/H1',
  component: CopyLPCountyH1,
  argTypes: {
    location: { control: 'text' },
    isTownhome: { control: 'boolean' },
    isCondo: { control: 'boolean' },
    isActiveAdult: { control: 'boolean' },
    isSingleFamily: { control: 'boolean' },
    isFuture: { control: 'boolean' },
    isFuturePlural: { control: 'boolean' },
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
              location={args.location}
              CopyComponent={CopyLPCountyH1}
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

export const all = AllTemplate.bind({});
all.args = {
  location: 'Williamson',
};

const BaseTemplate = (args) => {
  return <CopyLPCountyH1 {...args} />;
};

export const base = BaseTemplate.bind({});

base.args = {
  location: 'Williamson',
  isTownhome: false,
  isCondo: false,
  isActiveAdult: false,
  isSingleFamily: false,
  isFuture: false,
  isFuturePlural: false,
};
