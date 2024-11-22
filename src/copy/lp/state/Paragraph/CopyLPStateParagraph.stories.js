import React from 'react';
import getCopyLPStateParagraph from './getCopyLPStateParagraph.js';
import copyLPStateParagraphJson from './copyLPStateParagraph.json';
import EditableCopy from '../../../EditableCopy/EditableCopy.js';

const StorySchema = {
  title: 'Copy/LP/State',
  component: getCopyLPStateParagraph,
  argTypes: {
    state: { control: 'text' },
    communityName: { control: 'text' },
  },
};

export default StorySchema;

const AllTemplate = (args) => {
  const targetsToUpdate = Object.keys(copyLPStateParagraphJson).filter((key) => !key.endsWith('Plural'));
  const pluralTargetsToUpdate = Object.keys(copyLPStateParagraphJson).filter((key) => key.endsWith('Plural'));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <div>
        <b>LP &gt; State &gt; H1 &gt; copyLPStateParagraph.json</b>
      </div>

      <div>
        <h6>Single Community</h6>
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
              communityName={args.communityName}
              isPlural={targetToUpdate.endsWith('Plural')}
              isNoQMIs={targetToUpdate.includes('NoQMIs')}
              isNoHomeDesigns={targetToUpdate.includes('NoHomeDesigns')}
              getCopy={getCopyLPStateParagraph}
              copyJson={copyLPStateParagraphJson}
              fileName={'copyLPStateParagraph.json'}
              targetToUpdate={targetToUpdate}
            />
          );
        })}
      </div>
      <div>
        <h6>Multiple Communities</h6>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: pluralTargetsToUpdate.map(() => '1fr').join(' '),
        }}
      >
        {pluralTargetsToUpdate.map((targetToUpdate, index) => {
          return (
            <EditableCopy
              key={`key-${index}`}
              state={args.state}
              communityName={args.communityName}
              isPlural={targetToUpdate.endsWith('Plural')}
              isNoQMIs={targetToUpdate.includes('NoQMIs')}
              isNoHomeDesigns={targetToUpdate.includes('NoHomeDesigns')}
              getCopy={getCopyLPStateParagraph}
              copyJson={copyLPStateParagraphJson}
              fileName={'copyLPStateParagraph.json'}
              targetToUpdate={targetToUpdate}
            />
          );
        })}
      </div>
    </div>
  );
};

export const stateParagraphCopies = AllTemplate.bind({});
stateParagraphCopies.storyName = 'Paragraph';
stateParagraphCopies.args = {
  state: 'Texas',
  communityName: 'Hidden Creeks at Lakewood Park - Harvest Collection',
};
