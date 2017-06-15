import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const buildExternalLink = (link, isArray = false) => {
    const linkLeaf = link.substring(link.lastIndexOf('/'));
    const linkLeafSimpleName = linkLeaf.substring(link.lastIndexOf(' > '));
    const anchorLink = <a href={`../${linkLeaf}`}>{linkLeafSimpleName}</a>;

    return isArray ?
        <div>{'Array['}{anchorLink}{']'}</div> : anchorLink;
};

// Either returns a link to another Model page or "format" information
const buildLinkOrType = ({p}) => {
    switch (p.type) {
    case 'object':
    case undefined:
        return buildExternalLink(p.$ref);
    case 'array':
        return p.$ref ? buildExternalLink(p.$ref, true) : <div>{'Array['}{p.items.type}{']'}</div>;
    default:
        if (p.format) {
            return <span>{p.format}<br/></span>;
        }
        if (p.enum) {
            return (
                <div>
                    {'Enum:'}<br/>
                    {p.enum.map((val) => <span>&nbsp;&nbsp;&nbsp;{val}</span>)}
                </div>
            );
        }
        return <span>{p.type}<br/></span>;
    }
};

const ModelProperty = ({name, prop, requiredProps}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>
                <buildLinkOrType p={prop} />
                <span>{requiredProps.contains('name') ? 'Required' : 'Optional'}<br/></span>
                {prop.readOnly ? <span>{'Read Only'}<br/></span> : null}
                {prop.hasOwnProperty('maxLength') ? <span>{`Max Length: ${prop.maxLength}`}<br/></span> : null}
                {prop.hasOwnProperty('minLength') ? <span>{`Min Length: ${prop.minLength}`}<br/></span> : null}
            </td>
            <td>
                <ReactMarkdown source={prop.description} />
                {prop.example && prop.type !== 'array' ?
                    <div>
                        <b>{'Example:'}</b>
                        <br />
                        <pre className='highlight'>{prop.example}</pre>
                    </div> : null
                }
            </td>
        </tr>
    );
};

export default ModelProperty;
