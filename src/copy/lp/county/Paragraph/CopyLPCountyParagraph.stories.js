import React from 'react';
import getCopyLPCountyParagraph from './getCopyLPCountyParagraph.js';
import copyLPCountyParagraphJson from './copyLPCountyParagraph.json';
import EditableCopy from '../../../EditableCopy/EditableCopy.js';

const StorySchema = {
  title: 'Copy/LP/County',
  component: getCopyLPCountyParagraph,
  argTypes: {
    county: { control: 'text' },
    communityName: { control: 'text' },
  },
};

export default StorySchema;

const AllTemplate = (args) => {
  const targetsToUpdate = Object.keys(copyLPCountyParagraphJson).filter((key) => !key.endsWith('Plural'));
  const pluralTargetsToUpdate = Object.keys(copyLPCountyParagraphJson).filter((key) => key.endsWith('Plural'));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <div>
        <b>LP &gt; County &gt; H1 &gt; copyLPCountyParagraph.json</b>
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
              county={args.county}
              communityName={args.communityName}
              isPlural={targetToUpdate.endsWith('Plural')}
              isNoQMIs={targetToUpdate.includes('NoQMIs')}
              isNoHomeDesigns={targetToUpdate.includes('NoHomeDesigns')}
              getCopy={getCopyLPCountyParagraph}
              copyJson={copyLPCountyParagraphJson}
              fileName={'copyLPCountyParagraph.json'}
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
              county={args.county}
              communityName={args.communityName}
              isPlural={targetToUpdate.endsWith('Plural')}
              isNoQMIs={targetToUpdate.includes('NoQMIs')}
              isNoHomeDesigns={targetToUpdate.includes('NoHomeDesigns')}
              getCopy={getCopyLPCountyParagraph}
              copyJson={copyLPCountyParagraphJson}
              fileName={'copyLPCountyParagraph.json'}
              targetToUpdate={targetToUpdate}
            />
          );
        })}
      </div>
    </div>
  );
};

export const countyParagraphCopies = AllTemplate.bind({});
countyParagraphCopies.storyName = 'Paragraph';
countyParagraphCopies.args = {
  county: 'Williamson',
  communityName: 'Hidden Creeks at Lakewood Park - Harvest Collection',
};
