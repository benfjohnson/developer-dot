import React from 'react';
import PropTypes from 'prop-types';

const buildExternalLink = (link, isArray = false) => {
    const linkLeaf = link.substring(link.lastIndexOf('/'));
    const linkLeafSimpleName = linkLeaf.substring(link.lastIndexOf(' > '));
    const anchorLink = <a href={`../${linkLeaf}`}>{linkLeafSimpleName}</a>;

    return isArray ?
        <div>{'Array['}{anchorLink}{']'}</div> : anchorLink;
};

// Either returns a link to another Model page or "format" information
const buildLinkOrType = (p) => {
    switch (p.type) {
    case 'object':
    case undefined:
        return buildExternalLink(p.$ref);
    case 'array':
        return p.$ref ? buildExternalLink(p.$ref, true) : <div>{'Array['}{p.items.type}{']'}</div>;
    default:

    }


}

const ObjectProperty = ({p}) => buildRefLink(p.$ref);

const ModelProperty = ({name, p}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>
                {!p.type || p.type === 'object' ?
                    <ObjectProperty p={p} /> :
                    null
                }
            </td>
        </tr>
    );
};
