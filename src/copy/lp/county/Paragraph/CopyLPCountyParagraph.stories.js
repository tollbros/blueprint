import React from 'react';
import CopyLPCountyParagraph from './CopyLPCountyParagraph.js';
import copyLPCountyParagraphJson from './copyLPCountyParagraph.json';
import EditableCopy from '../../../EditableCopy/EditableCopy.js';

const StorySchema = {
  title: 'Copy/LP/County/Paragraph',
  component: CopyLPCountyParagraph,
  argTypes: {
    location: { control: 'text' },
    communityName: { control: 'text' },
    isTownhome: { control: 'boolean' },
    isCondo: { control: 'boolean' },
    isActiveAdult: { control: 'boolean' },
    isSingleFamily: { control: 'boolean' },
    isFuture: { control: 'boolean' },
    isPlural: { control: 'boolean' },
    isNoQMIs: { control: 'boolean' },
    isNoHomeDesigns: { control: 'boolean' },
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
              location={args.location}
              communityName={args.communityName}
              isPlural={targetToUpdate.endsWith('Plural')}
              isNoQMIs={targetToUpdate.includes('NoQMIs')}
              isNoHomeDesigns={targetToUpdate.includes('NoHomeDesigns')}
              CopyComponent={CopyLPCountyParagraph}
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
              location={args.location}
              communityName={args.communityName}
              isPlural={targetToUpdate.endsWith('Plural')}
              isNoQMIs={targetToUpdate.includes('NoQMIs')}
              isNoHomeDesigns={targetToUpdate.includes('NoHomeDesigns')}
              CopyComponent={CopyLPCountyParagraph}
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

export const all = AllTemplate.bind({});
all.args = {
  location: 'Williamson',
  communityName: 'Hidden Creeks at Lakewood Park - Harvest Collection',
};

const BaseTemplate = (args) => {
  return <CopyLPCountyParagraph {...args} />;
};

export const base = BaseTemplate.bind({});

base.args = {
  location: 'Williamson',
  communityName: 'Hidden Creeks at Lakewood Park - Harvest Collection',
  isTownhome: false,
  isCondo: false,
  isActiveAdult: false,
  isSingleFamily: false,
  isFuture: false,
  isPlural: false,
  isNoQMIs: false,
  isNoHomeDesigns: false,
};
