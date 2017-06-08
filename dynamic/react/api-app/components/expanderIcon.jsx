import React from 'react';
import PropTypes from 'prop-types';
const ExpanderIcon = ({startPosition}) => (
	<svg id='Layer_1' style={{display: 'block', margin: 'auto'}} version='1.1' viewBox='0 0 512 512' width='24px' x='0px' xmlSpace='preserve' y='0px'>
		<g transform={`rotate(${startPosition === 'UP' ? '180' : '0'} 256 256)`}>
			<g>
				<path d='M254.8,5.9c-139,0-252,113.1-252,252s113.1,252,252,252s252-113.1,252-252S393.8,5.9,254.8,5.9z M254.8,454
					c-108.1,0-196-88-196-196s87.9-196,196-196s196,88,196,196S362.9,454,254.8,454z'/>
				<polygon points='254.8,269.4 172.5,187.1 132.9,226.7 254.8,348.6 376.8,226.7 337.2,187.1' />
			</g>
		</g>
	</svg>
);

ExpanderIcon.displayName = 'Expand and Collapse Icon';
ExpanderIcon.propTypes = {
    startPosition: PropTypes.oneOf(['UP', 'DOWN']).isRequired
};

export default ExpanderIcon;
