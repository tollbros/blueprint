import React from 'react';
import CopyLPStateH1 from './CopyLPStateH1.js';
import copyLPStateH1Json from './copyLPStateH1.json';
import EditableCopy from '../../../EditableCopy/EditableCopy.js';

const StorySchema = {
  title: 'Copy/LP/State/H1',
  component: CopyLPStateH1,
  argTypes: {
    state: { control: 'text' },
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
              CopyComponent={CopyLPStateH1}
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

export const all = AllTemplate.bind({});
all.args = {
  state: 'Texas',
};

const BaseTemplate = (args) => {
  return <CopyLPStateH1 {...args} />;
};

export const base = BaseTemplate.bind({});

base.args = {
  state: 'Texas',
  isTownhome: false,
  isCondo: false,
  isActiveAdult: false,
  isSingleFamily: false,
  isFuture: false,
  isFuturePlural: false,
};
