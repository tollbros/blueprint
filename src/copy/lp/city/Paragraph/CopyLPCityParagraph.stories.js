import React from 'react';
import getCopyLPCityParagraph from './getCopyLPCityParagraph.js';
import copyLPCityParagraphJson from './copyLPCityParagraph.json';
import EditableCopy from '../../../EditableCopy/EditableCopy.js';

const StorySchema = {
  title: 'Copy/LP/City',
  component: getCopyLPCityParagraph,
  argTypes: {
    city: { control: 'text' },
    communityName: { control: 'text' },
  },
};

export default StorySchema;

const AllTemplate = (args) => {
  const targetsToUpdate = Object.keys(copyLPCityParagraphJson).filter((key) => !key.endsWith('Plural'));
  const pluralTargetsToUpdate = Object.keys(copyLPCityParagraphJson).filter((key) => key.endsWith('Plural'));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <div>
        <b>LP &gt; City &gt; H1 &gt; copyLPCityParagraph.json</b>
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
              city={args.city}
              communityName={args.communityName}
              isPlural={targetToUpdate.endsWith('Plural')}
              getCopy={getCopyLPCityParagraph}
              copyJson={copyLPCityParagraphJson}
              fileName={'copyLPCityParagraph.json'}
              targetToUpdate={targetToUpdate}
            />
          );
        })}
      </div>
      <div>
        <b>IF nearby city:</b>
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
              communityName={args.communityName}
              isNearBy={true}
              disabled={true}
              getCopy={getCopyLPCityParagraph}
              copyJson={copyLPCityParagraphJson}
              fileName={'copyLPCityParagraph.json'}
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
              city={args.city}
              communityName={args.communityName}
              isPlural={targetToUpdate.endsWith('Plural')}
              isNoQMIs={targetToUpdate.includes('NoQMIs')}
              isNoHomeDesigns={targetToUpdate.includes('NoHomeDesigns')}
              getCopy={getCopyLPCityParagraph}
              copyJson={copyLPCityParagraphJson}
              fileName={'copyLPCityParagraph.json'}
              targetToUpdate={targetToUpdate}
            />
          );
        })}
      </div>
      <div>
        <b>IF nearby city:</b>
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
              city={args.city}
              communityName={args.communityName}
              isNearBy={true}
              disabled={true}
              getCopy={getCopyLPCityParagraph}
              copyJson={copyLPCityParagraphJson}
              fileName={'copyLPCityParagraph.json'}
              targetToUpdate={targetToUpdate}
            />
          );
        })}
      </div>
    </div>
  );
};

export const cityParagraphCopies = AllTemplate.bind({});
cityParagraphCopies.storyName = 'Paragraph';
cityParagraphCopies.args = {
  city: 'Austin',
  communityName: 'Hidden Creeks at Lakewood Park - Harvest Collection',
};
