import React from 'react';
import './Full.story.style.scss';  // Add this line


export const InfoRow = ({ label, value }) => (
  <div className="info-section__row">
    <span className="info-section__row-label">{label}</span>
    <span className="info-section__row-value">{value}</span>
  </div>
);

export const InfoContent = ({ rows }) => (
  <div className="info-section__content">
    {rows.map((row, index) => (
      <InfoRow key={index} {...row} />
    ))}
  </div>
);

export const InfoSection = ({ title, rows, groups }) => (
  <div className="info-section">
    <div className="info-section__title">{title}</div>
    {rows && (
      <div className="info-section__groups">
        <InfoContent rows={rows} />
      </div>
    )}
    {groups && (
      <div className="info-section__groups">
        {groups.map((group, index) => (
          <InfoContent key={index} rows={group} />
        ))}
      </div>
    )}
  </div>
);

export const ComponentLabel = ({ componentNumber, componentName }) => (
  <div className="component-wrapper__label">
    <div className="component-wrapper__label-number">
      Component #{componentNumber}
    </div>
    <div className="component-wrapper__label-name">
      {componentName}
    </div>
  </div>
);

export const fullStory = (StoryFn, context, options = {}) => {
  const {
    variations = [],
    properties = [],
    customContent = null,
  } = options;

  return (
    <>
      <div className="story-wrapper"></div>
      <div className="component-wrapper">
        <ComponentLabel
          componentNumber={context.args.componentNumber}
          componentName={context.args.componentName}
        />
        <div className="component-container">
          {/* Ensure that StoryFn (which renders the button) is inside this container */}
          <StoryFn />
        </div>
      </div>
      <div className="content-wrapper">
        {variations.length > 0 && (
          <>
            <InfoSection title="Noted Variations" rows={variations} />
            <div className="info-section__divider" />
          </>
        )}
        {properties.length > 0 && (
          <InfoSection title="Noted Properties" groups={properties} />
        )}
        {customContent}
      </div>
      <div className="lorem-ipsum-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </div>
    </>
  );
};
