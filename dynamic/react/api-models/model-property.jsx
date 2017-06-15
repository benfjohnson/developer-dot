import React from 'react';
import {ModelPropertyType} from 'prop-types';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

/* eslint-disable react/no-multi-comp */

const buildExternalLink = (link, isArray = false) => {
    const linkLeaf = link.substring(link.lastIndexOf('/') + 1);
    let linkLeafSimpleName;

    if (linkLeaf.includes(' > ')) {
        linkLeafSimpleName = linkLeaf.substring(linkLeaf.lastIndexOf(' > ') + 3);
    } else {
        linkLeafSimpleName = linkLeaf;
    }
    const anchorLink = <a href={`../${linkLeaf}`}>{linkLeafSimpleName}</a>;

    return isArray ?
        <div>{'Array['}{anchorLink}{']'}</div> : <div>{anchorLink}</div>;
};

buildExternalLink.displayName = 'Build External Link';

// Either returns a link to another Model page or "format" information
const BuildLinkOrType = ({modelName, p, propName}) => {
    switch (p.type) {
    case 'object':
    case undefined:
        return buildExternalLink(p.$ref);
    case 'array':
        return p.items.$ref ? buildExternalLink(p.items.$ref, true) : <div>{'Array['}{p.items.type}{']'}</div>;
    default:
        if (p.format) {
            return <span>{p.format}<br/></span>;
        }
        if (p.enum) {
            return (
                <div>
                    <a href={`../enums/${modelName} > ${propName}`}>{propName}</a><br/>
                    Enum<br/>
                </div>
            );
        }
        return <span>{p.type}<br/></span>;
    }
};

BuildLinkOrType.displayName = 'Build Link or Type';
BuildLinkOrType.propTypes = {p: ModelPropertyType};

const ModelProperty = ({name, prop, requiredProps = []}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>
                <BuildLinkOrType p={prop} />
                <span>{requiredProps.includes('name') ? 'Required' : 'Optional'}<br/></span>
                {prop.readOnly ? <span>{'Read Only'}<br/></span> : null}
                {prop.hasOwnProperty('maxLength') ? <span>{`Max Length: ${prop.maxLength}`}<br/></span> : null}
                {prop.hasOwnProperty('minLength') ? <span>{`Min Length: ${prop.minLength}`}<br/></span> : null}
            </td>
            <td>
                <ReactMarkdown source={prop.description} />
                {prop.example && prop.type !== 'array' ?
                    <span>
                        <br /><br />
                        <b>{'Example:'}</b>
                        <br />
                        <pre className='highlight'>{prop.example}</pre>
                    </span> : null
                }
            </td>
        </tr>
    );
};

ModelProperty.displayName = 'Model Property';
ModelProperty.propTypes = {
    name: PropTypes.string,
    prop: ModelPropertyType,
    requiredProps: PropTypes.arrayOf(PropTypes.string)
};

export default ModelProperty;
