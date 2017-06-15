import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import ModelProperty from './model-property';

const Model = ({m, name}) => (
    <div>
        <h1>{name}</h1>
        {m.description ?
            <div>
                <h2 id='description'>{'Description'}</h2>
                <p><ReactMarkdown source={m.description} /></p>
            </div> : null
        }
        {m['x-methods-used-in'].length ?
            <div>
                <h2 id='references'>{'References'}</h2>
                <p>{'This model is used in the following APIs:'}</p>
                <ul>
                    {m['x-methods-used-in'].map((method) => {
                        return (
                            <li>
                                <a href={`../../methods/${method}`}>{method}</a>
                            </li>
                        );
                    })}
                </ul>
            </div> : null
        }
        <ul className='normal' />
        <h2 id='fields'>{'Fields'}</h2>

        <table className='styled-table'>
            <thead>
                <tr>
                    <th>{'Parameters'}</th>
                    <th>{'Attributes'}</th>
                    <th>{'Summary'}</th>
                </tr>
            </thead>
            <tbody>
                {m.properties ?
                    Object.keys(m.properties).map((key) => <ModelProperty name={key} prop={m.properties[key]} requiredProps={m.required} />) :
                    <ModelProperty name={name} prop={m} requiredProps={m.required} />
                }
            </tbody>
        </table>
        {m.example ?
            <div>
                <h2>{`Example ${name}`}</h2>
                <pre className='highlight'>{JSON.stringify(m.example, null, 4).replace(/'/g, '')}</pre>
            </div> : null
        }
    </div>
);

export default Model;
