import React from 'react';
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
            if (p.format === 'date-time') {
                if (p['x-date-type']) {
                    return <span>{p['x-date-type']}<br/></span>;
                }
                return <span>{p.format}<br/></span>;
            }
            return <span>{p.format}<br/></span>;
        }
        if (p.enum) {
            const href = p['x-enum-type'] || `${modelName} > ${propName}`;
            const text = p['x-enum-type'] || propName;

            return (
                <div>
                    <a href={`../enums/${href}`}>{text}</a><br/>
                    {'Enum'}<br/>
                </div>
            );
        }
        return <span>{p.type}<br/></span>;
    }
};

BuildLinkOrType.displayName = 'Build Link or Type';
BuildLinkOrType.propTypes = {modelName: PropTypes.string, p: PropTypes.object, propName: PropTypes.string};

const ModelProperty = ({modelName, name, prop, requiredProps = []}) => {
    return (
        <tr>
            <td>{name}</td>

            <td>
                <BuildLinkOrType modelName={modelName} p={prop} propName={name} />
                <span>{requiredProps.includes(name) ? 'Required' : 'Optional'}<br/></span>
                {prop.readOnly ? <span>{'Read Only'}<br/></span> : null}
                {prop.hasOwnProperty('maxLength') ? <span>{`Max Length: ${prop.maxLength}`}<br/></span> : null}
                {prop.hasOwnProperty('minLength') ? <span>{`Min Length: ${prop.minLength}`}<br/></span> : null}
            </td>
            <td>
                <ReactMarkdown source={prop.description} />
                {prop.example && prop.type !== 'array' ?
                    <span>
                        <br />
                        <b>{'Example:'}</b>
                        <br />
                        {prop.format === 'date-time' && prop['x-date-type'] === 'date-only' ?
                            <pre className='highlight'>{prop.example.toString().split('T')[0]}</pre> :
                            <pre className='highlight'>{typeof prop.example !== 'object' ? prop.example.toString() : JSON.stringify(prop.example, null, 4).replace(/'/g, '')}</pre>
                        }
                    </span> : null
                }
            </td>
        </tr>
    );
};

ModelProperty.displayName = 'Model Property';
ModelProperty.propTypes = {
    modelName: PropTypes.string,
    name: PropTypes.string,
    prop: PropTypes.object,
    requiredProps: PropTypes.arrayOf(PropTypes.string)
};

export default ModelProperty;
