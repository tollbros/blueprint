import React from 'react';
import Button from '../../primitives/Button/Button';
import styles from './Overview.module.scss';

export default function CommunityOverview({
  // // overview,
  // overviewGallery = [],
  // communityTypes,
  // homeTypes,
  // title,
  // bulletPoints = [],
  // eventLink = '',
  // eventText,
  // socialMedia,
  qmis = [],
  // communities,
  // communityName,
  // eventData,
  // communityId,
  // showRenderOverlay,
  // options = [],
  rows = [],
}) {
  return (
    <div className={styles.overview}>
      <div>
        <div>
          <h1>Sterling Grove</h1>
        </div>
        <div>
          <h3>Home Starts Here</h3>
        </div>
        <div>
          <p>Golf, Amenities/Resort Community</p>
        </div>
        <div>
          <p>
            Awarded 2023 Master Plan Community of the Year, Sterling Grove is an all-ages resort-style community
            showcasing new homes in the growing city of Surprise, Arizona, featuring single-family and 55+ active-adult
            collections with a large private clubhouse, spectacular resort-style amenities, and Arizona’s newest
            championship golf course.
          </p>
        </div>
        <div>
          <section>
            <p>Master Plan Community Including 6 Collections</p>
            <article>
              <div>
                <div>
                  {rows.map((row) => (
                    <div key={row.name}>
                      <div>{row.name}</div>
                      <div>{row.homeType}</div>
                      <div>{row.sqft}</div>
                      <div>{row.pricedFrom}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </section>
        </div>
        <div>
          <Button>{qmis.length} Quick Move-In Homes Available</Button>
        </div>
      </div>
    </div>
  );
}
