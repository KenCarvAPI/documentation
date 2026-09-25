import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

// Visually hidden pointer for AI agents reading the HTML: the page index lives in llms.txt.
// Hidden from sighted users and skipped by screen readers and keyboard focus.
const hidden = {
  position: 'absolute',
  width: 1,
  height: 1,
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  whiteSpace: 'nowrap',
};

export default function Root({children}) {
  return (
    <>
      <div style={hidden} aria-hidden="true">
        <a href={useBaseUrl('/llms.txt')} tabIndex={-1}>
          For the complete documentation index, see llms.txt
        </a>
      </div>
      {children}
    </>
  );
}
